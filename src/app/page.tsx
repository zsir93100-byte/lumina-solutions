import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function HomePage() {
  return (
    <>
      {/* ========== Hero ========== */}
      <section className="pt-24 pb-16 md:pt-36 md:pb-28 bg-gradient-to-br from-slate-50 via-lumina-50/40 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                服务洛阳及周边 100+ 中小企业
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                让数字化{' '}
                <br className="md:hidden" />
                <span className="text-lumina-600">真正为中小企业服务</span>
              </h1>
              <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
                我们不是外包公司，而是你的
                <span className="text-slate-700 font-medium">编外技术团队</span>。
                从网站到管理系统，从咨询到运维 — 一站式解决中小企业的所有技术难题。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-lumina-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-lumina-700 transition-all shadow-lg shadow-lumina-200 flex items-center gap-2"
                >
                  预约免费咨询 <i className="fa-solid fa-arrow-right text-sm" />
                </Link>
                <Link
                  href="/projects"
                  className="border border-slate-300 text-slate-700 px-6 py-3.5 rounded-lg font-semibold hover:border-lumina-300 hover:text-lumina-600 transition-all"
                >
                  看成功案例
                </Link>
              </div>
            </AnimatedSection>

            {/* Terminal mockup */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="hidden md:block relative">
                <div className="absolute w-72 h-72 bg-lumina-500/10 rounded-full -top-8 -right-8 blur-3xl" />
                <div className="absolute w-56 h-56 bg-amber-400/10 rounded-full -bottom-8 -left-8 blur-3xl" />
                <div className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs text-slate-500 font-mono">lumina-deploy.sh</span>
                  </div>
                  <div className="p-5 font-mono text-sm leading-relaxed">
                    <p><span className="text-purple-400">$</span> <span className="text-emerald-300">system</span> <span className="text-slate-400">--</span><span className="text-amber-300">status</span></p>
                    <p className="text-slate-400 mt-1">├─ 官网系统 <span className="text-emerald-400">● online</span>  响应 &lt;200ms</p>
                    <p className="text-slate-400">├─ ERP 集成 <span className="text-emerald-400">● online</span>  数据同步中</p>
                    <p className="text-slate-400">├─ 在线支付 <span className="text-emerald-400">● online</span>  日交易 320 笔</p>
                    <p className="text-slate-400">└─ 运维监控 <span className="text-emerald-400">● online</span>  0 告警</p>
                    <p className="mt-3"><span className="text-purple-400">$</span> <span className="text-slate-500">_</span></p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== 核心服务 ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">核心服务</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">一站覆盖中小企业的技术需求</h2>
            <p className="text-slate-500 max-w-xl mx-auto">不需要分别找建站公司、软件外包、IT 运维 — 我们全部搞定。</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="group p-7 rounded-2xl border border-slate-200 hover:border-lumina-200 hover:shadow-xl transition-all bg-white h-full">
                  <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-5 group-hover:bg-opacity-100 transition-colors`}>
                    <i className={`${s.icon} ${s.color} text-lg`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  <Link href="/services" className={`inline-flex items-center gap-1 ${s.color} text-sm font-medium mt-4 hover:gap-2 transition-all`}>
                    了解详情 <i className="fa-solid fa-chevron-right text-xs" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Why us ========== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">为什么选择光澜</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                你缺少的不是技术，而是<span className="text-lumina-600">懂业务的技术团队</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                中小企业的痛我们都懂：预算有限、需求变化快、内部没有专职 CTO。
                我们做的不是"交付代码就走"，而是做你长期的编外技术部 — 设计、开发、运维全包，按月服务，随时对接。
              </p>
              <div className="space-y-4">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="fa-solid fa-check text-emerald-600 text-xs" />
                    </div>
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((t) => (
                  <div key={t.label} className="bg-white p-5 rounded-xl border border-slate-200 text-center hover:shadow-md transition-shadow">
                    <i className={`${t.icon} text-3xl ${t.color} mb-2`} />
                    <div className="font-bold text-sm">{t.label}</div>
                    <div className="text-xs text-slate-400">{t.sub}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== 案例预览 ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">成功案例</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">帮客户做到的实际效果</h2>
            </div>
            <Link href="/projects" className="text-lumina-600 font-medium hover:gap-2 transition-all inline-flex items-center gap-1">
              查看全部案例 <i className="fa-solid fa-arrow-right text-sm" />
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {casePreview.map((c, i) => (
              <AnimatedSection key={c.name} delay={i * 0.1}>
                <Link href="/projects" className="group block rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
                  <div className={`h-48 ${c.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <i className={`${c.icon} text-6xl text-white/10 absolute -right-4 -bottom-4`} />
                    <div className="text-center relative">
                      <div className="text-3xl font-extrabold text-white">{c.name}</div>
                      <div className="text-white/60 text-sm mt-1">{c.industry}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className={`text-xs font-semibold ${c.tagBg} ${c.tagColor} px-2 py-0.5 rounded-full`}>{c.tag}</span>
                    <h3 className="font-bold mt-3 mb-2 group-hover:text-lumina-600 transition-colors">{c.title}</h3>
                    <p className="text-slate-500 text-sm">{c.desc}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 数据 ========== */}
      <section className="py-20 bg-lumina-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <AnimatedSection key={s.label} delay={0.05}>
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{s.num}</div>
                <div className="text-lumina-200 text-sm">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 md:p-16 rounded-2xl shadow-2xl">
              <div className="w-16 h-16 bg-lumina-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-comments text-lumina-300 text-2xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">不确定从哪里开始？</h2>
              <p className="text-slate-400 mb-8 text-lg max-w-md mx-auto">
                预约 30 分钟免费咨询，我们帮你理清需求，给出一份<span className="text-white font-medium">实际可落地的方案建议</span>。不推销，不收费。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="bg-lumina-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-lumina-500 transition-colors shadow-xl shadow-lumina-900/50">
                  立即预约免费咨询
                </Link>
                <a href="tel:4008889999" className="border border-slate-600 text-slate-300 px-8 py-3.5 rounded-xl font-semibold hover:border-slate-400 hover:text-white transition-colors">
                  <i className="fa-solid fa-phone mr-2" />直接致电
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

// ======================== DATA ========================

const services = [
  {
    title: '网站开发',
    desc: '企业官网、营销站、电商平台 — HTML/Tailwind 到 Next.js 全栈，PC+移动端完美适配。',
    bg: 'bg-lumina-50', color: 'text-lumina-600', icon: 'fa-solid fa-globe',
  },
  {
    title: '管理系统',
    desc: '进销存、CRM、ERP 定制开发 — 基于 Supabase/PostgreSQL，安全、可扩展、不绑定厂商。',
    bg: 'bg-emerald-50', color: 'text-emerald-600', icon: 'fa-solid fa-server',
  },
  {
    title: '云部署与运维',
    desc: '服务器上云、CI/CD 自动化、SSL/备份/监控 — 让你的系统 7×24 稳定运行。',
    bg: 'bg-amber-50', color: 'text-amber-600', icon: 'fa-solid fa-cloud-arrow-up',
  },
  {
    title: '数字化咨询',
    desc: '技术架构评估、数字化转型路线图、团队培训 — 帮你在正确的方向上投资。',
    bg: 'bg-purple-50', color: 'text-purple-600', icon: 'fa-solid fa-magnifying-glass-chart',
  },
];

const whyUs = [
  { title: '全栈覆盖，单一联系人', desc: '不需要对接设计、前端、后端、运维 4 拨人 — 我们一个团队全包。' },
  { title: '按月合作，灵活调整', desc: '不需要签全年大合同。按月服务，随时根据业务变化调整方向和优先级。' },
  { title: '技术栈现代，不被绑定', desc: '所有代码开源、部署在你自己的云账号上。我们离开，你的系统照常运转。' },
];

const techStack = [
  { icon: 'fa-brands fa-html5', color: 'text-orange-500', label: 'HTML / Tailwind', sub: '响应式官网' },
  { icon: 'fa-brands fa-react', color: 'text-cyan-400', label: 'Next.js / React', sub: 'Web 应用框架' },
  { icon: 'fa-solid fa-database', color: 'text-emerald-500', label: 'Supabase / PG', sub: '后端与数据库' },
  { icon: 'fa-solid fa-shield-halved', color: 'text-lumina-500', label: 'CI/CD + 运维', sub: '自动化部署' },
];

const casePreview = [
  {
    name: '盛达机械', industry: '制造行业',
    gradient: 'bg-gradient-to-br from-slate-700 to-slate-900', icon: 'fa-solid fa-industry',
    tag: '官网 + ERP 集成', tagBg: 'bg-emerald-100', tagColor: 'text-emerald-700',
    title: '制造业官网 + 订单管理系统', desc: '为客户搭建企业官网并集成 ERP，线上接单效率提升 60%。',
  },
  {
    name: '知行教育', industry: '教育行业',
    gradient: 'bg-gradient-to-br from-lumina-700 to-lumina-900', icon: 'fa-solid fa-graduation-cap',
    tag: '在线学习平台', tagBg: 'bg-lumina-100', tagColor: 'text-lumina-700',
    title: '教育机构在线课程与学员管理', desc: '搭建支持视频课、作业提交、排课管理的在线学习系统。',
  },
  {
    name: '鲜丰连锁', industry: '零售行业',
    gradient: 'bg-gradient-to-br from-emerald-700 to-emerald-900', icon: 'fa-solid fa-store',
    tag: '品牌官网 + 微信商城', tagBg: 'bg-amber-100', tagColor: 'text-amber-700',
    title: '零售连锁品牌官网与线上商城', desc: '15 家门店的品牌官网 + 小程序商城，线上销售额半年增长 200%。',
  },
];

const stats = [
  { num: '100+', label: '服务企业' },
  { num: '15+', label: '行业覆盖' },
  { num: '98%', label: '客户续约率' },
  { num: '3年', label: '深耕本地' },
];
