'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('nav');

  const otherLocale = locale === 'zh' ? 'en' : 'zh';
  const otherLabel = locale === 'zh' ? 'EN' : '中文';

  // Strip locale prefix from pathname for language switching
  const pathWithoutLocale = '/' + (pathname.split('/').slice(2).join('/') || '');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    // Compare without locale prefix
    const currentPath = '/' + pathname.split('/').slice(2).join('/');
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 text-xl font-bold text-lumina-700">
            <div className="w-8 h-8 bg-lumina-600 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-sun text-white text-sm" />
            </div>
            <span>{t('brand')}</span>
            <span className="hidden sm:inline text-xs text-slate-400 font-normal tracking-wider">{t('brandSub')}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className={`transition-colors ${isActive('/') ? 'text-lumina-600 font-semibold' : 'text-slate-600 hover:text-lumina-600'}`}>{t('home')}</Link>
            <Link href="/about" className={`transition-colors ${isActive('/about') ? 'text-lumina-600 font-semibold' : 'text-slate-600 hover:text-lumina-600'}`}>{t('about')}</Link>
            <Link href="/services" className={`transition-colors ${isActive('/services') ? 'text-lumina-600 font-semibold' : 'text-slate-600 hover:text-lumina-600'}`}>{t('services')}</Link>
            <Link href="/projects" className={`transition-colors ${isActive('/projects') ? 'text-lumina-600 font-semibold' : 'text-slate-600 hover:text-lumina-600'}`}>{t('projects')}</Link>
            <Link href="/blog" className={`transition-colors ${isActive('/blog') ? 'text-lumina-600 font-semibold' : 'text-slate-600 hover:text-lumina-600'}`}>{t('blog')}</Link>
            <Link href="/contact" className="bg-lumina-600 text-white px-4 py-2.5 rounded-lg hover:bg-lumina-700 transition-colors shadow-md shadow-lumina-200">{t('freeConsult')}</Link>
            {/* Language toggle */}
            <Link href={pathWithoutLocale as `/${string}`} locale={otherLocale} className="text-xs font-bold text-slate-400 hover:text-lumina-600 transition-colors border border-slate-300 rounded-md px-2 py-1">{otherLabel}</Link>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <Link href={pathWithoutLocale as `/${string}`} locale={otherLocale} className="text-xs font-bold text-slate-400 hover:text-lumina-600 transition-colors border border-slate-300 rounded-md px-2 py-1">{otherLabel}</Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-600 text-xl" aria-label="Menu">
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
            </button>
          </div>
        </div>

        <div className={`md:hidden pb-4 space-y-1 ${menuOpen ? '' : 'hidden'}`}>
          <Link href="/" className={`block py-2.5 ${isActive('/') ? 'text-lumina-600 font-semibold' : 'text-slate-600'}`}>{t('home')}</Link>
          <Link href="/about" className={`block py-2.5 ${isActive('/about') ? 'text-lumina-600 font-semibold' : 'text-slate-600'}`}>{t('about')}</Link>
          <Link href="/services" className={`block py-2.5 ${isActive('/services') ? 'text-lumina-600 font-semibold' : 'text-slate-600'}`}>{t('services')}</Link>
          <Link href="/projects" className={`block py-2.5 ${isActive('/projects') ? 'text-lumina-600 font-semibold' : 'text-slate-600'}`}>{t('projects')}</Link>
          <Link href="/blog" className={`block py-2.5 ${isActive('/blog') ? 'text-lumina-600 font-semibold' : 'text-slate-600'}`}>{t('blog')}</Link>
          <Link href="/contact" className="block py-2.5 text-lumina-600 font-semibold">{t('freeConsult')}</Link>
        </div>
      </div>
    </nav>
  );
}
