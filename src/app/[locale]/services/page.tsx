import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import AnimatedSection from '@/components/AnimatedSection';
import PayButton from '@/components/PayButton';

const serviceIcons = ['fa-solid fa-globe', 'fa-solid fa-server', 'fa-solid fa-cloud-arrow-up', 'fa-solid fa-magnifying-glass-chart'];
const serviceColors = ['text-lumina-600', 'text-emerald-600', 'text-amber-600', 'text-purple-600'];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  return { title: t('header.title'), description: t('header.subtitle') };
}

export default function ServicesPage() {
  const t = useTranslations('services');
  const tc = useTranslations('contact');

  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-lumina-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{t('header.title')}</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">{t('header.subtitle')}</p>
        </div>
      </section>

      {/* Service lines - simplified since full data is in translations */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {[0, 1, 2, 3].map((idx) => (
            <div key={idx} className="text-center">
              <AnimatedSection>
                <div className="w-14 h-14 bg-lumina-50 rounded-2xl flex items-center justify-center mb-5 mx-auto">
                  <i className={`${serviceIcons[idx]} ${serviceColors[idx]} text-xl`} />
                </div>
                <h2 className="text-2xl font-bold mb-3">{t(`pricing.starter.name`)}</h2>
                <p className="text-slate-500 max-w-lg mx-auto">Customized solutions for your business needs.</p>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">{t('process.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{t('process.title')}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {t.raw('process.steps').map((p: Record<string, string>, i: number) => (
              <AnimatedSection key={p.step} delay={i * 0.1} className="text-center">
                <div className="w-16 h-16 bg-lumina-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">{p.step}</div>
                <h3 className="font-bold mb-1">{p.title}</h3>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">{t('pricing.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{t('pricing.title')}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t('pricing.subtitle')}</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-2">{t('pricing.starter.name')}</h3>
              <p className="text-slate-400 text-sm mb-4">{t('pricing.starter.desc')}</p>
              <div className="text-4xl font-extrabold mb-6">{t('pricing.starter.price')}<span className="text-sm text-slate-400 font-normal"> {t('pricing.starter.unit')}</span></div>
              <ul className="space-y-3 text-sm text-slate-500 mb-8">
                {t.raw('pricing.starter.features').map((f: string) => (
                  <li key={f}><i className="fa-solid fa-check text-emerald-500 mr-2" />{f}</li>
                ))}
              </ul>
              <PayButton planId="starter" label={t('pricing.starter.payLabel')} className="block w-full text-center bg-white border border-lumina-600 text-lumina-600 py-2.5 rounded-lg font-semibold hover:bg-lumina-50 transition-colors" />
            </div>
            {/* Pro */}
            <div className="bg-lumina-600 text-white p-8 rounded-2xl relative scale-105 shadow-xl">
              <span className="absolute -top-3 -right-3 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">{t('pricing.pro.badge')}</span>
              <h3 className="text-xl font-bold mb-2">{t('pricing.pro.name')}</h3>
              <p className="text-lumina-200 text-sm mb-4">{t('pricing.pro.desc')}</p>
              <div className="text-4xl font-extrabold mb-6">{t('pricing.pro.price')}<span className="text-sm text-lumina-200 font-normal"> {t('pricing.pro.unit')}</span></div>
              <ul className="space-y-3 text-sm text-lumina-100 mb-8">
                {t.raw('pricing.pro.features').map((f: string) => (
                  <li key={f}><i className="fa-solid fa-check mr-2" />{f}</li>
                ))}
              </ul>
              <PayButton planId="pro" label={t('pricing.pro.payLabel')} className="block w-full text-center bg-white text-lumina-600 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors" />
            </div>
            {/* Enterprise */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-2">{t('pricing.enterprise.name')}</h3>
              <p className="text-slate-400 text-sm mb-4">{t('pricing.enterprise.desc')}</p>
              <div className="text-4xl font-extrabold mb-6">{t('pricing.enterprise.price')}<span className="text-sm text-slate-400 font-normal">{t('pricing.enterprise.unit')}</span></div>
              <ul className="space-y-3 text-sm text-slate-500 mb-8">
                {t.raw('pricing.enterprise.features').map((f: string) => (
                  <li key={f}><i className="fa-solid fa-check text-emerald-500 mr-2" />{f}</li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center bg-white border border-lumina-600 text-lumina-600 py-2.5 rounded-lg font-semibold hover:bg-lumina-50 transition-colors">{t('pricing.enterprise.cta')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-slate-500 mb-8">{t('cta.subtitle')}</p>
            <Link href="/contact" className="inline-block bg-lumina-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-lumina-700 transition-colors shadow-lg shadow-lumina-200">{t('cta.button')}</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
