import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import AnimatedSection from '@/components/AnimatedSection';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  const t = useTranslations('home');
  const tc = useTranslations('common');

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-36 md:pb-28 bg-gradient-to-br from-slate-50 via-lumina-50/40 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                {t('hero.badge')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                {t('hero.title')}
                <br className="md:hidden" />
                <span className="text-lumina-600">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
                {t('hero.subtitle')}
                <span className="text-slate-700 font-medium">{t('hero.subtitleBold')}</span>
                {t('hero.subtitle2')}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="bg-lumina-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-lumina-700 transition-all shadow-lg shadow-lumina-200 flex items-center gap-2">
                  {t('hero.cta1')} <i className="fa-solid fa-arrow-right text-sm" />
                </Link>
                <Link href="/projects" className="border border-slate-300 text-slate-700 px-6 py-3.5 rounded-lg font-semibold hover:border-lumina-300 hover:text-lumina-600 transition-all">
                  {t('hero.cta2')}
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="hidden md:block relative">
                <div className="absolute w-72 h-72 bg-lumina-500/10 rounded-full -top-8 -right-8 blur-3xl" />
                <div className="absolute w-56 h-56 bg-amber-400/10 rounded-full -bottom-8 -left-8 blur-3xl" />
                <div className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs text-slate-500 font-mono">lumina-deploy.sh</span>
                  </div>
                  <div className="p-5 font-mono text-sm leading-relaxed">
                    <p><span className="text-purple-400">$</span> <span className="text-emerald-300">system</span> <span className="text-slate-400">--</span><span className="text-amber-300">status</span></p>
                    <p className="text-slate-400 mt-1">├─ Website <span className="text-emerald-400">● online</span>  &lt;200ms</p>
                    <p className="text-slate-400">├─ ERP <span className="text-emerald-400">● online</span>  syncing</p>
                    <p className="text-slate-400">├─ Payments <span className="text-emerald-400">● online</span>  320 tx/day</p>
                    <p className="text-slate-400">└─ Monitoring <span className="text-emerald-400">● online</span>  0 alerts</p>
                    <p className="mt-3"><span className="text-purple-400">$</span> <span className="text-slate-500">_</span></p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">{t('services.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{t('services.title')}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t('services.subtitle')}</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.raw('services.items').map((s: Record<string, string>, i: number) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="group p-7 rounded-2xl border border-slate-200 hover:border-lumina-200 hover:shadow-xl transition-all bg-white h-full">
                  <div className="w-12 h-12 bg-lumina-50 rounded-xl flex items-center justify-center mb-5">
                    <i className="fa-solid fa-globe text-lumina-600 text-lg" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-1 text-lumina-600 text-sm font-medium mt-4 hover:gap-2 transition-all">
                    {t('services.detail')} <i className="fa-solid fa-chevron-right text-xs" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">{t('whyUs.label')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{t('whyUs.title')}<span className="text-lumina-600">{t('whyUs.titleHighlight')}</span></h2>
              <p className="text-slate-500 leading-relaxed mb-8">{t('whyUs.desc')}</p>
              <div className="space-y-4">
                {t.raw('whyUs.items').map((item: Record<string, string>) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="fa-solid fa-check text-emerald-600 text-xs" />
                    </div>
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {t.raw('techStack.items').map((ts: Record<string, string>) => (
                  <div key={ts.label} className="bg-white p-5 rounded-xl border border-slate-200 text-center hover:shadow-md transition-shadow">
                    <div className="text-slate-400 text-3xl mb-2"><i className="fa-solid fa-code" /></div>
                    <div className="font-bold text-sm">{ts.label}</div>
                    <div className="text-xs text-slate-400">{ts.sub}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">{t('cases.label')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">{t('cases.title')}</h2>
            </div>
            <Link href="/projects" className="text-lumina-600 font-medium hover:gap-2 transition-all inline-flex items-center gap-1">
              {t('cases.viewAll')} <i className="fa-solid fa-arrow-right text-sm" />
            </Link>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {t.raw('cases.preview').map((c: Record<string, string>, i: number) => (
              <AnimatedSection key={c.name} delay={i * 0.1}>
                <Link href="/projects" className="group block rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-extrabold text-white">{c.name}</div>
                      <div className="text-white/60 text-sm mt-1">{c.industry}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{c.tag}</span>
                    <h3 className="font-bold mt-3 mb-2 group-hover:text-lumina-600 transition-colors">{c.title}</h3>
                    <p className="text-slate-500 text-sm">{c.desc}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-lumina-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {t.raw('stats').map((s: Record<string, string>) => (
              <AnimatedSection key={s.label} delay={0.05}>
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{s.num}</div>
                <div className="text-lumina-200 text-sm">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">{t('clients.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{t('clients.title')}</h2>
            <p className="text-slate-500 max-w-lg mx-auto">{t('clients.subtitle')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {t.raw('clients.items').map((c: Record<string, string>, i: number) => (
              <AnimatedSection key={c.name} delay={i * 0.04}>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center hover:border-lumina-200 hover:shadow-md transition-all h-full flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"><i className="fa-solid fa-building text-slate-500 text-sm" /></div>
                  <span className="text-sm font-semibold text-slate-700">{c.name}</span>
                  <span className="text-xs text-slate-400">{c.industry}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <p className="text-slate-400 text-sm">
              {t('clients.more')}
              <Link href="/projects" className="text-lumina-600 font-medium hover:underline">{t('clients.viewCases')}</Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">{t('faq.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{t('faq.title')}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t('faq.subtitle')}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FaqAccordion items={t.raw('faq.items') as { q: string; a: string }[]} />
          </AnimatedSection>
          <AnimatedSection className="text-center mt-10">
            <p className="text-slate-500 text-sm">
              {t('faq.more')}{' '}
              <Link href="/contact" className="text-lumina-600 font-semibold hover:underline">{t('faq.contactLink')}</Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 md:p-16 rounded-2xl shadow-2xl">
              <div className="w-16 h-16 bg-lumina-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-comments text-lumina-300 text-2xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
              <p className="text-slate-400 mb-8 text-lg max-w-md mx-auto">
                {t('cta.subtitle')}<span className="text-white font-medium">{t('cta.subtitleBold')}</span>{t('cta.subtitle2')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="bg-lumina-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-lumina-500 transition-colors shadow-xl shadow-lumina-900/50">
                  {t('cta.button')}
                </Link>
                <a href="tel:4008889999" className="border border-slate-600 text-slate-300 px-8 py-3.5 rounded-xl font-semibold hover:border-slate-400 hover:text-white transition-colors">
                  <i className="fa-solid fa-phone mr-2" />{t('cta.call')}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
