'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLocale = () => {
    const newLocale = locale === 'tr' ? 'en' : 'tr';
    const pathWithoutLocale = pathname.replace(/^\/(tr|en)/, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/corporate`, label: t('corporate') },
    { href: `/${locale}/collections`, label: t('collections') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-xl shadow-2xl shadow-navy-950/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/25 group-hover:shadow-gold-500/40 transition-shadow duration-300">
                <span className="text-navy-900 font-display font-bold text-lg">H</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-white tracking-wide leading-tight">
                HÜDA
              </span>
              <span className="text-[10px] font-medium tracking-[0.35em] text-gold-400 uppercase leading-tight">
                Tekstil
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(link.href)
                    ? 'text-gold-400'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full transition-all duration-300 ${
                    isActive(link.href) ? 'w-6' : 'w-0 group-hover:w-6'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={switchLocale}
              className="flex items-center gap-2 px-3 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              <span>{t('language')}</span>
            </button>
            <Link
              href={`/${locale}/contact`}
              className="px-5 py-2.5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 text-sm font-semibold rounded-xl hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5"
            >
              {t('requestQuote')}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-navy-900/98 backdrop-blur-xl transition-all duration-500 ${
          isMobileOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        style={{ zIndex: 60 }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-5">
            <Link href={`/${locale}`} className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-navy-900 font-display font-bold text-lg">H</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white tracking-wide leading-tight">HÜDA</span>
                <span className="text-[10px] font-medium tracking-[0.35em] text-gold-400 uppercase leading-tight">Tekstil</span>
              </div>
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 text-white hover:text-gold-400 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`text-2xl font-display font-semibold py-3 border-b border-white/5 transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-gold-400'
                    : 'text-white/70 hover:text-white hover:pl-2'
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Bottom */}
          <div className="px-8 pb-10 space-y-4">
            <button
              onClick={() => { switchLocale(); setIsMobileOpen(false); }}
              className="flex items-center gap-3 w-full px-4 py-3 text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-all"
            >
              <Globe className="w-5 h-5" />
              <span className="text-base">{t('language')}</span>
            </button>
            <Link
              href={`/${locale}/contact`}
              onClick={() => setIsMobileOpen(false)}
              className="block text-center px-6 py-3.5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-semibold rounded-xl shadow-lg"
            >
              {t('requestQuote')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
