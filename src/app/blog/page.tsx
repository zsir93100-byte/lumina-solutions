import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: '博客',
  description: '技术分享、行业洞察、中小企业数字化最佳实践 — 光澜科技技术博客。',
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-lumina-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">技术博客</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">写给我们自己和同行 — 关于技术选型、项目复盘和中小企业数字化的思考。</p>
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

          {/* Article grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.06}>
                <article className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all h-full">
                  <div className={`h-48 ${a.gradient} flex items-center justify-center`}>
                    <i className={`${a.icon} text-5xl text-white/10`} />
                  </div>
                  <div className="p-6">
                    <span className={`${a.tagColor} text-sm font-semibold`}>{a.tag}</span>
                    <h3 className="text-lg font-bold mt-2 mb-2">{a.title}</h3>
                    <p className="text-slate-500 text-sm mb-3">{a.desc}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>{a.date}</span><span>{a.read}</span>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

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
  { gradient: 'bg-gradient-to-br from-slate-700 to-slate-900', icon: 'fa-solid fa-gauge-high', tag: '性能优化', tagColor: 'text-emerald-600', title: 'Core Web Vitals 实战：一个制造企业官网从 60 到 95 的优化记录', desc: '真实项目复盘：图片优化、字体加载、代码分割 — 每一步的可量化收益。', date: '2026-06-18', read: '8 分钟' },
  { gradient: 'bg-gradient-to-br from-emerald-700 to-emerald-900', icon: 'fa-solid fa-database', tag: '后端', tagColor: 'text-emerald-600', title: 'Supabase 入门：为什么我们推荐它给中小企业项目', desc: 'PostgreSQL 的完整能力 + 即时 API + 行级安全 — 一个周末就能上手。', date: '2026-06-12', read: '7 分钟' },
  { gradient: 'bg-gradient-to-br from-purple-700 to-purple-900', icon: 'fa-solid fa-credit-card', tag: '支付', tagColor: 'text-purple-600', title: 'Stripe 支付集成：给非技术客户的解释指南', desc: '怎么跟老板解释 Webhook？这篇文章就是用来转发的。', date: '2026-06-08', read: '5 分钟' },
  { gradient: 'bg-gradient-to-br from-amber-600 to-amber-800', icon: 'fa-solid fa-mobile-screen', tag: '响应式', tagColor: 'text-amber-600', title: 'Tailwind 响应式设计：从手机到桌面，一套代码全搞定', desc: '用 sm: md: lg: 断点系统地构建响应式页面，告别 CSS 媒体查询地狱。', date: '2026-05-30', read: '6 分钟' },
  { gradient: 'bg-gradient-to-br from-lumina-600 to-lumina-800', icon: 'fa-solid fa-rocket', tag: 'Next.js', tagColor: 'text-lumina-600', title: 'Server Actions 改变了我的全栈开发方式', desc: '不再需要 API Routes — Server Actions 让表单提交的前后端逻辑在同一个文件里完成。', date: '2026-05-22', read: '12 分钟' },
  { gradient: 'bg-gradient-to-br from-slate-600 to-slate-800', icon: 'fa-solid fa-building-columns', tag: '客户故事', tagColor: 'text-slate-600', title: '一个制造厂老板的数字化心路历程', desc: '从"我不需要网站"到"这个系统帮了大忙" — 一次真实的客户访谈。', date: '2026-05-15', read: '4 分钟' },
];
