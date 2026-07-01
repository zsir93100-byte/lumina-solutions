import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lumina.tech';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: locale === 'zh'
        ? '光澜科技 Lumina Solutions — 中小企业数字化升级伙伴'
        : 'Lumina Solutions — Digital Partner for SMBs',
      template: `%s — ${locale === 'zh' ? '光澜科技 Lumina Solutions' : 'Lumina Solutions'}`,
    },
    description:
      locale === 'zh'
        ? '光澜科技致力于为洛阳及周边中小企业提供网站开发、企业管理系统、数字化咨询与 IT 运维一站式服务。我们不写花哨的方案，只交付真实可用的系统。'
        : 'Lumina Solutions provides web development, management systems, digital consulting, and IT operations for SMBs. We deliver real, working systems — not fancy proposals.',
    keywords: ['web development', 'management systems', 'digital consulting', 'IT operations', 'SMB', 'Luoyang'],
    authors: [{ name: locale === 'zh' ? '光澜科技' : 'Lumina Solutions' }],
    creator: locale === 'zh' ? '光澜科技' : 'Lumina Solutions',
    openGraph: {
      title: locale === 'zh' ? '光澜科技 Lumina Solutions' : 'Lumina Solutions',
      description: locale === 'zh'
        ? '中小企业数字化升级的最佳技术伙伴。'
        : 'Your best tech partner for digital transformation.',
      siteName: locale === 'zh' ? '光澜科技' : 'Lumina Solutions',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Lumina Solutions' }],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    icons: { icon: '/favicon.ico' },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : 'en'}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <JsonLd locale={locale} />
      </head>
      <body className="bg-white text-slate-800 antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
