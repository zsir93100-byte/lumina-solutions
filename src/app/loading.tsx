/**
 * Root loading skeleton — shown during page transitions
 * when a route segment hasn't finished loading.
 */
export default function Loading() {
  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-lumina-200 border-t-lumina-600 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-400 text-sm">加载中…</p>
      </div>
    </div>
  );
}
