'use client';

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="zh-CN">
      <body className="bg-white">
        <section className="pt-24 pb-16 min-h-screen flex items-center">
          <div className="max-w-xl mx-auto text-center px-4">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">出了点问题</h1>
            <p className="text-slate-500 mb-8">
              页面加载遇到了一个意外错误。请刷新页面重试。
            </p>
            <button
              onClick={() => reset()}
              className="bg-lumina-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lumina-700 transition-colors shadow-lg shadow-lumina-200"
            >
              刷新页面
            </button>
            <p className="text-slate-400 text-sm mt-6">
              如果问题持续，请通过{' '}
              <a href="mailto:hello@lumina.tech" className="text-lumina-600 hover:underline">
                hello@lumina.tech
              </a>{' '}
              联系我们。
            </p>
          </div>
        </section>
      </body>
    </html>
  );
}
