'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold text-lumina-700 mb-3">
              <div className="w-7 h-7 bg-lumina-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-sun text-white text-xs" />
              </div>
              <span>{t('brand')}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{t('about')}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-700">{t('services')}</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><Link href="/services" className="hover:text-lumina-600 transition-colors">{t('webDev')}</Link></li>
              <li><Link href="/services" className="hover:text-lumina-600 transition-colors">{t('mgmtSys')}</Link></li>
              <li><Link href="/services" className="hover:text-lumina-600 transition-colors">{t('cloudOps')}</Link></li>
              <li><Link href="/services" className="hover:text-lumina-600 transition-colors">{t('digitalConsult')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-700">{t('company')}</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><Link href="/about" className="hover:text-lumina-600 transition-colors">{t('aboutUs')}</Link></li>
              <li><Link href="/projects" className="hover:text-lumina-600 transition-colors">{t('caseStudies')}</Link></li>
              <li><Link href="/blog" className="hover:text-lumina-600 transition-colors">{t('blog')}</Link></li>
              <li><Link href="/contact" className="hover:text-lumina-600 transition-colors">{t('contactUs')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-700">{t('contactInfo')}</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><i className="fa-solid fa-phone text-lumina-400 mr-2" />{t('phone')}</li>
              <li><i className="fa-solid fa-envelope text-lumina-400 mr-2" />{t('email')}</li>
              <li><i className="fa-solid fa-location-dot text-lumina-400 mr-2" />{t('address')}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-slate-400">
          <span>{t('copyright')}</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-lumina-600 transition-colors">{t('privacy')}</Link>
            <a href="#" className="hover:text-lumina-600 transition-colors"><i className="fa-brands fa-weixin" /></a>
            <a href="#" className="hover:text-lumina-600 transition-colors"><i className="fa-brands fa-github" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
