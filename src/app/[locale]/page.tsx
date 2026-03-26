'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Globe, Zap, Palette, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const stats = [
    { label: t('stats.area'), value: t('stats.areaValue'), img: '/images/tesis.jpg' },
    { label: t('stats.employees'), value: t('stats.employeesValue'), img: '/images/factory-sewing.png' },
    { label: t('stats.capacity'), value: t('stats.capacityValue'), img: '/images/factory-cutting.png' },
    { label: t('stats.exports'), value: t('stats.exportsValue'), img: '/images/is-ortagi.jpg' },
  ];

  const collections = [
    { name: t('collections.suits'), desc: t('collections.suitsDesc'), img: '/images/suits-detail.png' },
    { name: t('collections.jackets'), desc: t('collections.jacketsDesc'), img: '/images/collections-hero.jpg' },
    { name: t('collections.trousers'), desc: t('collections.trousersDesc'), img: '/images/hero-bg.svg' },
  ];

  const reasons = [
    { icon: Award, title: t('whyUs.quality'), desc: t('whyUs.qualityDesc') },
    { icon: Globe, title: t('whyUs.export'), desc: t('whyUs.exportDesc') },
    { icon: Zap, title: t('whyUs.capacity'), desc: t('whyUs.capacityDesc') },
    { icon: Palette, title: t('whyUs.customize'), desc: t('whyUs.customizeDesc') },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.svg" alt="Hüda Tekstil" fill className="object-cover" priority />
          <div className="absolute inset-0 img-gradient-overlay" />
        </div>
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-onyx-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-gold-400 text-sm font-medium">{t('hero.badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 animate-fade-in-up">
              {t('hero.title')}{' '}
              <span className="text-gradient">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animate-delay-200">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
              <Link
                href={`/${locale}/collections`}
                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-onyx-900 font-semibold rounded-xl hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 flex items-center gap-2"
              >
                {t('hero.cta1')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
              >
                {t('hero.cta2')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group relative glass-dark rounded-2xl p-6 text-center hover-lift overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Image src={stat.img} alt={stat.label} fill className="object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="text-3xl font-display font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-xs text-white/60 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-onyx-900 mb-4">
                {t('collections.title')}
              </h2>
              <p className="text-charcoal-500 max-w-2xl mx-auto">{t('collections.subtitle')}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((col, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
                  <div className="aspect-[4/5] bg-onyx-100 relative overflow-hidden">
                    <div className="absolute inset-0 img-gradient-overlay z-10" />
                    <Image src={col.img} alt={col.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-display font-bold text-white mb-2">{col.name}</h3>
                    <p className="text-white/60 text-sm mb-4">{col.desc}</p>
                    <Link
                      href={`/${locale}/collections`}
                      className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-3 transition-all"
                    >
                      {t('collections.viewCollection')}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                {t('whyUs.title')}
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">{t('whyUs.subtitle')}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group glass-card rounded-2xl overflow-hidden hover-lift h-full flex flex-col">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={
                        i === 0 ? '/images/quality-control.png' :
                          i === 1 ? '/images/is-ortagi.jpg' :
                            i === 2 ? '/images/factory-sewing.png' :
                              '/images/factory-cutting.png'
                      }
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 img-gradient-overlay" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gold-500/20 backdrop-blur-md flex items-center justify-center border border-gold-500/20">
                      <r.icon className="w-6 h-6 text-gold-400" />
                    </div>
                  </div>
                  <div className="p-6 pt-5">
                    <h3 className="text-lg font-semibold text-white mb-2">{r.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/is-ortagi.jpg" alt="Business Partner" fill className="object-cover" />
          <div className="absolute inset-0 img-gradient-overlay" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">{t('cta.subtitle')}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-onyx-900 font-semibold rounded-xl hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5"
            >
              {t('cta.button')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
