import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_WEBHOOK_SECRET || !process.env.STRIPE_SECRET_KEY) {
    console.warn('Stripe env vars not configured');
    return NextResponse.json({ received: true });
  }

  const body = await req.text();
  const sig = req.headers.get('stripe-signature') || '';

  try {
    const { default: Stripe } = await import('stripe');
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
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
          const { error } = await db.from('payments').upsert({
            stripe_session: session.id,
            plan_id: session.metadata?.planId || null,
            amount_total: session.amount_total || null,
            customer_email: session.customer_details?.email || null,
            status: 'completed',
          }, { onConflict: 'stripe_session' });
          if (error) console.error('Supabase insert error:', error.message);
        } catch (err) {
          console.error('Supabase write failed:', err);
        }
      }
    }
  } catch (err) {
    console.error('Webhook error:', (err as Error).message);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 400 });
  }

  return NextResponse.json({ received: true });
}
