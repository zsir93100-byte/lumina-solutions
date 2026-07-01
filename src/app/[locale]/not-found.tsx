import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="max-w-xl mx-auto text-center px-4">
        <div className="text-8xl font-extrabold text-lumina-200 mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">Page Not Found / 页面未找到</h1>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          The page you're looking for may have been removed, the link may be misspelled, or it's temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="bg-lumina-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lumina-700 transition-colors shadow-lg shadow-lumina-200">
            <i className="fa-solid fa-house mr-2" />Back to Home
          </Link>
          <Link href="/contact" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-lumina-300 transition-colors">
            <i className="fa-solid fa-envelope mr-2" />Contact Us
          </Link>
        </div>
        <p className="text-slate-400 text-sm mt-10">Or try these popular pages:</p>
        <div className="flex flex-wrap justify-center gap-3 mt-3 text-sm">
          <Link href="/services" className="text-lumina-600 hover:underline">Services</Link>
          <span className="text-slate-300">·</span>
          <Link href="/projects" className="text-lumina-600 hover:underline">Case Studies</Link>
          <span className="text-slate-300">·</span>
          <Link href="/blog" className="text-lumina-600 hover:underline">Blog</Link>
          <span className="text-slate-300">·</span>
          <Link href="/about" className="text-lumina-600 hover:underline">About</Link>
        </div>
      </div>
    </section>
  );
}
