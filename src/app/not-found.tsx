import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="max-w-xl mx-auto text-center px-4">
        <div className="text-8xl font-extrabold text-lumina-200 mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">页面未找到</h1>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          你访问的页面可能已被移除、链接拼写错误，或者暂时不可用。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-lumina-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lumina-700 transition-colors shadow-lg shadow-lumina-200"
          >
            <i className="fa-solid fa-house mr-2" />返回首页
          </Link>
          <Link
            href="/contact"
            className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-lumina-300 transition-colors"
          >
            <i className="fa-solid fa-envelope mr-2" />联系我们
          </Link>
        </div>
        <p className="text-slate-400 text-sm mt-10">
          或者试试以下常用页面：
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-3 text-sm">
          <Link href="/services" className="text-lumina-600 hover:underline">服务方案</Link>
          <span className="text-slate-300">·</span>
          <Link href="/projects" className="text-lumina-600 hover:underline">成功案例</Link>
          <span className="text-slate-300">·</span>
          <Link href="/blog" className="text-lumina-600 hover:underline">技术博客</Link>
          <span className="text-slate-300">·</span>
          <Link href="/about" className="text-lumina-600 hover:underline">关于我们</Link>
        </div>
      </div>
    </section>
  );
}
