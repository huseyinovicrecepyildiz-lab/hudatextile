'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: MapPin, label: t('address'), value: t('addressValue') },
    { icon: Phone, label: '', value: t('phoneValue') },
    { icon: Mail, label: '', value: t('emailValue') },
    { icon: Clock, label: t('workingHours'), value: t('workingHoursValue') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/contact-hero.jpg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">{t('pageTitle')}</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{t('pageSubtitle')}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-navy-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">{t('formTitle')}</h2>

                  {status === 'success' && (
                    <div className="flex items-center gap-3 bg-green-50 text-green-700 rounded-xl p-4 mb-6">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{t('success')}</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-center gap-3 bg-red-50 text-red-700 rounded-xl p-4 mb-6">
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{t('error')}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder={t('name')}
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                      <input
                        type="email"
                        placeholder={t('email')}
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder={t('company')}
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                      <input
                        type="tel"
                        placeholder={t('phone')}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder={t('subject')}
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    />
                    <textarea
                      placeholder={t('message')}
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                    />
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-semibold rounded-xl hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {t('sending')}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {t('send')}
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={150}>
                <div className="bg-gradient-hero rounded-2xl p-8 h-full">
                  <h2 className="text-2xl font-display font-bold text-white mb-8">{t('infoTitle')}</h2>
                  <ul className="space-y-6">
                    {contactInfo.map((info, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-gold-400" />
                        </div>
                        <div>
                          {info.label && (
                            <div className="text-xs text-white/40 uppercase tracking-wider mb-1">{info.label}</div>
                          )}
                          <div className="text-white/80 text-sm leading-relaxed">{info.value}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
