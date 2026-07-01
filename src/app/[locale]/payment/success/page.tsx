import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import AnimatedSection from '@/components/AnimatedSection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: t('payment.success.title') };
}

export default function PaymentSuccessPage() {
  const t = useTranslations('common');

  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="max-w-xl mx-auto text-center px-4">
        <AnimatedSection>
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-circle-check text-emerald-500 text-4xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{t('payment.success.title')}</h1>
          <p className="text-slate-500 text-lg mb-8">
            {t('payment.success.message')}<span className="font-semibold text-slate-700">{t('payment.success.messageBold')}</span>{t('payment.success.messageEnd')}
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-left space-y-3 text-sm text-slate-600 mb-8">
            <p><i className="fa-solid fa-envelope text-lumina-500 mr-2" />{t('payment.success.emailSent')}</p>
            <p><i className="fa-solid fa-phone text-lumina-500 mr-2" />{t('payment.success.urgent')}<span className="font-semibold">400-888-9999</span></p>
            <p><i className="fa-solid fa-clock text-lumina-500 mr-2" />{t('payment.success.hours')}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="bg-lumina-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumina-700 transition-colors shadow-lg shadow-lumina-200">{t('payment.success.backHome')}</Link>
            <Link href="/projects" className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:border-lumina-300 transition-colors">{t('payment.success.moreCases')}</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
