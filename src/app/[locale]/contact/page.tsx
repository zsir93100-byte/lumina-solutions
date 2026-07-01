import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: t('header.title'), description: t('header.subtitle') };
}

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-lumina-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{t('header.title')}</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">{t('header.subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            <AnimatedSection className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-2">{t('form.title')}</h2>
              <p className="text-slate-500 text-sm mb-8">{t('form.subtitle')}</p>
              <ContactForm />
            </AnimatedSection>

            <AnimatedSection className="md:col-span-2" direction="right">
              <h2 className="text-2xl font-bold mb-2">{t('info.title')}</h2>
              <p className="text-slate-500 text-sm mb-8">{t('info.subtitle')}</p>
              <div className="space-y-5">
                {t.raw('info.items').map((c: Record<string, string>) => (
                  <div key={c.label} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <i className="fa-solid fa-phone text-lumina-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{c.label}</h3>
                      <p className="text-slate-500 text-sm">{c.value}</p>
                      {c.note && <p className="text-slate-400 text-xs mt-0.5">{c.note}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Working Hours */}
              <div className="mt-6 p-5 bg-white border border-slate-200 rounded-xl">
                <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                  <i className="fa-solid fa-clock text-lumina-600" />{t('hours.title')}
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <div className="text-slate-500 text-xs mb-0.5">{t('hours.weekday')}</div>
                    <div className="font-semibold text-slate-700">{t('hours.weekdayTime')}</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <div className="text-slate-500 text-xs mb-0.5">{t('hours.saturday')}</div>
                    <div className="font-semibold text-slate-700">{t('hours.saturdayTime')}</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg col-span-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-slate-500 text-xs mb-0.5">{t('hours.sunday')}</div>
                        <div className="font-semibold text-slate-700">{t('hours.sundayNote')}</div>
                      </div>
                      <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full"><i className="fa-solid fa-bolt mr-1" />{t('hours.urgent')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-6 border border-slate-200 text-center">
                <div className="text-4xl mb-3"><i className="fa-solid fa-map-location-dot text-lumina-400" /></div>
                <h3 className="font-bold text-sm mb-1">{t('map.title')}</h3>
                <p className="text-slate-400 text-xs mb-3">{t('map.address')}</p>
                <a href="https://uri.amap.com/marker?position=112.459,34.618&name=Lumina" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-white border border-slate-300 text-slate-700 text-sm px-4 py-2 rounded-lg hover:border-lumina-300 hover:text-lumina-600 transition-colors font-medium">
                  <i className="fa-solid fa-location-arrow" /> {t('map.openInMap')}
                </a>
                <p className="text-slate-400 text-xs mt-3">{t('map.parking')}</p>
              </div>

              {/* Promise */}
              <div className="mt-8 bg-gradient-to-br from-lumina-50 to-amber-50 border border-lumina-100 p-6 rounded-2xl">
                <h3 className="font-bold text-sm mb-2">{t('promise.title')}</h3>
                <ul className="text-slate-500 text-xs space-y-1.5">
                  {t.raw('promise.items').map((item: string) => (
                    <li key={item}><i className="fa-solid fa-check text-emerald-500 mr-1.5" />{item}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
