import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '隐私政策',
  description: '光澜科技隐私政策——我们如何收集、使用和保护你的个人信息。',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-lumina-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">隐私政策</h1>
          <p className="text-slate-500 max-w-xl mx-auto">最后更新日期：2026 年 6 月 1 日</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <h2>1. 我们收集哪些信息</h2>
          <p>当你通过本网站的联系表单提交咨询时，我们会收集你主动提供的信息：</p>
          <ul>
            <li><strong>联系信息</strong>：姓名、邮箱、电话、公司名称</li>
            <li><strong>业务信息</strong>：你感兴趣的服务类型、预算范围、需求描述</li>
          </ul>
          <p>当你订阅技术简报时，我们仅收集你的邮箱地址。</p>

          <h2>2. 信息如何使用</h2>
          <p>收集的信息仅用于以下目的：</p>
          <ul>
            <li>联系你以回复咨询、提供方案建议和报价</li>
            <li>发送你主动订阅的技术简报邮件</li>
            <li>改善我们的服务质量和客户体验</li>
          </ul>
          <p>我们<strong>不会</strong>将你的信息出售、出租或分享给第三方用于营销目的。</p>

          <h2>3. 数据存储与安全</h2>
          <p>你的信息存储在 Supabase（基于 AWS 基础设施）数据库中，并受到以下保护：</p>
          <ul>
            <li>全站 HTTPS 加密传输</li>
            <li>数据库行级安全策略（Row Level Security）</li>
            <li>只有经过认证的内部管理员可以查看提交的数据</li>
            <li>数据库每日自动备份</li>
          </ul>

          <h2>4. Cookie 使用</h2>
          <p>本网站仅使用必要的功能性 Cookie：</p>
          <ul>
            <li><strong>管理后台会话</strong>：用于管理员登录状态保持（仅对内部管理员生效）</li>
          </ul>
          <p>本网站<strong>不使用</strong>第三方追踪 Cookie、广告 Cookie 或分析 Cookie。</p>

          <h2>5. 第三方服务</h2>
          <p>为提供核心功能，我们使用了以下第三方服务（均符合各自的隐私和安全标准）：</p>
          <ul>
            <li><strong>Supabase</strong>：数据存储（隐私政策：supabase.com/privacy）</li>
            <li><strong>Resend</strong>：邮件发送服务（隐私政策：resend.com/legal/privacy-policy）</li>
            <li><strong>Stripe</strong>：支付处理（隐私政策：stripe.com/privacy）</li>
          </ul>

          <h2>6. 你的权利</h2>
          <p>根据《中华人民共和国个人信息保护法》，你有权：</p>
          <ul>
            <li><strong>查阅</strong>我们持有的你的个人信息</li>
            <li><strong>更正</strong>不准确的信息</li>
            <li><strong>删除</strong>你的个人信息（发送邮件至 hello@lumina.tech）</li>
            <li><strong>撤回</strong>订阅同意（点击简报中的取消订阅链接）</li>
          </ul>

          <h2>7. 联系我们</h2>
          <p>如果你对隐私政策有任何疑问，请通过以下方式联系我们：</p>
          <ul>
            <li>邮箱：hello@lumina.tech</li>
            <li>电话：400-888-9999</li>
            <li>地址：河南省洛阳市洛龙区开元大道 288 号科创中心 12F</li>
          </ul>
        </div>
      </section>
    </>
  );
}
