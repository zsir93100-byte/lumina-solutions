import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lumina.tech';
  const lastModified = new Date();

  const routes = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/projects', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}
