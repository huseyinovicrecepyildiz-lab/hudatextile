'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Scissors, Settings, ShieldCheck, Package, BarChart3, Globe, Handshake, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function CorporatePage() {
  const t = useTranslations('corporate');

  const steps = [
    { icon: Scissors, title: t('productionStep1'), desc: t('productionStep1Desc') },
    { icon: Settings, title: t('productionStep2'), desc: t('productionStep2Desc') },
    { icon: ShieldCheck, title: t('productionStep3'), desc: t('productionStep3Desc') },
    { icon: Package, title: t('productionStep4'), desc: t('productionStep4Desc') },
  ];

  const wholesaleFeatures = [
    t('wholesaleFeature1'),
    t('wholesaleFeature2'),
    t('wholesaleFeature3'),
    t('wholesaleFeature4'),
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/corporate-hero.jpg" alt="Corporate Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 img-gradient-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">{t('pageTitle')}</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{t('pageSubtitle')}</p>
        </div>
      </section>

      {/* Production Lines */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-onyx-900 mb-4">{t('productionTitle')}</h2>
            <p className="text-charcoal-500 max-w-3xl mb-12">{t('productionDesc')}</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group bg-onyx-50 rounded-2xl overflow-hidden hover-lift h-full flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={
                        i === 0 ? '/images/factory-cutting.png' : 
                        i === 1 ? '/images/factory-sewing.png' : 
                        i === 2 ? '/images/quality-control.png' : 
                        '/images/suits-detail.png'
                      } 
                      alt={step.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 img-gradient-overlay" />
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-onyx-900 flex items-center justify-center mb-4">
                      <step.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div className="text-xs font-semibold text-gold-600 mb-2 uppercase tracking-wider">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-lg font-semibold text-onyx-900 mb-2">{step.title}</h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Export */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image src="/images/quality-control.png" alt="Cutting" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 img-gradient-overlay" />
                  </div>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-onyx-900 flex items-center justify-center mb-6">
                    <BarChart3 className="w-7 h-7 text-gold-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-onyx-900 mb-4">{t('qualityTitle')}</h3>
                  <p className="text-charcoal-500 leading-relaxed">{t('qualityDesc')}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                <div className="relative h-80 w-full mb-6 rounded-2xl overflow-hidden shadow-lg border border-onyx-100 group">
                  <Image src="/images/is-ortagi.jpg" alt="Export Logistics" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 img-gradient-overlay" />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-onyx-900 flex items-center justify-center mb-6">
                    <Globe className="w-7 h-7 text-gold-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-onyx-900 mb-4">{t('exportTitle')}</h3>
                  <p className="text-charcoal-500 leading-relaxed">{t('exportDesc')}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Wholesale */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="group relative glass-card rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <Image src="/images/factory-sewing.png" alt={t('wholesaleTitle')} fill className="object-cover" />
              </div>
              <div className="relative z-10 p-10">
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                  <Handshake className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{t('wholesaleTitle')}</h3>
                <p className="text-white/60 mb-8 leading-relaxed">{t('wholesaleDesc')}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {wholesaleFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
