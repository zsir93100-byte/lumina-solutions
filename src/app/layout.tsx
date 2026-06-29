import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lumina.tech';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '光澜科技 Lumina Solutions — 中小企业数字化升级伙伴',
    template: '%s — 光澜科技 Lumina Solutions',
  },
  description:
    '光澜科技致力于为洛阳及周边中小企业提供网站开发、企业管理系统、数字化咨询与 IT 运维一站式服务。我们不写花哨的方案，只交付真实可用的系统。',
  keywords: ['网站开发', '企业管理系统', '数字化咨询', 'IT运维', '洛阳', '中小企业'],
  authors: [{ name: '光澜科技' }],
  creator: '光澜科技',
  openGraph: {
    title: '光澜科技 Lumina Solutions',
    description: '中小企业数字化升级的最佳技术伙伴。',
    siteName: '光澜科技',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <JsonLd />
      </head>
      <body className="bg-white text-slate-800 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
