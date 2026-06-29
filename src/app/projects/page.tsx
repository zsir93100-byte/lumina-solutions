import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: '成功案例',
  description: '制造业官网+ERP、教育在线平台、零售品牌官网+商城、贸易公司 CRM — 光澜科技真实项目案例展示。',
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-lumina-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">成功案例</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">每一个案例都是真实业务的缩影。你的行业，也许就在其中。</p>
        </div>
      </section>

      {cases.map((c, idx) => {
        const isReversed = idx % 2 === 1;
        return (
          <section key={c.client} className={`py-16 ${idx < cases.length - 1 ? 'border-b border-slate-100' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-5 gap-10 items-center">
                {/* Image block */}
                <div className={`md:col-span-2 ${isReversed ? 'md:order-2' : ''}`}>
                  <AnimatedSection direction={isReversed ? 'right' : 'left'}>
                    <div className={`h-56 ${c.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg`}>
                      <i className={`${c.icon} text-7xl text-white/10 absolute -right-4 -bottom-4`} />
                      <div className="text-center relative">
                        <div className="text-4xl font-extrabold text-white tracking-wide">{c.client}</div>
                        <div className="text-white/60 text-sm mt-2">{c.industry}</div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Content */}
                <div className={`md:col-span-3 ${isReversed ? 'md:order-1' : ''}`}>
                  <AnimatedSection direction={isReversed ? 'left' : 'right'}>
                    <span className={`text-xs font-semibold ${c.tagBg} ${c.tagColor} px-3 py-1 rounded-full`}>{c.tag}</span>
                    <h2 className="text-2xl font-bold mt-3 mb-4">{c.title}</h2>

                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      {c.metrics.map((m) => (
                        <div key={m.num} className={`${c.metricBg} rounded-xl p-4 text-center`}>
                          <div className={`text-2xl font-extrabold ${c.metricColor}`}>{m.num}</div>
                          <div className="text-xs text-slate-500">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 text-slate-600">
                      {c.points.map((p, i) => (
                        <p key={i}><span className="font-semibold">{p.label}</span>{p.text}</p>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">你的行业，也许就是下一个案例</h2>
            <p className="text-slate-500 mb-8">预约一次免费咨询，聊聊你的业务。我们不收咨询费，只收信任。</p>
            <Link href="/contact" className="inline-block bg-lumina-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-lumina-700 transition-colors shadow-lg shadow-lumina-200">开始你的项目 →</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

const cases = [
  {
    client: '盛达机械', industry: '制造行业 · 洛阳',
    gradient: 'bg-gradient-to-br from-slate-700 to-slate-900', icon: 'fa-solid fa-industry',
    tag: '官网 + ERP 集成', tagBg: 'bg-emerald-100', tagColor: 'text-emerald-700',
    title: '从零到数字化：一家制造厂的三年蜕变',
    metricBg: 'bg-emerald-50', metricColor: 'text-emerald-600',
    metrics: [
      { num: '60%', label: '线上接单效率提升' },
      { num: '45天', label: '从需求到上线' },
      { num: '0', label: '上线后重大故障' },
    ],
    points: [
      { label: '背景：', text: '盛达机械是一家年产值 8000 万的制造企业。客户询价靠电话和微信，订单管理靠 Excel。产品有 200+ 种规格，销售经常报错价。' },
      { label: '方案：', text: '我们分两期交付 — 第一期搭建企业官网（产品目录 + 在线询价），第二期开发内部订单管理系统并与生产排程打通。' },
      { label: '技术栈：', text: 'Next.js + Tailwind CSS + Supabase（订单数据库）+ Stripe（定金支付）。部署在客户自己的阿里云账号上。' },
      { label: '结果：', text: '上线后 3 个月，线上询价量翻倍。销售和车间之间的信息传递从"微信群喊"变成了系统即时推送。客户说："终于不用半夜翻 Excel 了。"' },
    ],
  },
  {
    client: '知行教育', industry: '教育行业 · 郑州',
    gradient: 'bg-gradient-to-br from-lumina-700 to-lumina-900', icon: 'fa-solid fa-graduation-cap',
    tag: '在线学习平台', tagBg: 'bg-lumina-100', tagColor: 'text-lumina-700',
    title: '拯救了一家教育机构的线上化转型',
    metricBg: 'bg-lumina-50', metricColor: 'text-lumina-600',
    metrics: [
      { num: '300+', label: '日均活跃学员' },
      { num: '85%', label: '课程完课率' },
      { num: '8周', label: '从签约到上线' },
    ],
    points: [
      { label: '背景：', text: '知行教育是郑州一家中小型培训机构，原来靠线下教室 + 微信群发资料运营。疫情期间生源流失严重，急需一套在线课程系统。' },
      { label: '方案：', text: '搭建了支持视频课程上传、学员进度追踪、作业提交批改的在线学习平台。关键需求：教务老师不需要懂技术就能上传课程、排课、查看学员数据。' },
      { label: '技术栈：', text: 'Next.js App Router + Supabase（学员数据 + 视频资源）+ Server Actions（作业提交）。后台管理界面用 Tailwind 做了详细的权限分级。' },
      { label: '结果：', text: '上线半年，学员从线下 80 人扩展到线上 300+。课程完课率从原来的不到 40% 提升到 85% — 因为系统会在学员"快掉队"时自动提醒教务跟进。' },
    ],
  },
  {
    client: '鲜丰连锁', industry: '零售行业 · 洛阳',
    gradient: 'bg-gradient-to-br from-emerald-700 to-emerald-900', icon: 'fa-solid fa-store',
    tag: '品牌官网 + 微信商城', tagBg: 'bg-amber-100', tagColor: 'text-amber-700',
    title: '连锁零售的品牌数字化升级',
    metricBg: 'bg-amber-50', metricColor: 'text-amber-600',
    metrics: [
      { num: '200%', label: '半年线上销售增长' },
      { num: '15', label: '家门店统一管理' },
      { num: '3秒', label: '页面平均加载' },
    ],
    points: [
      { label: '背景：', text: '鲜丰连锁在洛阳有 15 家生鲜门店，之前只有微信公众号发广告，没有品牌官网和统一的线上商城。各门店各自为政，客户数据分散。' },
      { label: '方案：', text: '一套品牌官网展示公司形象 + 产品溯源故事，同时做了微信小程序商城支持线上下单和门店自提。后台统一管理 15 家门店的商品、库存和订单。' },
      { label: '技术栈：', text: '品牌官网用 HTML + Tailwind 纯静态（Lighthouse 98 分）。微信小程序商城后端用 Supabase + Stripe 支付。门店后台管理用 Next.js。' },
      { label: '结果：', text: '上线半年，线上销售额增长了 200%。品牌官网的 SEO 让鲜丰在搜索引擎上排到了本地前三。老板说："以前客户以为我们就是个菜店，现在看起来像个正经牌子了。"' },
    ],
  },
  {
    client: '恒通贸易', industry: '贸易行业 · 洛阳',
    gradient: 'bg-gradient-to-br from-purple-700 to-purple-900', icon: 'fa-solid fa-chart-line',
    tag: '企业官网 + CRM', tagBg: 'bg-purple-100', tagColor: 'text-purple-700',
    title: '贸易公司的客户管理不再靠"记性好"',
    metricBg: 'bg-purple-50', metricColor: 'text-purple-600',
    metrics: [
      { num: '500+', label: '客户数据统一管理' },
      { num: '70%', label: '跟进效率提升' },
      { num: '2周', label: '全员上手培训' },
    ],
    points: [
      { label: '背景：', text: '恒通是一家做进出口贸易的公司，500+ 客户信息散落在 6 个销售员的微信、Excel 和脑子里。老板不知道谁在跟进什么、哪些客户快丢了。' },
      { label: '方案：', text: '第一，做了企业官网展示公司资质和产品线，提升海外客户信任度。第二，开发了一套轻量 CRM — 客户档案、跟进记录、报价单管理、合同到期提醒。' },
      { label: '技术栈：', text: 'Next.js + Supabase RLS（行级安全，每个销售只能看到自己的客户数据）。CI/CD 用了 GitHub Actions 自动部署到阿里云。' },
      { label: '结果：', text: '老板终于能在手机上看"本周哪个销售没跟进客户"了。客户信息不再因为销售离职而丢失。官网上线后收到了 3 个海外询盘。' },
    ],
  },
];
