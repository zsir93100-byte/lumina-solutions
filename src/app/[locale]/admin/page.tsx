'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { createClient } from '@/lib/supabase/client';

export const dynamic = 'force-dynamic';

type Tab = 'contacts' | 'subscribers' | 'payments';

export default function AdminPage() {
  const t = useTranslations('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState<boolean | null>(null);
  const [authError, setAuthError] = useState('');
  const [tab, setTab] = useState<Tab>('contacts');
  const [contacts, setContacts] = useState<Record<string, unknown>[]>([]);
  const [subscribers, setSubscribers] = useState<Record<string, unknown>[]>([]);
  const [payments, setPayments] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

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

  const fetchTable = useCallback(async (table: string, setter: (d: Record<string, unknown>[]) => void) => {
    setLoading(true);
    const { data, error } = await supabase.from(table).select('*').order('created_at', { ascending: false }).limit(100);
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
    fetchTable(...tableMap[tab]);
  }, [tab, session, fetchTable]);

  if (session === null) {
    return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-lumina-200 border-t-lumina-600 rounded-full animate-spin" /></div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-lumina-600 rounded-xl flex items-center justify-center mx-auto mb-3"><i className="fa-solid fa-lock text-white" /></div>
            <h1 className="text-2xl font-bold">{t('title')}</h1>
            <p className="text-slate-500 text-sm mt-1">{t('subtitle')}</p>
          </div>
          <form onSubmit={handleLogin} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">{t('email')}</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500" placeholder={t('emailPlaceholder')} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">{t('password')}</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500" />
            </div>
            {authError && <p className="text-red-500 text-xs">{authError}</p>}
            <button type="submit" className="w-full bg-lumina-600 text-white py-2.5 rounded-lg font-semibold hover:bg-lumina-700 transition-colors">{t('login')}</button>
          </form>
        </div>
      </div>
    );
  }

  const tabs: { key: Tab; icon: string; count: number }[] = [
    { key: 'contacts', icon: 'fa-solid fa-message', count: contacts.length },
    { key: 'subscribers', icon: 'fa-solid fa-envelope', count: subscribers.length },
    { key: 'payments', icon: 'fa-solid fa-credit-card', count: payments.length },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-lumina-600 rounded-lg flex items-center justify-center"><i className="fa-solid fa-sun text-white text-xs" /></div>
          <span className="font-bold text-sm">{t('brand')}</span>
        </div>
        <button onClick={handleLogout} className="text-sm text-slate-500 hover:text-red-500 transition-colors"><i className="fa-solid fa-right-from-bracket mr-1" />{t('logout')}</button>
      </div>
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 flex gap-6 text-sm font-medium">
        {tabs.map((tb) => (
          <button key={tb.key} onClick={() => setTab(tb.key)} className={`py-3 border-b-2 flex items-center gap-2 transition-colors ${tab === tb.key ? 'border-lumina-600 text-lumina-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
            <i className={tb.icon} />{t(`tabs.${tb.key}`)}
            <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-xs">{tb.count}</span>
          </button>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {loading ? (
          <div className="text-center py-20 text-slate-400"><div className="w-8 h-8 border-2 border-lumina-200 border-t-lumina-600 rounded-full animate-spin mx-auto mb-2" />{t('table.loading')}</div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden overflow-x-auto">
            {tab === 'contacts' && <DataTable data={contacts} columns={['name', 'company', 'email', 'service', 'budget']} t={t} emptyKey="contacts" />}
            {tab === 'subscribers' && <DataTable data={subscribers} columns={['email', 'status']} t={t} emptyKey="subscribers" />}
            {tab === 'payments' && <DataTable data={payments} columns={['stripe_session', 'plan_id', 'amount_total', 'customer_email']} t={t} emptyKey="payments" />}
          </div>
        )}
      </div>
    </div>
  );
}

function DataTable({ data, columns, t, emptyKey }: { data: Record<string, unknown>[]; columns: string[]; t: ReturnType<typeof useTranslations>; emptyKey: string }) {
  if (!data.length) {
    return <div className="text-center py-20 text-slate-400"><i className="fa-solid fa-inbox text-3xl mb-3 block" /><p>{t(`table.noData.${emptyKey}`)}</p></div>;
  }
  return (
    <table className="w-full text-sm">
      <thead className="bg-slate-50 border-b border-slate-200 text-left text-slate-500">
        <tr>
          {columns.map((c) => <th key={c} className="px-4 py-3 font-medium">{t(`table.${c}`)}</th>)}
          <th className="px-4 py-3 font-medium">{t('table.time')}</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {data.map((row, i) => (
          <tr key={i} className="hover:bg-slate-50 transition-colors">
            {columns.map((c) => (
              <td key={c} className="px-4 py-3 text-slate-500">
                {c === 'status' ? (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${row.subscribed ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>{row.subscribed ? 'Active' : 'Inactive'}</span>
                ) : c === 'plan_id' ? (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-lumina-100 text-lumina-700">{(row.plan_id as string) || '—'}</span>
                ) : c === 'amount_total' ? (
                  row.amount_total ? `¥${((row.amount_total as number) / 100).toLocaleString()}` : '—'
                ) : c === 'stripe_session' ? (
                  <span className="font-mono text-xs" title={row.stripe_session as string}>{(row.stripe_session as string)?.slice(0, 12)}…</span>
                ) : (
                  (row[c] as string) || '—'
                )}
              </td>
            ))}
            <td className="px-4 py-3 text-slate-400 text-xs">{row.created_at ? new Date(row.created_at as string).toLocaleString() : '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
