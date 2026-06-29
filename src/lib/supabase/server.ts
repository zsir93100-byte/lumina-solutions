import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

/**
 * 服务端 Supabase 客户端（带 cookie 会话）
 * 用于 Server Components 和 Server Actions
 */
export async function createServerSupabase() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Server Components 不能 set cookies — 在 Middleware 或 Route Handler 中处理
          }
        },
      },
    },
  );
}
