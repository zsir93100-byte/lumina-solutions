import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import PayButton from '@/components/PayButton';

export const metadata: Metadata = {
  title: '服务方案',
  description: '网站开发、企业管理系统定制、云部署与运维、数字化咨询 — 光澜科技为中小企业提供一站式技术服务。',
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-lumina-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">服务方案</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">从网站到系统，从咨询到运维 — 所有技术需求，一站式解决。</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceLines.map((line, idx) => (
            <div
              key={line.title}
              className={`grid md:grid-cols-3 gap-10 items-center ${
                idx < serviceLines.length - 1 ? 'mb-20 pb-20 border-b border-slate-100' : ''
              }`}
            >
              <AnimatedSection className="md:col-span-1">
                <div className={`w-14 h-14 ${line.bg} rounded-2xl flex items-center justify-center mb-5`}>
                  <i className={`${line.icon} ${line.color} text-xl`} />
                </div>
                <h2 className="text-2xl font-bold mb-3">{line.title}</h2>
                <p className="text-slate-500 leading-relaxed">{line.desc}</p>
              </AnimatedSection>

              <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                {line.items.map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 0.06}>
                    <div className="bg-slate-50 p-5 rounded-xl hover:bg-slate-100 transition-colors">
                      <h3 className="font-semibold flex items-center gap-2">
                        <i className={`${item.icon} ${line.color}`} />
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">合作流程</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">透明、高效的交付方式</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1} className="text-center">
                <div className="w-16 h-16 bg-lumina-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">{p.step}</div>
                <h3 className="font-bold mb-1">{p.title}</h3>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-lumina-600 font-semibold text-sm tracking-wider uppercase">灵活定价</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">选择适合你的方案</h2>
            <p className="text-slate-500 max-w-xl mx-auto">所有方案均包含免费需求沟通。在线支付 ¥500 定金即可锁定排期。</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 起步版 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-2">起步版</h3>
              <p className="text-slate-400 text-sm mb-4">适合小型项目与 MVP 验证</p>
              <div className="text-4xl font-extrabold mb-6">¥30K<span className="text-sm text-slate-400 font-normal"> 起</span></div>
              <ul className="space-y-3 text-sm text-slate-500 mb-8">
                <li><i className="fa-solid fa-check text-emerald-500 mr-2" />5 页企业官网</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2" />响应式设计</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2" />基础 SEO 优化</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2" />1 个月技术支撑</li>
              </ul>
              <PayButton
                planId="starter"
                label="¥500 锁定排期"
                className="block w-full text-center bg-white border border-lumina-600 text-lumina-600 py-2.5 rounded-lg font-semibold hover:bg-lumina-50 transition-colors"
              />
            </div>

            {/* 专业版 */}
            <div className="bg-lumina-600 text-white p-8 rounded-2xl relative scale-105 shadow-xl">
              <span className="absolute -top-3 -right-3 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">最受欢迎</span>
              <h3 className="text-xl font-bold mb-2">专业版</h3>
              <p className="text-lumina-200 text-sm mb-4">适合成长型企业</p>
              <div className="text-4xl font-extrabold mb-6">¥80K<span className="text-sm text-lumina-200 font-normal"> 起</span></div>
              <ul className="space-y-3 text-sm text-lumina-100 mb-8">
                <li><i className="fa-solid fa-check mr-2" />全功能 Web 应用</li>
                <li><i className="fa-solid fa-check mr-2" />CMS 后台管理系统</li>
                <li><i className="fa-solid fa-check mr-2" />支付 & 第三方集成</li>
                <li><i className="fa-solid fa-check mr-2" />3 个月技术支持</li>
                <li><i className="fa-solid fa-check mr-2" />CI/CD 自动化部署</li>
              </ul>
              <PayButton
                planId="pro"
                label="¥500 锁定排期"
                className="block w-full text-center bg-white text-lumina-600 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              />
            </div>

            {/* 企业版 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-2">企业版</h3>
              <p className="text-slate-400 text-sm mb-4">大型项目 & 长期合作</p>
              <div className="text-4xl font-extrabold mb-6">定制<span className="text-sm text-slate-400 font-normal">报价</span></div>
              <ul className="space-y-3 text-sm text-slate-500 mb-8">
                <li><i className="fa-solid fa-check text-emerald-500 mr-2" />定制化架构设计</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2" />专属项目经理</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2" />无限功能迭代</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2" />全年技术支撑</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2" />SLA 服务等级保障</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-white border border-lumina-600 text-lumina-600 py-2.5 rounded-lg font-semibold hover:bg-lumina-50 transition-colors"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">不确定哪个方案适合你？</h2>
            <p className="text-slate-500 mb-8">免费咨询，我们帮你分析。不推销，只给建议。</p>
            <Link href="/contact" className="inline-block bg-lumina-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-lumina-700 transition-colors shadow-lg shadow-lumina-200">预约免费咨询 →</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

const serviceLines = [
  {
    title: '网站开发', desc: '从简单的企业官网到复杂的电商平台，我们提供全栈 Web 开发服务。',
    bg: 'bg-lumina-50', color: 'text-lumina-600', icon: 'fa-solid fa-globe',
    items: [
      { icon: 'fa-solid fa-building', title: '企业官网', desc: 'HTML/Tailwind 纯静态站或 Next.js 动态站，响应式设计 + SEO 优化。Lighthouse 90+。' },
      { icon: 'fa-solid fa-cart-shopping', title: '电商 & 支付', desc: 'Stripe / 微信支付集成，产品管理后台，订单系统。支持独立站或小程序对接。' },
      { icon: 'fa-solid fa-newspaper', title: 'CMS 内容管理', desc: 'Headless CMS / WordPress 定制，让非技术人员也能轻松更新网站内容。' },
      { icon: 'fa-solid fa-mobile-screen', title: '小程序 & H5', desc: '微信小程序、支付宝小程序开发，与官网数据互通，一次维护多端同步。' },
    ],
  },
  {
    title: '企业管理系统', desc: '进销存、CRM、ERP、项目管理 — 基于 Supabase 定制开发，灵活可扩展。',
    bg: 'bg-emerald-50', color: 'text-emerald-600', icon: 'fa-solid fa-server',
    items: [
      { icon: 'fa-solid fa-boxes-stacked', title: '进销存系统', desc: '库存管理、采购入库、销售出库、报表分析。替代 Excel，数据实时同步。' },
      { icon: 'fa-solid fa-users', title: 'CRM 客户管理', desc: '客户档案、跟进记录、销售漏斗、合同管理。让客户关系不再靠记性。' },
      { icon: 'fa-solid fa-industry', title: 'ERP 集成', desc: '与现有财务/生产系统打通数据，定制化仪表盘，实时掌握经营状况。' },
      { icon: 'fa-solid fa-id-card', title: 'HR / OA 办公', desc: '考勤打卡、请假审批、员工档案、公告通知 — 企业内部管理工具。' },
    ],
  },
  {
    title: '云部署与运维', desc: '帮你把系统搬上云，并持续维护。我们不锁入客户 — 部署在你自己的账号上。',
    bg: 'bg-amber-50', color: 'text-amber-600', icon: 'fa-solid fa-cloud-arrow-up',
    items: [
      { icon: 'fa-solid fa-server', title: '服务器上云', desc: '阿里云 / Vercel / 自有服务器部署。域名 + SSL + CDN 全套配置。' },
      { icon: 'fa-solid fa-code-branch', title: 'CI/CD 自动化', desc: 'GitHub Actions / GitLab CI 自动构建和部署。代码推上去，自动上线。' },
      { icon: 'fa-solid fa-shield-halved', title: '安全 & 备份', desc: 'SSL 证书自动续签、数据库自动备份、防火墙配置、安全漏洞扫描。' },
      { icon: 'fa-solid fa-headset', title: '7×24 运维', desc: '服务器监控、异常告警、定期巡检。出现故障 30 分钟内响应。' },
    ],
  },
  {
    title: '数字化咨询', desc: '不知道该从哪下手？我们先帮你梳理清楚，再动手做。避免花冤枉钱。',
    bg: 'bg-purple-50', color: 'text-purple-600', icon: 'fa-solid fa-magnifying-glass-chart',
    items: [
      { icon: 'fa-solid fa-compass', title: '技术架构评估', desc: '现有系统体检：性能瓶颈、安全风险、扩展性问题。给你一份客观的技术报告。' },
      { icon: 'fa-solid fa-road', title: '数字化路线图', desc: '根据你的业务阶段和预算，制定 6-12 个月的技术升级路线图，分阶段落地。' },
      { icon: 'fa-solid fa-chalkboard-user', title: '技术培训', desc: '为你的团队提供技术培训：Git 工作流、数据库基础、运维常识，让你不完全依赖外部。' },
      { icon: 'fa-solid fa-file-shield', title: '安全审计', desc: 'Web 应用安全测试、权限审计、数据合规检查。让你的系统经得起考验。' },
    ],
  },
];

const process = [
  { step: '1', title: '需求沟通', desc: '30 分钟免费咨询，理清需求' },
  { step: '2', title: '方案 & 报价', desc: '3 个工作日出方案和报价单' },
  { step: '3', title: '开发交付', desc: '2 周一个迭代，每月汇报进度' },
  { step: '4', title: '持续运维', desc: '上线不是结束，长期运维保障' },
];
