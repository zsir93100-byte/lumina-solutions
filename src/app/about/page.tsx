import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: '关于我们',
  description: '光澜科技成立于 2022 年，坐标洛阳。一支由全栈工程师组成的编外技术团队，专注为本地中小企业提供一站式数字化服务。',
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-lumina-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">关于光澜科技</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">一支扎根洛阳的技术团队，专注做好一件事 — 帮中小企业用好技术。</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">我们的故事</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">从接私活到正规军</h2>
              <div className="text-slate-500 space-y-4 leading-relaxed">
                <p><span className="font-semibold text-slate-700">2022 年</span>，三个人在洛阳洛龙区一间共享办公室开始了光澜科技。最初只是帮朋友的公司做网站，但很快发现 — 不是这些老板不想数字化，而是没人能用他们听得懂的话把技术讲明白。</p>
                <p>我们不是那种"接了项目就消失"的乙方。每一个客户，我们都把自己当成对方的<span className="font-semibold text-slate-700">编外 CTO</span>，参与需求讨论、给合理的方案而不是最贵的方案、按月汇报进度。</p>
                <p>3 年下来，靠着口碑介绍，我们服务了 100+ 本地企业 — 从制造厂到教育机构，从零售连锁到贸易公司。团队也从 3 人发展到 15 人。</p>
                <p className="text-lumina-600 font-medium">这个网站，就是我们技术能力的展示窗口。</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute w-64 h-64 bg-lumina-500/10 rounded-full -top-8 -left-8 blur-3xl" />
                {/* Team photo placeholder — 替换为真实团队照片 */}
                <div className="relative h-72 rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-lumina-600 via-lumina-500 to-amber-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <i className="fa-solid fa-people-group text-5xl text-white/30 mb-3" />
                    <p className="text-white/50 text-sm">光澜科技团队</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                  <div className="text-2xl font-extrabold text-lumina-600">15<span className="text-sm text-slate-400 font-normal">人</span></div>
                  <div className="text-xs text-slate-500">全栈技术团队</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">发展历程</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">从 3 个人到 15 人，从接私活到正规军</h2>
            <p className="text-slate-500 max-w-xl mx-auto">三年时间，一步一个脚印。每个里程碑背后都是客户的信任。</p>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-px" />

            <div className="space-y-10">
              {timeline.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <AnimatedSection key={item.year} delay={idx * 0.08} direction={isLeft ? 'left' : 'right'}>
                    <div className={`relative flex flex-col md:flex-row gap-6 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                          <span className="text-lumina-600 font-extrabold text-lg">{item.year}</span>
                          <h3 className="font-bold mt-1">{item.title}</h3>
                          <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>

                      {/* Dot on the line */}
                      <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-lumina-600 rounded-full border-4 border-white shadow -translate-x-1/2 flex items-center justify-center">
                        <i className={`${item.icon} text-white text-xs`} />
                      </div>

                      {/* Spacer for the other side */}
                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">核心团队</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">每一位都是能独立交付的全栈</h2>
            <p className="text-slate-500 max-w-xl mx-auto">我们不招只会写 CRUD 的码农。每个人都能从需求沟通做到部署上线。</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.08}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-all">
                  <div className={`w-24 h-24 ${m.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-3xl font-bold ${m.color}`}>{m.initial}</span>
                  </div>
                  <h3 className="font-bold text-lg">{m.name}</h3>
                  <p className={`${m.color} text-sm font-medium`}>{m.role}</p>
                  <p className="text-slate-400 text-xs mt-2">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">技术实力</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">我们用的技术栈</h2>
            <p className="text-slate-500 max-w-xl mx-auto">现代、开源、不绑定厂商。代码交给你，部署在你自己的云账号上。</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techCategories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-2xl p-8 text-center hover:bg-slate-100 transition-colors">
                  <div className="text-4xl mb-4">{cat.icons}</div>
                  <h3 className="font-bold mb-2">{cat.title}</h3>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {cat.tags.map((t) => (
                      <span key={t} className="text-xs bg-white border border-slate-200 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">我们相信的几件事</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-3 text-lumina-600 text-xl">
                    <i className={v.icon} />
                  </div>
                  <h3 className="font-bold mb-1">{v.title}</h3>
                  <p className="text-slate-400 text-xs">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const team = [
  { initial: '陈', name: '陈远', role: '创始人 / 全栈', desc: '前大厂高级工程师，8 年 Web 开发经验。负责技术架构 + 大客户对接。', bg: 'bg-lumina-100', color: 'text-lumina-600' },
  { initial: '周', name: '周明', role: '联合创始人 / 后端', desc: '数据库架构专家，Supabase/PostgreSQL 重度用户。负责后端 + 运维。', bg: 'bg-emerald-100', color: 'text-emerald-600' },
  { initial: '林', name: '林茜', role: '前端 / 设计', desc: 'UX 背景出身，Tailwind/Figma 高手。负责界面设计 + 前端开发。', bg: 'bg-purple-100', color: 'text-purple-600' },
  { initial: '马', name: '马超', role: '客户成功 / PM', desc: '3 年中小企业咨询经验。负责需求沟通、项目管理和客户关系。', bg: 'bg-amber-100', color: 'text-amber-600' },
];

const techCategories = [
  { icons: '<i class="fa-brands fa-html5 text-orange-500"></i> <i class="fa-brands fa-css3 text-blue-500"></i>', title: '前端 & UI', tags: ['HTML5/CSS3', 'Tailwind CSS', 'React', 'Next.js', 'TypeScript'] },
  { icons: '<i class="fa-solid fa-database text-emerald-500"></i> <i class="fa-solid fa-server text-slate-500"></i>', title: '后端 & 数据', tags: ['Supabase', 'PostgreSQL', 'Stripe 支付', 'Node.js'] },
  { icons: '<i class="fa-solid fa-cloud text-lumina-500"></i> <i class="fa-solid fa-gear text-slate-500"></i>', title: '部署 & 运维', tags: ['Vercel', 'Docker', 'GitHub CI/CD', '阿里云'] },
];

const values = [
  { icon: 'fa-solid fa-hand-holding-heart', title: '不做过度销售', desc: '给你最合适的方案，不是最贵的。' },
  { icon: 'fa-solid fa-code', title: '代码即诚意', desc: '交付的不只是功能，是可维护的工程代码。' },
  { icon: 'fa-solid fa-lock-open', title: '不锁入客户', desc: '代码是你自己的。随时可以换人维护。' },
  { icon: 'fa-solid fa-comments', title: '说人话', desc: '不用术语唬人。老板听得懂，才是好方案。' },
];

const timeline = [
  { year: '2022', title: '光澜科技成立', desc: '3 个人在洛阳洛龙区一间共享办公室起步。第一个客户是朋友介绍的制造厂。', icon: 'fa-solid fa-flag' },
  { year: '2023', title: '服务 30+ 企业', desc: '靠口碑传播，客户从制造业扩展到教育和零售。团队扩充到 7 人，建立了标准化的需求沟通和交付流程。', icon: 'fa-solid fa-users' },
  { year: '2024', title: '技术栈全面升级', desc: '全面转向 Next.js + Supabase 现代技术栈，引入 CI/CD 自动化部署。开始做企业管理系统和 ERP 集成。', icon: 'fa-solid fa-rocket' },
  { year: '2025', title: '突破 100 家客户', desc: '业务扩展到郑州及周边城市。上线了在线支付、管理后台等标准化产品模块。团队达到 12 人。', icon: 'fa-solid fa-chart-bar' },
  { year: '2026', title: '成为区域领先', desc: '团队 15 人，覆盖制造业、教育、零售、贸易、化工等 15 个行业。被多家本地商会推荐为企业数字化服务商。', icon: 'fa-solid fa-star' },
];
