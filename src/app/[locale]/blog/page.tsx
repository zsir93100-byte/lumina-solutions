'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/AnimatedSection';
import NewsletterForm from '@/components/NewsletterForm';

const articleGradients = [
  'bg-gradient-to-br from-slate-700 to-slate-900',
  'bg-gradient-to-br from-emerald-700 to-emerald-900',
  'bg-gradient-to-br from-purple-700 to-purple-900',
  'bg-gradient-to-br from-amber-600 to-amber-800',
  'bg-gradient-to-br from-lumina-600 to-lumina-800',
  'bg-gradient-to-br from-slate-600 to-slate-800',
  'bg-gradient-to-br from-blue-700 to-blue-900',
  'bg-gradient-to-br from-teal-700 to-teal-900',
  'bg-gradient-to-br from-red-700 to-red-900',
  'bg-gradient-to-br from-indigo-700 to-indigo-900',
  'bg-gradient-to-br from-cyan-700 to-cyan-900',
  'bg-gradient-to-br from-green-700 to-green-900',
];

export default function BlogPage() {
  const t = useTranslations('blog');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const articles = t.raw('articles') as Record<string, string>[];

  const allTags = useMemo(() => {
    const tags = new Set(articles.map((a) => a.tag));
    return Array.from(tags);
  }, [articles]);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchTag = !activeTag || a.tag === activeTag;
      const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase()) || a.desc.toLowerCase().includes(search.toLowerCase()) || a.tag.toLowerCase().includes(search.toLowerCase());
      return matchTag && matchSearch;
    });
  }, [activeTag, search, articles]);

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
          {/* Featured */}
          <AnimatedSection className="mb-16">
            <article className="grid md:grid-cols-2 gap-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
              <div className="h-64 md:h-full bg-gradient-to-br from-lumina-600 to-lumina-800 flex items-center justify-center">
                <i className="fa-solid fa-code text-6xl text-white/20" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-lumina-600 text-sm font-semibold">{t('featured.badge')}</span>
                <h2 className="text-2xl font-bold mt-2 mb-3">{t('featured.title')}</h2>
                <p className="text-slate-500 mb-4">{t('featured.desc')}</p>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span><i className="fa-regular fa-calendar mr-1" />{t('featured.date')}</span>
                  <span><i className="fa-regular fa-clock mr-1" />{t('featured.read')}</span>
                  <span className="bg-slate-200 px-2 py-0.5 rounded-full text-xs">Tech Decisions</span>
                </div>
              </div>
            </article>
          </AnimatedSection>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActiveTag(null)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!activeTag ? 'bg-lumina-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{t('allArticles')}</button>
              {allTags.map((tag) => (
                <button key={tag} onClick={() => setActiveTag(tag === activeTag ? null : tag)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${tag === activeTag ? 'bg-lumina-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{tag}</button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t('search')} className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow" />
              {search && <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"><i className="fa-solid fa-xmark text-xs" /></button>}
            </div>
          </div>

          {search && <p className="text-slate-500 text-sm mb-6">{t('results')} <span className="font-semibold text-slate-700">{filtered.length}</span> {t('resultsFor')}「{search}」</p>}

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {filtered.map((a, i) => (
                <AnimatedSection key={a.title} delay={i * 0.04}>
                  <article className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all h-full group">
                    <div className={`h-48 ${articleGradients[i % articleGradients.length]} flex items-center justify-center relative overflow-hidden`}>
                      <i className="fa-solid fa-newspaper text-5xl text-white/10 absolute -right-3 -bottom-3 group-hover:scale-125 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <span className="text-lumina-600 text-sm font-semibold">{a.tag}</span>
                      <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-lumina-600 transition-colors">{a.title}</h3>
                      <p className="text-slate-500 text-sm mb-3">{a.desc}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-400"><span>{a.date}</span><span>{a.read}</span></div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">{t('noResults')}</h3>
              <p className="text-slate-500 mb-4">{t('noResultsHint')}</p>
              <button onClick={() => { setSearch(''); setActiveTag(null); }} className="text-lumina-600 font-medium hover:underline">{t('clearAll')}</button>
            </div>
          )}

          <AnimatedSection className="mt-16">
            <div className="bg-gradient-to-br from-lumina-600 to-lumina-700 text-white p-10 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-2">{t('newsletter.title')}</h3>
              <p className="text-lumina-200 mb-6 max-w-md mx-auto">{t('newsletter.desc')}</p>
              <NewsletterForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
