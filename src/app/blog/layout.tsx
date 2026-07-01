import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '技术博客',
  description:
    '技术分享、行业洞察、中小企业数字化最佳实践——光澜科技技术博客。覆盖性能优化、后端开发、支付集成、技术选型等话题。',
  openGraph: {
    title: '光澜科技技术博客',
    description: '技术分享、行业洞察、中小企业数字化最佳实践。',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
