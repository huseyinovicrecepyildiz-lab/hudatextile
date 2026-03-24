'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const locale = useLocale();
    const t = useTranslations();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Sayfa aşağı kaydığında menünün arka planını koyulaştıran efekt
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                    ? 'bg-onyx-950/90 backdrop-blur-md border-white/10 py-4 shadow-lg'
                    : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Sol Taraf: Logo */}
                    <Link href={`/${locale}`} className="group relative z-10">
                        <span className="text-2xl font-display font-bold tracking-wider text-gold-400 group-hover:text-gold-300 transition-colors">
                            HUDA<span className="text-white">TEXTILE</span>
                        </span>
                    </Link>

                    {/* Orta Kısım: Masaüstü Linkleri */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href={`/${locale}`} className="text-sm font-medium text-white/80 hover:text-gold-400 transition-colors uppercase tracking-widest">
                            Anasayfa
                        </Link>
                        <Link href={`/${locale}/about`} className="text-sm font-medium text-white/80 hover:text-gold-400 transition-colors uppercase tracking-widest">
                            Hakkımızda
                        </Link>
                        <Link href={`/${locale}/collections`} className="text-sm font-medium text-white/80 hover:text-gold-400 transition-colors uppercase tracking-widest">
                            Koleksiyonlar
                        </Link>
                        <Link href={`/${locale}/contact`} className="text-sm font-medium text-white/80 hover:text-gold-400 transition-colors uppercase tracking-widest">
                            İletişim
                        </Link>
                    </nav>

                    {/* Sağ Taraf: Teklif Al Butonu */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href={`/${locale}/contact`}
                            className="px-6 py-2.5 bg-gold-500 text-onyx-900 text-xs font-bold rounded-full hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 uppercase tracking-widest"
                        >
                            Teklif Al
                        </Link>
                    </div>

                    {/* Mobil Menü Butonu */}
                    <button
                        className="md:hidden text-white p-2 relative z-10"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobil Açılır Menü (Telefonda görünür) */}
            {isMobileMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-onyx-950 flex flex-col items-center justify-center gap-8 md:hidden">
                    <Link onClick={() => setIsMobileMenuOpen(false)} href={`/${locale}`} className="text-2xl text-white hover:text-gold-400">Anasayfa</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} href={`/${locale}/about`} className="text-2xl text-white hover:text-gold-400">Hakkımızda</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} href={`/${locale}/collections`} className="text-2xl text-white hover:text-gold-400">Koleksiyonlar</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} href={`/${locale}/contact`} className="text-2xl text-white hover:text-gold-400">İletişim</Link>
                </div>
            )}
        </header>
    );
}
