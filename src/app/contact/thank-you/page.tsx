import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: '消息已发送',
  description: '感谢你的咨询，光澜科技团队会在 24 小时内回复。',
};

export default function ThankYouPage() {
  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="max-w-xl mx-auto text-center px-4">
        <AnimatedSection>
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-paper-plane text-emerald-500 text-3xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">消息已发送！</h1>
          <p className="text-slate-500 text-lg mb-4">
            感谢你的咨询。我们的团队会在{' '}
            <span className="font-semibold text-slate-700">24 小时内</span>{' '}
            通过邮件或电话回复你。
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-left space-y-3 text-sm text-slate-600 mb-8">
            <p><i className="fa-solid fa-clock text-lumina-500 mr-2" />工作时间：周一至周五 9:00–18:00</p>
            <p><i className="fa-solid fa-envelope text-lumina-500 mr-2" />确认邮件已发送至你的邮箱（如未收到请检查垃圾箱）</p>
            <p><i className="fa-solid fa-phone text-lumina-500 mr-2" />如需加急：致电 <span className="font-semibold">400-888-9999</span></p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-lumina-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumina-700 transition-colors shadow-lg shadow-lumina-200"
            >
              返回首页
            </Link>
            <Link
              href="/blog"
              className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:border-lumina-300 transition-colors"
            >
              阅读技术博客
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
