import { createClient } from '@supabase/supabase-js';

/**
 * Admin Supabase 客户端（service_role 密钥）
 * 仅用于服务端 — 可绕过 Row Level Security
 * 使用场景：Webhook、后台写入、跨用户查询
 */
export function createAdminSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } },
  );
}
