'use client';

import { useState, useRef } from 'react';
import { submitContactForm } from '@/actions/contact';

export default function ContactForm() {
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

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">姓名 <span className="text-red-400">*</span></label>
          <input name="name" type="text" required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow" placeholder="你的姓名" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">公司</label>
          <input name="company" type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow" placeholder="公司名称（选填）" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">邮箱 <span className="text-red-400">*</span></label>
          <input name="email" type="email" required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow" placeholder="you@company.com" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">电话</label>
          <input name="phone" type="tel" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow" placeholder="方便我们联系你" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">感兴趣的服务</label>
        <select name="service" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow bg-white">
          <option value="">请选择…</option>
          <option>网站开发</option>
          <option>企业管理系统</option>
          <option>云部署与运维</option>
          <option>数字化咨询</option>
          <option>其他 / 暂不确定</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">预算范围</label>
        <select name="budget" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow bg-white">
          <option value="">请选择…</option>
          <option>¥10K 以下</option>
          <option>¥10K - 50K</option>
          <option>¥50K - 150K</option>
          <option>¥150K 以上</option>
          <option>暂不确定</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">简单描述你的需求 <span className="text-red-400">*</span></label>
        <textarea name="message" required rows={4} className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow" placeholder="比如：需要一个企业官网 + 产品管理系统；或者：想做一个教育机构的在线课程平台……越具体越好。" />
      </div>

      {/* Result feedback */}
      {result && (
        <div className={`p-3 rounded-lg text-sm font-medium ${result.success ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {result.success ? '✓ 发送成功！我们会尽快联系你。' : result.error}
        </div>
      )}

      <button
        type="submit"
        disabled={sending || result?.success}
        className={`w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center gap-2 ${
          result?.success
            ? 'bg-emerald-500 text-white'
            : 'bg-lumina-600 text-white hover:bg-lumina-700 shadow-lumina-200'
        }`}
      >
        {sending ? (
          <><i className="fa-solid fa-spinner fa-spin" /> 发送中…</>
        ) : result?.success ? (
          <><i className="fa-solid fa-circle-check" /> 已发送</>
        ) : (
          <><i className="fa-solid fa-paper-plane" /> 发送消息</>
        )}
      </button>
    </form>
  );
}
