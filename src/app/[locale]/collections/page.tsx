'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function CollectionsPage() {
  const t = useTranslations('collections');
  const locale = useLocale();

  const items = [
    { name: t('suits'), desc: t('suitsDesc'), img: '/images/suits.jpg' },
    { name: t('jackets'), desc: t('jacketsDesc'), img: '/images/jackets.jpg' },
    { name: t('trousers'), desc: t('trousersDesc'), img: '/images/trousers.jpg' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/collections-hero.jpg" alt="Collections Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 img-gradient-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">{t('title')}</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{t('subtitle')}</p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="group relative bg-onyx-50 rounded-2xl overflow-hidden hover-lift">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent z-10" />
                    <Image src="/images/collections-hero.jpg" alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <h3 className="text-2xl font-display font-bold text-white mb-3">{item.name}</h3>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">{item.desc}</p>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500/20 border border-onyx-100/30 text-gold-400 text-sm font-medium rounded-xl hover:bg-gold-500 hover:text-onyx-900 transition-all duration-300"
                    >
                      {t('viewCollection')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
