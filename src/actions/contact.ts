'use server';

import { Resend } from 'resend';
import { createAdminSupabase } from '@/lib/supabase/admin';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL || 'hello@lumina.tech';

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  if (!data.name || !data.email || !data.message) {
    return { success: false, error: '请填写姓名、邮箱和需求描述。' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { success: false, error: '邮箱格式不正确。' };
  }

  // 1. 存入 Supabase
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const db = createAdminSupabase();
      const { error: dbError } = await db.from('contacts').insert({
        name: data.name,
        company: data.company || null,
        email: data.email,
        phone: data.phone || null,
        service: data.service || null,
        budget: data.budget || null,
        message: data.message,
      });
      if (dbError) console.error('Supabase insert error:', dbError.message);
    } catch (err) {
      console.error('Supabase unavailable:', err);
    }
  }

  // 2. 发送邮件通知
  if (process.env.RESEND_API_KEY) {
    try {
      await resend.emails.send({
        from: `光澜科技 <noreply@${process.env.RESEND_DOMAIN || 'lumina.tech'}>`,
        to: TO_EMAIL,
        subject: `[官网咨询] 来自 ${data.name}${data.company ? ` (${data.company})` : ''} 的咨询`,
        replyTo: data.email,
        html: buildContactEmailHtml(data),
      });
    } catch (error) {
      console.error('Contact form email failed:', error);
      // Email failure is non-fatal if DB write succeeded
    }
  }

  return { success: true };
}

function buildContactEmailHtml(d: ContactFormData) {
  const row = (label: string, value: string | undefined) =>
    value
      ? `<tr><td style="padding:6px 12px 6px 0;color:#64748b;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#1e293b">${value}</td></tr>`
      : '';

  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px">
      <h2 style="color:#4f46e5;margin-bottom:16px">📬 新咨询来自光澜科技官网</h2>
      <table style="border-collapse:collapse;width:100%">
        ${row('姓名', d.name)}
        ${row('公司', d.company)}
        ${row('邮箱', d.email)}
        ${row('电话', d.phone)}
        ${row('服务需求', d.service)}
        ${row('预算', d.budget)}
      </table>
      <div style="margin-top:16px;padding:16px;background:#f8fafc;border-radius:8px;border-left:3px solid #4f46e5">
        <p style="color:#64748b;font-size:12px;margin:0 0 4px">需求描述：</p>
        <p style="color:#1e293b;margin:0;white-space:pre-wrap">${d.message}</p>
      </div>
      <p style="color:#94a3b8;font-size:11px;margin-top:24px">${new Date().toLocaleString('zh-CN')}</p>
    </div>`;
}
