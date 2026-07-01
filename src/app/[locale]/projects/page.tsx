import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import AnimatedSection from '@/components/AnimatedSection';

const gradients = ['bg-gradient-to-br from-slate-700 to-slate-900', 'bg-gradient-to-br from-lumina-700 to-lumina-900', 'bg-gradient-to-br from-emerald-700 to-emerald-900', 'bg-gradient-to-br from-purple-700 to-purple-900'];
const metricColors = ['bg-emerald-50', 'bg-lumina-50', 'bg-amber-50', 'bg-purple-50'];
const metricTextColors = ['text-emerald-600', 'text-lumina-600', 'text-amber-600', 'text-purple-600'];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });
  return { title: t('header.title'), description: t('header.subtitle') };
}

export default function ProjectsPage() {
  const t = useTranslations('projects');
  const items = t.raw('items') as Record<string, unknown>[];

  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-lumina-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{t('header.title')}</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">{t('header.subtitle')}</p>
        </div>
      </section>

      {items.map((c: Record<string, unknown>, idx: number) => {
        const isReversed = idx % 2 === 1;
        const metrics = c.metrics as Record<string, string>[];
        const points = c.points as Record<string, string>[];
        return (
          <section key={c.client as string} className={`py-16 ${idx < items.length - 1 ? 'border-b border-slate-100' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-5 gap-10 items-center">
                <div className={`md:col-span-2 ${isReversed ? 'md:order-2' : ''}`}>
                  <AnimatedSection direction={isReversed ? 'right' : 'left'}>
                    <div className={`h-56 ${gradients[idx % 4]} rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg`}>
                      <div className="text-center relative">
                        <div className="text-4xl font-extrabold text-white tracking-wide">{c.client as string}</div>
                        <div className="text-white/60 text-sm mt-2">{c.industry as string}</div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
                <div className={`md:col-span-3 ${isReversed ? 'md:order-1' : ''}`}>
                  <AnimatedSection direction={isReversed ? 'left' : 'right'}>
                    <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">{c.tag as string}</span>
                    <h2 className="text-2xl font-bold mt-3 mb-4">{c.title as string}</h2>
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      {metrics.map((m: Record<string, string>) => (
                        <div key={m.num} className={`${metricColors[idx % 4]} rounded-xl p-4 text-center`}>
                          <div className={`text-2xl font-extrabold ${metricTextColors[idx % 4]}`}>{m.num}</div>
                          <div className="text-xs text-slate-500">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3 text-slate-600">
                      {points.map((p: Record<string, string>, i: number) => (
                        <p key={i}><span className="font-semibold">{p.label}</span>{p.text}</p>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-20 bg-slate-50">
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
