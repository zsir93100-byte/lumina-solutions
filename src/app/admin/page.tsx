'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';

type Tab = 'contacts' | 'subscribers' | 'payments';

export default function AdminPage() {
  // Auth
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState<boolean | null>(null);
  const [authError, setAuthError] = useState('');

  // Data
  const [tab, setTab] = useState<Tab>('contacts');
  const [contacts, setContacts] = useState<Record<string, unknown>[]>([]);
  const [subscribers, setSubscribers] = useState<Record<string, unknown>[]>([]);
  const [payments, setPayments] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  // Check session
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(!!data.session));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
    else setSession(true);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(false);
    setContacts([]);
    setSubscribers([]);
    setPayments([]);
  };

  // Fetch data with authenticated browser client (respects RLS)
  const fetchTable = useCallback(async (table: string, setter: (d: Record<string, unknown>[]) => void) => {
    setLoading(true);
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);
    if (!error && data) setter(data);
    else if (error) console.error(`Fetch ${table} error:`, error.message);
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    if (!session) return;
    const tableMap: Record<Tab, [string, (d: Record<string, unknown>[]) => void]> = {
      contacts: ['contacts', setContacts],
      subscribers: ['subscribers', setSubscribers],
      payments: ['payments', setPayments],
    };
    const [table, setter] = tableMap[tab];
    fetchTable(table, setter);
  }, [tab, session, fetchTable]);

  // ===== Loading =====
  if (session === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-lumina-200 border-t-lumina-600 rounded-full animate-spin" />
      </div>
    );
  }

  // ===== Login =====
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-lumina-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <i className="fa-solid fa-lock text-white" />
            </div>
            <h1 className="text-2xl font-bold">管理后台</h1>
            <p className="text-slate-500 text-sm mt-1">光澜科技内部系统</p>
          </div>
          <form onSubmit={handleLogin} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">邮箱</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500" placeholder="admin@lumina.tech" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">密码</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500" />
            </div>
            {authError && <p className="text-red-500 text-xs">{authError}</p>}
            <button type="submit" className="w-full bg-lumina-600 text-white py-2.5 rounded-lg font-semibold hover:bg-lumina-700 transition-colors">登录</button>
          </form>
        </div>
      </div>
    );
  }

  // ===== Dashboard =====
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-lumina-600 rounded-lg flex items-center justify-center">
            <i className="fa-solid fa-sun text-white text-xs" />
          </div>
          <span className="font-bold text-sm">光澜科技 · 管理后台</span>
        </div>
        <button onClick={handleLogout} className="text-sm text-slate-500 hover:text-red-500 transition-colors">
          <i className="fa-solid fa-right-from-bracket mr-1" />退出
        </button>
      </div>

      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 flex gap-6 text-sm font-medium">
        {[
          { key: 'contacts' as Tab, label: '咨询', icon: 'fa-solid fa-message', count: contacts.length },
          { key: 'subscribers' as Tab, label: '订阅', icon: 'fa-solid fa-envelope', count: subscribers.length },
          { key: 'payments' as Tab, label: '支付', icon: 'fa-solid fa-credit-card', count: payments.length },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`py-3 border-b-2 flex items-center gap-2 transition-colors ${
              tab === t.key ? 'border-lumina-600 text-lumina-600' : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <i className={t.icon} />{t.label}
            <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-xs">{t.count}</span>
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {loading ? (
          <div className="text-center py-20 text-slate-400">
            <div className="w-8 h-8 border-2 border-lumina-200 border-t-lumina-600 rounded-full animate-spin mx-auto mb-2" />加载中…
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden overflow-x-auto">
            {tab === 'contacts' && <ContactsTable data={contacts} />}
            {tab === 'subscribers' && <SubscribersTable data={subscribers} />}
            {tab === 'payments' && <PaymentsTable data={payments} />}
          </div>
        )}
      </div>
    </div>
  );
}

// ========== Table Components ==========

function ContactsTable({ data }: { data: Record<string, unknown>[] }) {
  if (!data.length) return <Empty icon="fa-solid fa-message" text="暂无咨询数据" />;
  return (
    <table className="w-full text-sm">
      <thead className="bg-slate-50 border-b border-slate-200 text-left text-slate-500">
        <tr>
          <th className="px-4 py-3 font-medium">姓名</th>
          <th className="px-4 py-3 font-medium hidden md:table-cell">公司</th>
          <th className="px-4 py-3 font-medium hidden sm:table-cell">邮箱</th>
          <th className="px-4 py-3 font-medium hidden lg:table-cell">服务</th>
          <th className="px-4 py-3 font-medium hidden lg:table-cell">预算</th>
          <th className="px-4 py-3 font-medium">时间</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {data.map((row, i) => (
          <tr key={i} className="hover:bg-slate-50 transition-colors">
            <td className="px-4 py-3 font-medium">{row.name as string}</td>
            <td className="px-4 py-3 text-slate-500 hidden md:table-cell">{(row.company as string) || '—'}</td>
            <td className="px-4 py-3 text-slate-500 hidden sm:table-cell">{row.email as string}</td>
            <td className="px-4 py-3 text-slate-500 hidden lg:table-cell">{(row.service as string) || '—'}</td>
            <td className="px-4 py-3 text-slate-500 hidden lg:table-cell">{(row.budget as string) || '—'}</td>
            <td className="px-4 py-3 text-slate-400 text-xs">{fmt(row.created_at as string)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function SubscribersTable({ data }: { data: Record<string, unknown>[] }) {
  if (!data.length) return <Empty icon="fa-solid fa-envelope" text="暂无订阅数据" />;
  return (
    <table className="w-full text-sm">
      <thead className="bg-slate-50 border-b border-slate-200 text-left text-slate-500">
        <tr><th className="px-4 py-3 font-medium">邮箱</th><th className="px-4 py-3 font-medium">状态</th><th className="px-4 py-3 font-medium">订阅时间</th></tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {data.map((row, i) => (
          <tr key={i} className="hover:bg-slate-50 transition-colors">
            <td className="px-4 py-3">{row.email as string}</td>
            <td className="px-4 py-3">
              <span className={`text-xs px-2 py-0.5 rounded-full ${row.subscribed ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                {row.subscribed ? '已订阅' : '已取消'}
              </span>
            </td>
            <td className="px-4 py-3 text-slate-400 text-xs">{fmt(row.created_at as string)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function PaymentsTable({ data }: { data: Record<string, unknown>[] }) {
  if (!data.length) return <Empty icon="fa-solid fa-credit-card" text="暂无支付数据" />;
  return (
    <table className="w-full text-sm">
      <thead className="bg-slate-50 border-b border-slate-200 text-left text-slate-500">
        <tr><th className="px-4 py-3 font-medium">Session</th><th className="px-4 py-3 font-medium">套餐</th><th className="px-4 py-3 font-medium">金额</th><th className="px-4 py-3 font-medium hidden md:table-cell">客户邮箱</th><th className="px-4 py-3 font-medium">时间</th></tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {data.map((row, i) => (
          <tr key={i} className="hover:bg-slate-50 transition-colors">
            <td className="px-4 py-3 font-mono text-xs text-slate-500 max-w-[120px] truncate" title={row.stripe_session as string}>{(row.stripe_session as string)?.slice(0, 16)}…</td>
            <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full ${row.plan_id === 'pro' ? 'bg-lumina-100 text-lumina-700' : 'bg-slate-100 text-slate-600'}`}>{row.plan_id as string || '—'}</span></td>
            <td className="px-4 py-3 font-medium">{row.amount_total ? `¥${((row.amount_total as number) / 100).toLocaleString()}` : '—'}</td>
            <td className="px-4 py-3 text-slate-500 hidden md:table-cell">{(row.customer_email as string) || '—'}</td>
            <td className="px-4 py-3 text-slate-400 text-xs">{fmt(row.created_at as string)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Empty({ icon, text }: { icon: string; text: string }) {
  return <div className="text-center py-20 text-slate-400"><i className={`${icon} text-3xl mb-3 block`} /><p>{text}</p></div>;
}

function fmt(iso: string | null | undefined): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
}
