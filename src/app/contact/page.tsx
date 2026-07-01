import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: '联系我们',
  description: '免费咨询、项目合作、技术支持 — 电话、邮箱、微信或在线表单，24 小时内回复。坐标洛阳洛龙区。',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-lumina-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">联系我们</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">有项目要做？或者只是想聊聊？我们都在。</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-2">发送消息</h2>
              <p className="text-slate-500 text-sm mb-8">填写表单，我们会在 24 小时内回复。或者直接打电话。</p>
              <ContactForm />
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection className="md:col-span-2" direction="right">
              <h2 className="text-2xl font-bold mb-2">直接联系</h2>
              <p className="text-slate-500 text-sm mb-8">也可以直接通过以下方式联系我们。</p>

              <div className="space-y-5">
                {contacts.map((c) => (
                  <div key={c.label} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <i className={`${c.icon} text-lumina-600`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{c.label}</h3>
                      <p className="text-slate-500 text-sm">{c.value}</p>
                      {c.note && <p className="text-slate-400 text-xs mt-0.5">{c.note}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Working Hours */}
              <div className="mt-6 p-5 bg-white border border-slate-200 rounded-xl">
                <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                  <i className="fa-solid fa-clock text-lumina-600" />
                  工作时间
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <div className="text-slate-500 text-xs mb-0.5">周一至周五</div>
                    <div className="font-semibold text-slate-700">9:00 – 18:00</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <div className="text-slate-500 text-xs mb-0.5">周六</div>
                    <div className="font-semibold text-slate-700">10:00 – 16:00</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg col-span-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-slate-500 text-xs mb-0.5">周日 & 节假日</div>
                        <div className="font-semibold text-slate-700">紧急需求请致电</div>
                      </div>
                      <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        <i className="fa-solid fa-bolt mr-1" />加急通道
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-6 border border-slate-200 text-center">
                <div className="text-4xl mb-3">
                  <i className="fa-solid fa-map-location-dot text-lumina-400" />
                </div>
                <h3 className="font-bold text-sm mb-1">洛阳市洛龙区 · 科创中心 12F</h3>
                <p className="text-slate-400 text-xs mb-3">开元大道 288 号</p>
                <a
                  href="https://uri.amap.com/marker?position=112.459,34.618&name=光澜科技"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white border border-slate-300 text-slate-700 text-sm px-4 py-2 rounded-lg hover:border-lumina-300 hover:text-lumina-600 transition-colors font-medium"
                >
                  <i className="fa-solid fa-location-arrow" /> 在高德地图中打开
                </a>
                <p className="text-slate-400 text-xs mt-3">
                  楼下有免费停车位 · 公交 12/25/60 路可达
                </p>
              </div>

              <div className="mt-8 bg-gradient-to-br from-lumina-50 to-amber-50 border border-lumina-100 p-6 rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <i className="fa-solid fa-mug-hot text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">免费咨询承诺</h3>
                    <ul className="text-slate-500 text-xs space-y-1.5 mt-2">
                      <li><i className="fa-solid fa-check text-emerald-500 mr-1.5" />30 分钟免费需求沟通</li>
                      <li><i className="fa-solid fa-check text-emerald-500 mr-1.5" />不收咨询费，不强行推销</li>
                      <li><i className="fa-solid fa-check text-emerald-500 mr-1.5" />如果合适，3 个工作日出方案</li>
                      <li><i className="fa-solid fa-check text-emerald-500 mr-1.5" />如果不合适，也会如实告诉你</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

const contacts = [
  { icon: 'fa-solid fa-phone', label: '电话', value: '400-888-9999', note: '工作日 9:00–18:00' },
  { icon: 'fa-solid fa-envelope', label: '邮箱', value: 'hello@lumina.tech' },
  { icon: 'fa-brands fa-weixin', label: '微信', value: 'LuminaTech2022', note: '添加请备注"咨询"' },
  { icon: 'fa-solid fa-location-dot', label: '地址', value: '河南省洛阳市洛龙区', note: '开元大道 288 号 · 科创中心 12F' },
];
