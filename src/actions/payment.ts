'use server';

export async function createCheckoutSession(planId: string) {
  const priceIds: Record<string, string | undefined> = {
    starter: process.env.STRIPE_PRICE_STARTER,
    pro: process.env.STRIPE_PRICE_PRO,
  };

  const priceId = priceIds[planId];
  if (!priceId) return { error: '该套餐暂未开放，请联系我们获取定制报价。' };
  if (!process.env.STRIPE_SECRET_KEY) return { error: '支付系统尚未配置，请联系我们获取报价。' };

  try {
    const { default: Stripe } = await import('stripe');
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const origin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/services`,
      metadata: { planId },
    });

    return { url: session.url || undefined };
  } catch (error) {
    console.error('Stripe Checkout Session error:', error);
    return { error: '创建支付会话失败，请稍后重试或直接联系我们。' };
  }
}
