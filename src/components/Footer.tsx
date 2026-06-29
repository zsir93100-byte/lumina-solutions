import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold text-lumina-700 mb-3">
              <div className="w-7 h-7 bg-lumina-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-sun text-white text-xs" />
              </div>
              <span>光澜科技</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Lumina Solutions — 洛阳本地中小企业数字化升级的最佳伙伴。我们不写花哨的方案，只交付真实可用的系统。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-700">服务</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><Link href="/services" className="hover:text-lumina-600 transition-colors">网站开发</Link></li>
              <li><Link href="/services" className="hover:text-lumina-600 transition-colors">管理系统</Link></li>
              <li><Link href="/services" className="hover:text-lumina-600 transition-colors">云部署运维</Link></li>
              <li><Link href="/services" className="hover:text-lumina-600 transition-colors">数字化咨询</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-700">公司</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><Link href="/about" className="hover:text-lumina-600 transition-colors">关于我们</Link></li>
              <li><Link href="/projects" className="hover:text-lumina-600 transition-colors">成功案例</Link></li>
              <li><Link href="/blog" className="hover:text-lumina-600 transition-colors">博客</Link></li>
              <li><Link href="/contact" className="hover:text-lumina-600 transition-colors">联系我们</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-700">联系方式</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><i className="fa-solid fa-phone text-lumina-400 mr-2" />400-888-9999</li>
              <li><i className="fa-solid fa-envelope text-lumina-400 mr-2" />hello@lumina.tech</li>
              <li><i className="fa-solid fa-location-dot text-lumina-400 mr-2" />洛阳 · 洛龙区</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-slate-400">
          <span>&copy; 2022–2026 光澜科技 Lumina Solutions. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-lumina-600 transition-colors"><i className="fa-brands fa-weixin" /></a>
            <a href="#" className="hover:text-lumina-600 transition-colors"><i className="fa-brands fa-github" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
