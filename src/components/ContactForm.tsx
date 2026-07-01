'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { submitContactForm } from '@/actions/contact';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ success: boolean; error?: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setResult(null);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      company: (formData.get('company') as string) || undefined,
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || undefined,
      service: (formData.get('service') as string) || undefined,
      budget: (formData.get('budget') as string) || undefined,
      message: formData.get('message') as string,
    };
    const res = await submitContactForm(data);
    setSending(false);
    setResult(res);
    if (res.success) {
      formRef.current?.reset();
      setTimeout(() => setResult(null), 5000);
    }
  };

  const serviceOptions = t.raw('serviceOptions') as string[];
  const budgetOptions = t.raw('budgetOptions') as string[];

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('name')} <span className="text-red-400">{t('nameRequired')}</span></label>
          <input name="name" type="text" required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow" placeholder={t('namePlaceholder')} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('company')}</label>
          <input name="company" type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow" placeholder={t('companyPlaceholder')} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('email')} <span className="text-red-400">{t('emailRequired')}</span></label>
          <input name="email" type="email" required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow" placeholder={t('emailPlaceholder')} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('phone')}</label>
          <input name="phone" type="tel" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow" placeholder={t('phonePlaceholder')} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('service')}</label>
        <select name="service" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow bg-white">
          <option value="">{t('servicePlaceholder')}</option>
          {serviceOptions.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('budget')}</label>
        <select name="budget" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow bg-white">
          <option value="">{t('budgetPlaceholder')}</option>
          {budgetOptions.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('message')} <span className="text-red-400">{t('messageRequired')}</span></label>
        <textarea name="message" required rows={4} className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow" placeholder={t('messagePlaceholder')} />
      </div>
      {result && (
        <div className={`p-3 rounded-lg text-sm font-medium ${result.success ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {result.success ? t('success') : result.error}
        </div>
      )}
      <button type="submit" disabled={sending || result?.success} className={`w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center gap-2 ${result?.success ? 'bg-emerald-500 text-white' : 'bg-lumina-600 text-white hover:bg-lumina-700 shadow-lumina-200'}`}>
        {sending ? <><i className="fa-solid fa-spinner fa-spin" /> {t('sending')}</> : result?.success ? <><i className="fa-solid fa-circle-check" /> {t('sent')}</> : <><i className="fa-solid fa-paper-plane" /> {t('send')}</>}
      </button>
    </form>
  );
}
