'use client';

import { useTranslations, useLocale } from 'next-intl';
import ScrollReveal from '@/components/ScrollReveal';
import { Building2, Users, CheckCircle, Leaf, Cog, Shield, Clock, Award } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();

  const facilityFeatures = [
    { icon: Cog, text: t('facilityFeature1') },
    { icon: Shield, text: t('facilityFeature2') },
    { icon: Leaf, text: t('facilityFeature3') },
    { icon: Building2, text: t('facilityFeature4') },
  ];

  const teamFeatures = [
    { icon: Award, text: t('teamFeature1') },
    { icon: Users, text: t('teamFeature2') },
    { icon: CheckCircle, text: t('teamFeature3') },
    { icon: Clock, text: t('teamFeature4') },
  ];

  return (
    <div className="page-enter">
      {/* Hero Banner */}
      <section className="relative bg-gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,169,48,0.06),transparent_60%)]" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
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

      {/* History */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">
                  Hüda Tekstil
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mt-3 mb-8">
                  {t('historyTitle')}
                </h2>
                <div className="space-y-4 text-charcoal-600 leading-relaxed">
                  <p>{t('historyP1')}</p>
                  <p>{t('historyP2')}</p>
                  <p>{t('historyP3')}</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div 
                  className="aspect-[4/3] rounded-3xl bg-cover bg-center overflow-hidden shadow-2xl relative"
                  style={{ backgroundImage: "url('/images/tesis.jpg')" }}
                >
                  <div className="absolute inset-0 bg-navy-900/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center relative z-10">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-4 shadow-lg">
                        <Building2 className="w-10 h-10 text-navy-900" />
                      </div>
                      <p className="text-white font-display font-bold text-3xl drop-shadow-lg">5.000 m²</p>
                      <p className="text-white/80 text-sm mt-1 drop-shadow-md">{t('facilityTitle')}</p>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-navy-50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center">
                      <Users className="w-6 h-6 text-navy-900" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-navy-900">300+</div>
                      <div className="text-xs text-charcoal-500">{t('teamTitle')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-20 lg:py-28 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-4">
                {t('facilityTitle')}
              </h2>
              <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">
                {t('facilityDesc')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityFeatures.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group bg-white rounded-2xl p-6 shadow-lg shadow-navy-900/5 hover:shadow-xl border border-navy-50 transition-all duration-500 hover:-translate-y-1 text-center h-full">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-500 transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-navy-700 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <p className="text-sm text-charcoal-600 font-medium">{feature.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-4">
                {t('teamTitle')}
              </h2>
              <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">
                {t('teamDesc')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamFeatures.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-6 shadow-lg transition-all duration-500 hover:-translate-y-1 text-center h-full">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-500 transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <p className="text-sm text-white/70 font-medium">{feature.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
