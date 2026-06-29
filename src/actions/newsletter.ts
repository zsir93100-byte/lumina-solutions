'use server';

import { createAdminSupabase } from '@/lib/supabase/admin';

const TO_EMAIL = process.env.CONTACT_EMAIL || 'hello@lumina.tech';

function getResend() {
  const { Resend } = require('resend') as typeof import('resend');
  return new Resend(process.env.RESEND_API_KEY);
}

export async function subscribeNewsletter(email: string) {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: '请输入有效的邮箱地址。' };
  }

  // 1. 存入 Supabase
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const db = createAdminSupabase();
      await db.from('subscribers').upsert({ email, subscribed: true }, { onConflict: 'email' });
    } catch (err) {
      console.error('Supabase insert error:', err);
    }
  }

  // 2. 发送邮件通知
  if (process.env.RESEND_API_KEY) {
    try {
      await getResend().emails.send({
        from: `光澜科技 <noreply@${process.env.RESEND_DOMAIN || 'lumina.tech'}>`,
        to: TO_EMAIL,
        subject: `[简报订阅] ${email}`,
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:480px">
            <h2 style="color:#4f46e5">📬 新简报订阅</h2>
            <p style="color:#1e293b;font-size:16px"><strong>${email}</strong> 订阅了光澜科技技术简报。</p>
            <p style="color:#94a3b8;font-size:12px;margin-top:24px">${new Date().toLocaleString('zh-CN')}</p>
          </div>`,
      });
    } catch (error) {
      console.error('Newsletter email failed:', error);
    }
  }

  return { success: true };
}
