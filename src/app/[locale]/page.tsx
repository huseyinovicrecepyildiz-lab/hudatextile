'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import {
  ArrowRight,
  Award,
  Globe,
  Factory,
  Sparkles,
  ChevronRight,
  Building2,
  Users,
  BarChart3,
  MapPin,
} from 'lucide-react';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const stats = [
    { icon: Building2, value: t('stats.areaValue'), label: t('stats.area') },
    { icon: Users, value: t('stats.employeesValue'), label: t('stats.employees') },
    { icon: BarChart3, value: t('stats.capacityValue'), label: t('stats.capacity') },
    { icon: MapPin, value: t('stats.exportsValue'), label: t('stats.exports') },
  ];

  const collections = [
    {
      key: 'suits',
      title: t('collections.suits'),
      desc: t('collections.suitsDesc'),
      gradient: 'from-navy-800 to-navy-900',
      accent: 'bg-gold-500',
    },
    {
      key: 'jackets',
      title: t('collections.jackets'),
      desc: t('collections.jacketsDesc'),
      gradient: 'from-charcoal-700 to-charcoal-900',
      accent: 'bg-gold-400',
    },
    {
      key: 'trousers',
      title: t('collections.trousers'),
      desc: t('collections.trousersDesc'),
      gradient: 'from-navy-700 to-navy-800',
      accent: 'bg-gold-500',
    },
  ];

  const whyUs = [
    { icon: Award, title: t('whyUs.quality'), desc: t('whyUs.qualityDesc') },
    { icon: Globe, title: t('whyUs.export'), desc: t('whyUs.exportDesc') },
    { icon: Factory, title: t('whyUs.capacity'), desc: t('whyUs.capacityDesc') },
    { icon: Sparkles, title: t('whyUs.customize'), desc: t('whyUs.customizeDesc') },
  ];

  return (
    <div className="page-enter">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          {/* Hero Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          />
          
          {/* Elegant Dark Overlay */}
          <div className="absolute inset-0 bg-navy-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-navy-900/60" />

          {/* Existing Gradient Patterns for additional depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,169,48,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(39,60,108,0.4),transparent_60%)]" />
          
          <div className="absolute top-20 right-20 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-32 left-10 w-96 h-96 bg-navy-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-gold-400 text-sm font-medium tracking-wide">
                {t('hero.badge')}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
              {t('hero.title')}{' '}
              <span className="text-gradient">{t('hero.titleHighlight')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animate-delay-200">
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <Link
                href={`/${locale}/collections`}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-semibold rounded-2xl hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-1"
              >
                {t('hero.cta1')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/15 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-sm"
              >
                {t('hero.cta2')}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animate-delay-500">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gold-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group bg-white rounded-2xl p-6 shadow-xl shadow-navy-900/5 hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-500 hover:-translate-y-1 border border-navy-100/50">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-500 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-navy-700 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-charcoal-500 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COLLECTIONS PREVIEW ===== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">
                {t('hero.badge')}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mt-3 mb-4">
                {t('collections.title')}
              </h2>
              <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">
                {t('collections.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {collections.map((col, i) => (
              <ScrollReveal key={col.key} delay={i * 150}>
                <Link
                  href={`/${locale}/collections`}
                  className="group relative block rounded-3xl overflow-hidden aspect-[3/4] hover-lift"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${col.gradient}`} />
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 40px)`,
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className={`w-10 h-1 ${col.accent} rounded-full mb-4 group-hover:w-16 transition-all duration-500`} />
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-2">
                      {col.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">
                      {col.desc}
                    </p>
                    <div className="flex items-center gap-2 text-gold-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      {t('collections.viewCollection')}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-navy-900">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/tesis.jpg')" }}
          />
          <div className="absolute inset-0 bg-navy-900/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-navy-900/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                {t('whyUs.title')}
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                {t('whyUs.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 border-t-white/20 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-all duration-500 shadow-lg shadow-black/20">
                    <item.icon className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/is-ortagi.jpg')" }}
          />
          <div className="absolute inset-0 bg-navy-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-navy-900/80" />
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-400/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 text-lg font-bold rounded-2xl hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-2xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:-translate-y-1"
            >
              {t('cta.button')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}