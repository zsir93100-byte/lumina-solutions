'use client';

import { useState, useMemo } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import NewsletterForm from '@/components/NewsletterForm';

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const allTags = useMemo(() => {
    const tags = new Set(articles.map((a) => a.tag));
    return Array.from(tags);
  }, []);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchTag = !activeTag || a.tag === activeTag;
      const matchSearch =
        !search ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.desc.toLowerCase().includes(search.toLowerCase()) ||
        a.tag.includes(search);
      return matchTag && matchSearch;
    });
  }, [activeTag, search]);

  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-lumina-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">技术博客</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            写给我们自己和同行——关于技术选型、项目复盘和中小企业数字化的思考。
          </p>
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
                <span className="text-lumina-600 text-sm font-semibold">置顶 · 技术选型</span>
                <h2 className="text-2xl font-bold mt-2 mb-3">中小企业应该选 HTML+Tailwind 还是 Next.js？一个决策框架</h2>
                <p className="text-slate-500 mb-4">没有银弹。本文提供一个实用的决策矩阵：根据你的预算、团队能力和长期规划来选择。</p>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span><i className="fa-regular fa-calendar mr-1" />2026-06-25</span>
                  <span><i className="fa-regular fa-clock mr-1" />10 分钟</span>
                  <span className="bg-slate-200 px-2 py-0.5 rounded-full text-xs">技术决策</span>
                </div>
              </div>
            </article>
          </AnimatedSection>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !activeTag
                    ? 'bg-lumina-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                全部文章
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    tag === activeTag
                      ? 'bg-lumina-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="搜索文章…"
                className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lumina-500 focus:border-transparent transition-shadow"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <i className="fa-solid fa-xmark text-xs" />
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          {search && (
            <p className="text-slate-500 text-sm mb-6">
              找到 <span className="font-semibold text-slate-700">{filtered.length}</span> 篇与「{search}」相关的文章
            </p>
          )}

          {/* Article grid */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {filtered.map((a, i) => (
                <AnimatedSection key={a.title} delay={i * 0.04}>
                  <article className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all h-full group">
                    <div className={`h-48 ${a.gradient} flex items-center justify-center relative overflow-hidden`}>
                      <i className={`${a.icon} text-5xl text-white/10 absolute -right-3 -bottom-3 group-hover:scale-125 transition-transform duration-500`} />
                    </div>
                    <div className="p-6">
                      <span className={`${a.tagColor} text-sm font-semibold`}>{a.tag}</span>
                      <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-lumina-600 transition-colors">{a.title}</h3>
                      <p className="text-slate-500 text-sm mb-3">{a.desc}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span>{a.date}</span><span>{a.read}</span>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">没有找到相关文章</h3>
              <p className="text-slate-500 mb-4">试试其他关键词或标签筛选。</p>
              <button
                onClick={() => { setSearch(''); setActiveTag(null); }}
                className="text-lumina-600 font-medium hover:underline"
              >
                清除所有筛选
              </button>
            </div>
          )}

          {/* Newsletter */}
          <AnimatedSection className="mt-16">
            <div className="bg-gradient-to-br from-lumina-600 to-lumina-700 text-white p-10 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-2">📬 技术简报</h3>
              <p className="text-lumina-200 mb-6 max-w-md mx-auto">每月一封邮件，分享我们在中小企业数字化中的技术实践和踩坑记录。不频繁，不废话。</p>
              <NewsletterForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

const articles = [
  { gradient: 'bg-gradient-to-br from-slate-700 to-slate-900', icon: 'fa-solid fa-gauge-high', tag: '性能优化', tagColor: 'text-emerald-600', title: 'Core Web Vitals 实战：一个制造企业官网从 60 到 95 的优化记录', desc: '真实项目复盘：图片优化、字体加载、代码分割——每一步的可量化收益。', date: '2026-06-25', read: '8 分钟' },
  { gradient: 'bg-gradient-to-br from-emerald-700 to-emerald-900', icon: 'fa-solid fa-database', tag: '后端', tagColor: 'text-emerald-600', title: 'Supabase 入门：为什么我们推荐它给中小企业项目', desc: 'PostgreSQL 的完整能力 + 即时 API + 行级安全——一个周末就能上手。', date: '2026-06-18', read: '7 分钟' },
  { gradient: 'bg-gradient-to-br from-purple-700 to-purple-900', icon: 'fa-solid fa-credit-card', tag: '支付', tagColor: 'text-purple-600', title: 'Stripe 支付集成：给非技术客户的解释指南', desc: '怎么跟老板解释 Webhook？这篇文章就是用来转发的。', date: '2026-06-12', read: '5 分钟' },
  { gradient: 'bg-gradient-to-br from-amber-600 to-amber-800', icon: 'fa-solid fa-mobile-screen', tag: '前端', tagColor: 'text-amber-600', title: 'Tailwind 响应式设计：从手机到桌面，一套代码全搞定', desc: '用 sm: md: lg: 断点系统地构建响应式页面，告别 CSS 媒体查询地狱。', date: '2026-06-08', read: '6 分钟' },
  { gradient: 'bg-gradient-to-br from-lumina-600 to-lumina-800', icon: 'fa-solid fa-rocket', tag: '技术选型', tagColor: 'text-lumina-600', title: 'Server Actions 改变了我的全栈开发方式', desc: '不再需要 API Routes——Server Actions 让表单提交的前后端逻辑在同一个文件里完成。', date: '2026-06-02', read: '12 分钟' },
  { gradient: 'bg-gradient-to-br from-slate-600 to-slate-800', icon: 'fa-solid fa-building-columns', tag: '客户故事', tagColor: 'text-slate-600', title: '一个制造厂老板的数字化心路历程', desc: '从"我不需要网站"到"这个系统帮了大忙"——一次真实的客户访谈。', date: '2026-05-28', read: '4 分钟' },
  { gradient: 'bg-gradient-to-br from-blue-700 to-blue-900', icon: 'fa-solid fa-shield-halved', tag: '安全', tagColor: 'text-blue-600', title: '中小企业网站安全自查清单：12 项必做检查', desc: 'SSL 证书、SQL 注入防护、XSS 防御、敏感信息泄露——逐项排查你的网站安全隐患。', date: '2026-05-20', read: '9 分钟' },
  { gradient: 'bg-gradient-to-br from-teal-700 to-teal-900', icon: 'fa-solid fa-cloud-arrow-up', tag: '运维', tagColor: 'text-teal-600', title: '从零搭建 CI/CD：GitHub Actions + Vercel 新手教程', desc: '代码推送即自动部署——给不懂运维的开发者一个最简配置方案。', date: '2026-05-15', read: '7 分钟' },
  { gradient: 'bg-gradient-to-br from-red-700 to-red-900', icon: 'fa-solid fa-file-code', tag: '前端', tagColor: 'text-amber-600', title: 'CSS Grid vs Flexbox：中小企业官网布局该选哪个？', desc: '一个决策流程图帮你快速判断——大多数情况其实不需要 Grid。', date: '2026-05-10', read: '5 分钟' },
  { gradient: 'bg-gradient-to-br from-indigo-700 to-indigo-900', icon: 'fa-solid fa-brain', tag: '技术选型', tagColor: 'text-lumina-600', title: '2026 年中小企业技术栈推荐：我们实际在用的组合', desc: 'Next.js + Supabase + Stripe + Resend——一套组合解决网站、后端、支付和邮件。', date: '2026-05-05', read: '11 分钟' },
  { gradient: 'bg-gradient-to-br from-cyan-700 to-cyan-900', icon: 'fa-solid fa-envelope', tag: '后端', tagColor: 'text-emerald-600', title: '用 Resend 发送事务邮件：代替 SMTP 的现代方案', desc: '不再折腾邮件服务器配置——Resend SDK 5 行代码发送邮件，支持模板和追踪。', date: '2026-04-28', read: '6 分钟' },
  { gradient: 'bg-gradient-to-br from-green-700 to-green-900', icon: 'fa-solid fa-seedling', tag: '客户故事', tagColor: 'text-slate-600', title: '教育机构的线上化：从 80 人到 300+ 学员的增长复盘', desc: '知行教育的真实案例：不只是技术，还有运营策略和用户习惯培养。', date: '2026-04-20', read: '8 分钟' },
];
