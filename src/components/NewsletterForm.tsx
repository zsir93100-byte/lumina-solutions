'use client';

import { useState } from 'react';
import { subscribeNewsletter } from '@/actions/newsletter';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const res = await subscribeNewsletter(email);
    if (res.success) {
      setStatus('success');
      setMessage('订阅成功！');
    } else {
      setStatus('error');
      setMessage(res.error || '订阅失败');
    }
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 3500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
          status === 'success'
            ? 'bg-emerald-400 text-white'
            : 'bg-amber-400 text-slate-900 hover:bg-amber-300'
        }`}
      >
        {status === 'loading' ? '订阅中…' : status === 'success' ? '已订阅 ✓' : '订阅'}
      </button>
      {message && (
        <p className={`text-sm mt-1 ${status === 'success' ? 'text-amber-200' : 'text-red-300'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
