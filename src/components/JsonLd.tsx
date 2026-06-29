/**
 * JSON-LD 结构化数据 — Organization Schema
 * 帮助搜索引擎理解公司信息，提升品牌搜索结果的展示效果。
 */
export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '光澜科技 Lumina Solutions',
    url: 'https://lumina.tech',
    logo: 'https://lumina.tech/logo.png',
    description: '光澜科技致力于为洛阳及周边中小企业提供网站开发、企业管理系统、数字化咨询与 IT 运维一站式服务。',
    foundingDate: '2022',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '洛阳市',
      addressRegion: '河南省',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-400-888-9999',
      contactType: 'sales',
      availableLanguage: ['Chinese'],
    },
    sameAs: [
      'https://github.com/lumina-solutions',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
