import { createBrowserClient } from '@supabase/ssr';

/**
 * 浏览器端 Supabase 客户端
 * 仅在浏览器端使用（管理后台登录 + 数据查询）
 * 构建时可能没有环境变量，用 fallback 值保证不抛异常
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key',
  );
}
