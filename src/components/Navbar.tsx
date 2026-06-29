'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/about', label: '关于我们' },
  { href: '/services', label: '服务方案' },
  { href: '/projects', label: '成功案例' },
  { href: '/blog', label: '博客' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-shadow ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-bold text-lumina-700"
          >
            <div className="w-8 h-8 bg-lumina-600 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-sun text-white text-sm" />
            </div>
            <span>光澜科技</span>
            <span className="hidden sm:inline text-xs text-slate-400 font-normal tracking-wider">
              LUMINA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive(link.href)
                    ? 'text-lumina-600 font-semibold'
                    : 'text-slate-600 hover:text-lumina-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-lumina-600 text-white px-4 py-2.5 rounded-lg hover:bg-lumina-700 transition-colors shadow-md shadow-lumina-200"
            >
              免费咨询
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-600 text-xl"
            aria-label="菜单"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden pb-4 space-y-1 ${menuOpen ? '' : 'hidden'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2.5 ${
                isActive(link.href)
                  ? 'text-lumina-600 font-semibold'
                  : 'text-slate-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block py-2.5 text-lumina-600 font-semibold"
          >
            免费咨询
          </Link>
        </div>
      </div>
    </nav>
  );
}
