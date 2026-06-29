import { NextRequest, NextResponse } from 'next/server';
import type Stripe from 'stripe';

export const dynamic = 'force-dynamic';

function getStripe() {
  // Lazy import — 只在请求时实例化，构建时不触发
  const { default: StripeSDK } = require('stripe') as { default: typeof Stripe };
  return new StripeSDK(process.env.STRIPE_SECRET_KEY || '');
}

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_WEBHOOK_SECRET || !process.env.STRIPE_SECRET_KEY) {
    console.warn('Stripe env vars not configured');
    return NextResponse.json({ received: true });
  }

  const body = await req.text();
  const sig = req.headers.get('stripe-signature') || '';

  let event: Stripe.Event;

  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', (err as Error).message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('✅ Payment succeeded:', {
        sessionId: session.id,
        planId: session.metadata?.planId,
        amount: session.amount_total,
        email: session.customer_details?.email,
      });

      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
        try {
          const { createAdminSupabase } = await import('@/lib/supabase/admin');
          const db = createAdminSupabase();
          const { error } = await db.from('payments').upsert(
            {
              stripe_session: session.id,
              plan_id: session.metadata?.planId || null,
              amount_total: session.amount_total || null,
              customer_email: session.customer_details?.email || null,
              status: 'completed',
            },
            { onConflict: 'stripe_session' },
          );
          if (error) console.error('Supabase payment insert error:', error.message);
        } catch (err) {
          console.error('Supabase payment write failed:', err);
        }
      }
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
