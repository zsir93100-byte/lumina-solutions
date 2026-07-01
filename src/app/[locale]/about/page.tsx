import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: t('header.title'), description: t('header.subtitle') };
}

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-lumina-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{t('header.title')}</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">{t('header.subtitle')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">{t('story.label')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{t('story.title')}</h2>
              <div className="text-slate-500 space-y-4 leading-relaxed">
                <p>{t('story.p1')}<span className="font-semibold text-slate-700">{t('story.p1Year')}</span>{t('story.p1Text')}</p>
                <p>{t('story.p2')}<span className="font-semibold text-slate-700">{t('story.p2Bold')}</span>{t('story.p2Text')}</p>
                <p>{t('story.p3')}</p>
                <p className="text-lumina-600 font-medium">{t('story.p4')}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute w-64 h-64 bg-lumina-500/10 rounded-full -top-8 -left-8 blur-3xl" />
                <div className="relative h-72 rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-lumina-600 via-lumina-500 to-amber-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <i className="fa-solid fa-people-group text-5xl text-white/30 mb-3" />
                    <p className="text-white/50 text-sm">Lumina Team</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                  <div className="text-2xl font-extrabold text-lumina-600">15<span className="text-sm text-slate-400 font-normal"> people</span></div>
                  <div className="text-xs text-slate-500">Full-stack tech team</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">Timeline</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">From 3 people to 15: our journey</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Three years, one step at a time. Every milestone is built on client trust.</p>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-px" />
            <div className="space-y-10">
              {t.raw('timeline').map((item: Record<string, string>, idx: number) => {
                const isLeft = idx % 2 === 0;
                return (
                  <AnimatedSection key={item.year} delay={idx * 0.08} direction={isLeft ? 'left' : 'right'}>
                    <div className={`relative flex flex-col md:flex-row gap-6 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                      <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                          <span className="text-lumina-600 font-extrabold text-lg">{item.year}</span>
                          <h3 className="font-bold mt-1">{item.title}</h3>
                          <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                      <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-lumina-600 rounded-full border-4 border-white shadow -translate-x-1/2 flex items-center justify-center">
                        <i className="fa-solid fa-flag text-white text-xs" />
                      </div>
                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">{t('team.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{t('team.title')}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t('team.subtitle')}</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8">
            {t.raw('team.members').map((m: Record<string, string>, i: number) => (
              <AnimatedSection key={m.name} delay={i * 0.08}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-all">
                  <div className="w-24 h-24 bg-lumina-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-lumina-600">{m.initial}</span>
                  </div>
                  <h3 className="font-bold text-lg">{m.name}</h3>
                  <p className="text-lumina-600 text-sm font-medium">{m.role}</p>
                  <p className="text-slate-400 text-xs mt-2">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">{t('stack.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{t('stack.title')}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t('stack.subtitle')}</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {t.raw('stack.categories').map((cat: Record<string, unknown>, i: number) => (
              <AnimatedSection key={cat.title as string} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-2xl p-8 text-center hover:bg-slate-100 transition-colors">
                  <div className="text-4xl mb-4">🛠</div>
                  <h3 className="font-bold mb-2">{cat.title as string}</h3>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {(cat.tags as string[]).map((tag: string) => (
                      <span key={tag} className="text-xs bg-white border border-slate-200 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">{t('values.title')}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {t.raw('values.items').map((v: Record<string, string>, i: number) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-3 text-lumina-600 text-xl">
                    <i className="fa-solid fa-check" />
                  </div>
                  <h3 className="font-bold mb-1">{v.title}</h3>
                  <p className="text-slate-400 text-xs">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
