-- ============================================================
-- 光澜科技 Lumina Solutions — Supabase 数据库 Schema
-- 部署方式：在 Supabase Dashboard → SQL Editor 中执行此文件
-- 或通过 supabase CLI: supabase db push
-- ============================================================

-- ===== 1. 联系表单提交 =====
CREATE TABLE IF NOT EXISTS public.contacts (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name        TEXT NOT NULL,
  company     TEXT,
  email       TEXT NOT NULL,
  phone       TEXT,
  service     TEXT,
  budget      TEXT,
  message     TEXT NOT NULL,
  is_read     BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- ===== 2. 简报订阅 =====
CREATE TABLE IF NOT EXISTS public.subscribers (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email       TEXT NOT NULL UNIQUE,
  subscribed  BOOLEAN DEFAULT TRUE,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- ===== 3. 支付记录（由 Stripe Webhook 写入） =====
CREATE TABLE IF NOT EXISTS public.payments (
  id              BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  stripe_session  TEXT NOT NULL UNIQUE,               -- Stripe Checkout Session ID
  plan_id         TEXT,                                -- starter / pro
  amount_total    INTEGER,                             -- 金额（分）
  customer_email  TEXT,
  status          TEXT DEFAULT 'completed',            -- completed / refunded
  metadata        JSONB DEFAULT '{}',
  created_at      TIMESTAMPTZ DEFAULT now()
);

-- ===== 4. 启用 Row Level Security =====
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- ===== 5. RLS 策略 =====

-- contacts: 任何人可插入（公开表单）
CREATE POLICY "allow_public_insert_contacts"
  ON public.contacts FOR INSERT
  TO anon
  WITH CHECK (true);

-- contacts: 仅认证用户可查看
CREATE POLICY "allow_auth_select_contacts"
  ON public.contacts FOR SELECT
  TO authenticated
  USING (true);

-- contacts: 仅认证用户可标记已读
CREATE POLICY "allow_auth_update_contacts"
  ON public.contacts FOR UPDATE
  TO authenticated
  USING (true);

-- subscribers: 任何人可插入
CREATE POLICY "allow_public_insert_subscribers"
  ON public.subscribers FOR INSERT
  TO anon
  WITH CHECK (true);

-- subscribers: 仅认证用户可查看
CREATE POLICY "allow_auth_select_subscribers"
  ON public.subscribers FOR SELECT
  TO authenticated
  USING (true);

-- payments: 仅认证用户可查看（webhook 用 service_role 写入）
CREATE POLICY "allow_auth_select_payments"
  ON public.payments FOR SELECT
  TO authenticated
  USING (true);

-- ===== 6. 索引 =====
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON public.subscribers (email);
CREATE INDEX IF NOT EXISTS idx_payments_stripe_session ON public.payments (stripe_session);

-- ===== 7. 创建 admin 用户（可选：在 Supabase Dashboard → Authentication 中手动创建） =====
-- 1. 打开 Supabase Dashboard → Authentication → Users → Add User
-- 2. 邮箱设为你的邮箱，密码自定
-- 3. 创建后该用户即可访问管理后台
-- 或者用下面的 SQL（需在 Supabase Dashboard SQL Editor 中执行）:
-- SELECT supabase_admin.create_user(
--   email := 'admin@lumina.tech',
--   password := '你的安全密码',
--   email_confirm := true
-- );
