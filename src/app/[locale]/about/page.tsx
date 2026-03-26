'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Building2, Users, Factory, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
  const t = useTranslations('about');

  const facilityFeatures = [
    t('facilityFeature1'),
    t('facilityFeature2'),
    t('facilityFeature3'),
    t('facilityFeature4'),
  ];

  const teamFeatures = [
    t('teamFeature1'),
    t('teamFeature2'),
    t('teamFeature3'),
    t('teamFeature4'),
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hakkimizda-hero.jpg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 img-gradient-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">{t('pageTitle')}</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{t('pageSubtitle')}</p>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-onyx-900 mb-8">{t('historyTitle')}</h2>
            <div className="space-y-6 text-charcoal-600 leading-relaxed">
              <p>{t('historyP1')}</p>
              <p>{t('historyP2')}</p>
              <p>{t('historyP3')}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Facility & Team */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-48 w-full">
                  <Image src="/images/tesis.jpg" alt="Üretim Tesisi" fill className="object-cover" />
                </div>
                <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-onyx-900 flex items-center justify-center mb-6">
                  <Factory className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-onyx-900 mb-4">{t('facilityTitle')}</h3>
                <p className="text-charcoal-500 mb-6 leading-relaxed">{t('facilityDesc')}</p>
                <ul className="space-y-3">
                  {facilityFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-charcoal-600">
                      <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-48 w-full">
                  <Image src="/images/factory-sewing.png" alt="Uzman Kadromuz" fill className="object-cover" />
                </div>
                <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-onyx-900 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-onyx-900 mb-4">{t('teamTitle')}</h3>
                <p className="text-charcoal-500 mb-6 leading-relaxed">{t('teamDesc')}</p>
                <ul className="space-y-3">
                  {teamFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-charcoal-600">
                      <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
