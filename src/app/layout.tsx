// Root layout — passes through to [locale] layouts
// Actual HTML shell and providers are in [locale]/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
