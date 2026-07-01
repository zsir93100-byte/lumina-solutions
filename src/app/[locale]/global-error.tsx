'use client';

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <section className="pt-24 pb-16 min-h-screen flex items-center">
          <div className="max-w-xl mx-auto text-center px-4">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Something went wrong</h1>
            <p className="text-slate-500 mb-8">An unexpected error occurred. Please try refreshing the page.</p>
            <button onClick={() => reset()} className="bg-lumina-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lumina-700 transition-colors shadow-lg shadow-lumina-200">Refresh Page</button>
            <p className="text-slate-400 text-sm mt-6">If the problem persists, contact us at <a href="mailto:hello@lumina.tech" className="text-lumina-600 hover:underline">hello@lumina.tech</a>.</p>
          </div>
        </section>
      </body>
    </html>
  );
}
