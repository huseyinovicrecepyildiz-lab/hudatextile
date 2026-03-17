'use client';

import { useState, FormEvent } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import ScrollReveal from '@/components/ScrollReveal';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: MapPin, label: t('address'), value: t('addressValue') },
    { icon: Phone, label: 'Telefon', value: t('phoneValue') },
    { icon: Mail, label: 'E-posta', value: t('emailValue') },
    { icon: Clock, label: t('workingHours'), value: t('workingHoursValue') },
  ];

  return (
    <div className="page-enter">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-navy-900/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-navy-900/70" />
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,169,48,0.1),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-gold-400 rounded-full shadow-[0_0_10px_rgba(212,169,48,0.8)]" />
            <span className="text-gold-400 text-sm font-medium tracking-wide">Hüda Tekstil</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 drop-shadow-lg">
            {t('pageTitle')}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto drop-shadow-md">
            {t('pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-8">
                  {t('formTitle')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal-700 mb-2">
                        {t('name')} *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-navy-100 bg-navy-50/30 text-navy-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                        placeholder={t('name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal-700 mb-2">
                        {t('email')} *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-navy-100 bg-navy-50/30 text-navy-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                        placeholder={t('email')}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-charcoal-700 mb-2">
                        {t('company')}
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        className="w-full px-4 py-3.5 rounded-xl border border-navy-100 bg-navy-50/30 text-navy-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                        placeholder={t('company')}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-charcoal-700 mb-2">
                        {t('phone')}
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        className="w-full px-4 py-3.5 rounded-xl border border-navy-100 bg-navy-50/30 text-navy-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                        placeholder={t('phone')}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-charcoal-700 mb-2">
                      {t('subject')} *
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-navy-100 bg-navy-50/30 text-navy-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                      placeholder={t('subject')}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal-700 mb-2">
                      {t('message')} *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-navy-100 bg-navy-50/30 text-navy-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all resize-none"
                      placeholder={t('message')}
                    />
                  </div>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{t('success')}</span>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{t('error')}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-semibold rounded-xl hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                        {t('sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('send')}
                      </>
                    )}
                  </button>
                </form>
              </ScrollReveal>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={200}>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-8">
                  {t('infoTitle')}
                </h2>
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-500 transition-all duration-300">
                        <info.icon className="w-5 h-5 text-navy-700 group-hover:text-navy-900 transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-navy-900 mb-1">{info.label}</div>
                        <div className="text-sm text-charcoal-500 leading-relaxed">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-xl border border-navy-50">
                  <iframe
                    title="Hüda Tekstil Location"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d187.8950980860001!2d28.867154973625926!3d41.1056676092164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sU%C4%9Fur%20Mumcu%20Mah.%20Atat%C3%BCrk%20Bulv.%20Mercansoy%20Plaza%20No%3A46%20!5e0!3m2!1str!2str!4v1773640398123!5m2!1str!2str"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
