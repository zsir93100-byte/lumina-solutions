export default function JsonLd({ locale }: { locale?: string }) {
  const isZh = locale === 'zh';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: isZh ? '光澜科技 Lumina Solutions' : 'Lumina Solutions',
    url: 'https://lumina.tech',
    logo: 'https://lumina.tech/logo.png',
    description: isZh
      ? '光澜科技致力于为洛阳及周边中小企业提供网站开发、企业管理系统、数字化咨询与 IT 运维一站式服务。'
      : 'Lumina Solutions provides web development, management systems, digital consulting, and IT operations for SMBs.',
    foundingDate: '2022',
    address: {
      '@type': 'PostalAddress',
      addressLocality: isZh ? '洛阳市' : 'Luoyang',
      addressRegion: isZh ? '河南省' : 'Henan',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-400-888-9999',
      contactType: 'sales',
      availableLanguage: isZh ? ['Chinese'] : ['Chinese', 'English'],
    },
    sameAs: ['https://github.com/lumina-solutions'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
