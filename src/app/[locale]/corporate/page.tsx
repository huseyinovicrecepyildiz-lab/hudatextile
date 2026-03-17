'use client';

import { useTranslations, useLocale } from 'next-intl';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Scissors,
  Shirt,
  CheckCircle2,
  Package,
  Shield,
  Globe,
  Handshake,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

export default function CorporatePage() {
  const t = useTranslations('corporate');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const steps = [
    { icon: Scissors, title: t('productionStep1'), desc: t('productionStep1Desc'), num: '01' },
    { icon: Shirt, title: t('productionStep2'), desc: t('productionStep2Desc'), num: '02' },
    { icon: CheckCircle2, title: t('productionStep3'), desc: t('productionStep3Desc'), num: '03' },
    { icon: Package, title: t('productionStep4'), desc: t('productionStep4Desc'), num: '04' },
  ];

  const wholesaleFeatures = [
    t('wholesaleFeature1'),
    t('wholesaleFeature2'),
    t('wholesaleFeature3'),
    t('wholesaleFeature4'),
  ];

  return (
    <div className="page-enter">
      {/* Hero Banner */}
      <section className="relative bg-gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,169,48,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-gold-400 rounded-full" />
            <span className="text-gold-400 text-sm font-medium tracking-wide">Hüda Tekstil</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            {t('pageTitle')}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t('pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Production Lines */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">
                Hüda Tekstil
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mt-3 mb-4">
                {t('productionTitle')}
              </h2>
              <p className="text-charcoal-500 text-lg max-w-3xl mx-auto">
                {t('productionDesc')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-navy-900/5 hover:shadow-xl border border-navy-50 transition-all duration-500 hover:-translate-y-2 h-full">
                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-5xl font-display font-bold text-navy-50 group-hover:text-gold-100 transition-colors">
                    {step.num}
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center mb-6 group-hover:from-gold-500 group-hover:to-gold-400 transition-all duration-500 shadow-lg">
                      <step.icon className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-navy-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-charcoal-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {/* Connecting line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                      <ChevronRight className="w-5 h-5 text-navy-200" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Export */}
      <section className="py-20 lg:py-28 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-navy-50 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-navy-900 mb-4">
                  {t('qualityTitle')}
                </h3>
                <p className="text-charcoal-500 leading-relaxed">
                  {t('qualityDesc')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-navy-50 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center mb-6 shadow-lg">
                  <Globe className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-navy-900 mb-4">
                  {t('exportTitle')}
                </h3>
                <p className="text-charcoal-500 leading-relaxed">
                  {t('exportDesc')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Wholesale Principles */}
      <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,169,48,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Handshake className="w-8 h-8 text-gold-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                  {t('wholesaleTitle')}
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  {t('wholesaleDesc')}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-semibold rounded-2xl hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-xl shadow-gold-500/20"
                >
                  {tNav('requestQuote')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-4">
                {wholesaleFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-gold-400" />
                    </div>
                    <span className="text-white/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
