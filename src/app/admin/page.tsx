'use client';

import { useState, useEffect } from 'react';
import {
  LogOut,
  Save,
  Lock,
  User,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle,
  AlertCircle,
  FileText,
  Globe,
  Home,
  Building2,
  Shirt,
  Phone,
} from 'lucide-react';

type Tab = 'hero' | 'about' | 'corporate' | 'collections' | 'contact';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<Tab>('hero');
  const [content, setContent] = useState<any>({});
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Check session on load
  useEffect(() => {
    fetch('/api/admin/content')
      .then((res) => {
        if (res.ok) {
          setIsLoggedIn(true);
          return res.json();
        }
        throw new Error('Not authenticated');
      })
      .then((data) => setContent(data))
      .catch(() => setIsLoggedIn(false));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        setIsLoggedIn(true);
        const contentRes = await fetch('/api/admin/content');
        if (contentRes.ok) {
          setContent(await contentRes.json());
        }
      } else {
        setLoginError('Kullanıcı adı veya şifre hatalı');
      }
    } catch {
      setLoginError('Bağlantı hatası');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleSave = async () => {
    setSaveStatus('saving');
    try {
      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...content, lastUpdated: new Date().toISOString() }),
      });

      if (res.ok) {
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus('idle'), 3000);
      } else {
        setSaveStatus('error');
      }
    } catch {
      setSaveStatus('error');
    }
  };

  const updateField = (section: string, key: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      [section]: {
        ...(prev[section] || {}),
        [key]: value,
      },
    }));
  };

  const tabs: { key: Tab; label: string; icon: any }[] = [
    { key: 'hero', label: 'Ana Sayfa', icon: Home },
    { key: 'about', label: 'Hakkımızda', icon: Building2 },
    { key: 'corporate', label: 'Kurumsal', icon: FileText },
    { key: 'collections', label: 'Koleksiyonlar', icon: Shirt },
    { key: 'contact', label: 'İletişim', icon: Phone },
  ];

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-4 shadow-lg shadow-gold-500/25">
              <span className="text-navy-900 font-display font-bold text-2xl">H</span>
            </div>
            <h1 className="text-2xl font-display font-bold text-white">Admin Panel</h1>
            <p className="text-white/50 text-sm mt-1">Hüda Tekstil İçerik Yönetimi</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Kullanıcı Adı</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                  placeholder="admin"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Şifre</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                <AlertCircle className="w-4 h-4" />
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-semibold rounded-xl hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Lock className="w-4 h-4" />}
              {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-navy-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-navy-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <span className="text-navy-900 font-display font-bold text-sm">H</span>
            </div>
            <div>
              <span className="font-display font-bold text-navy-900">Admin Panel</span>
              <span className="text-charcoal-400 text-xs block -mt-0.5">İçerik Yönetimi</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 text-sm font-semibold rounded-xl hover:from-gold-400 hover:to-gold-300 transition-all shadow-sm disabled:opacity-60"
            >
              {saveStatus === 'saving' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : saveStatus === 'saved' ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {saveStatus === 'saving' ? 'Kaydediliyor...' : saveStatus === 'saved' ? 'Kaydedildi!' : 'Kaydet'}
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-charcoal-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
            >
              <LogOut className="w-4 h-4" />
              Çıkış
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <nav className="lg:w-56 flex-shrink-0">
            <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.key
                      ? 'bg-navy-900 text-white shadow-lg shadow-navy-900/20'
                      : 'text-charcoal-600 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <tab.icon className="w-4 h-4 flex-shrink-0" />
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Content Area */}
          <div className="flex-1 bg-white rounded-2xl border border-navy-100 shadow-sm p-6 lg:p-8">
            <h2 className="text-xl font-display font-bold text-navy-900 mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-gold-500" />
              {tabs.find((t) => t.key === activeTab)?.label} İçeriği
            </h2>

            <div className="space-y-6">
              {activeTab === 'hero' && (
                <>
                  <Field label="Başlık" value={content?.hero?.title || ''} onChange={(v) => updateField('hero', 'title', v)} />
                  <Field label="Vurgulu Başlık" value={content?.hero?.titleHighlight || ''} onChange={(v) => updateField('hero', 'titleHighlight', v)} />
                  <Field label="Alt Başlık" value={content?.hero?.subtitle || ''} onChange={(v) => updateField('hero', 'subtitle', v)} multiline />
                  <Field label="CTA Buton 1" value={content?.hero?.cta1 || ''} onChange={(v) => updateField('hero', 'cta1', v)} />
                  <Field label="CTA Buton 2" value={content?.hero?.cta2 || ''} onChange={(v) => updateField('hero', 'cta2', v)} />
                </>
              )}

              {activeTab === 'about' && (
                <>
                  <Field label="Sayfa Başlığı" value={content?.about?.pageTitle || ''} onChange={(v) => updateField('about', 'pageTitle', v)} />
                  <Field label="Sayfa Alt Başlığı" value={content?.about?.pageSubtitle || ''} onChange={(v) => updateField('about', 'pageSubtitle', v)} multiline />
                  <Field label="Tarihçe Paragraf 1" value={content?.about?.historyP1 || ''} onChange={(v) => updateField('about', 'historyP1', v)} multiline />
                  <Field label="Tarihçe Paragraf 2" value={content?.about?.historyP2 || ''} onChange={(v) => updateField('about', 'historyP2', v)} multiline />
                  <Field label="Tarihçe Paragraf 3" value={content?.about?.historyP3 || ''} onChange={(v) => updateField('about', 'historyP3', v)} multiline />
                </>
              )}

              {activeTab === 'corporate' && (
                <>
                  <Field label="Sayfa Başlığı" value={content?.corporate?.pageTitle || ''} onChange={(v) => updateField('corporate', 'pageTitle', v)} />
                  <Field label="Üretim Açıklama" value={content?.corporate?.productionDesc || ''} onChange={(v) => updateField('corporate', 'productionDesc', v)} multiline />
                  <Field label="Kalite Kontrol" value={content?.corporate?.qualityDesc || ''} onChange={(v) => updateField('corporate', 'qualityDesc', v)} multiline />
                  <Field label="İhracat Açıklama" value={content?.corporate?.exportDesc || ''} onChange={(v) => updateField('corporate', 'exportDesc', v)} multiline />
                  <Field label="Çalışma Prensipleri" value={content?.corporate?.wholesaleDesc || ''} onChange={(v) => updateField('corporate', 'wholesaleDesc', v)} multiline />
                </>
              )}

              {activeTab === 'collections' && (
                <>
                  <Field label="Koleksiyon Başlığı" value={content?.collections?.title || ''} onChange={(v) => updateField('collections', 'title', v)} />
                  <Field label="Koleksiyon Alt Başlığı" value={content?.collections?.subtitle || ''} onChange={(v) => updateField('collections', 'subtitle', v)} multiline />
                  <Field label="Takım Elbise Açıklama" value={content?.collections?.suitsDesc || ''} onChange={(v) => updateField('collections', 'suitsDesc', v)} multiline />
                  <Field label="Ceket Açıklama" value={content?.collections?.jacketsDesc || ''} onChange={(v) => updateField('collections', 'jacketsDesc', v)} multiline />
                  <Field label="Pantolon Açıklama" value={content?.collections?.trousersDesc || ''} onChange={(v) => updateField('collections', 'trousersDesc', v)} multiline />
                </>
              )}

              {activeTab === 'contact' && (
                <>
                  <Field label="Adres" value={content?.contact?.addressValue || ''} onChange={(v) => updateField('contact', 'addressValue', v)} />
                  <Field label="Telefon" value={content?.contact?.phoneValue || ''} onChange={(v) => updateField('contact', 'phoneValue', v)} />
                  <Field label="E-posta" value={content?.contact?.emailValue || ''} onChange={(v) => updateField('contact', 'emailValue', v)} />
                  <Field label="Çalışma Saatleri" value={content?.contact?.workingHoursValue || ''} onChange={(v) => updateField('contact', 'workingHoursValue', v)} />
                </>
              )}
            </div>

            {saveStatus === 'error' && (
              <div className="mt-6 flex items-center gap-2 text-red-600 text-sm p-4 bg-red-50 rounded-xl border border-red-200">
                <AlertCircle className="w-4 h-4" />
                Kaydetme hatası. Lütfen tekrar deneyin.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Field component
function Field({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  multiline?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-charcoal-700 mb-2">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-navy-100 bg-navy-50/30 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all resize-none text-sm"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-navy-100 bg-navy-50/30 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all text-sm"
        />
      )}
    </div>
  );
}
