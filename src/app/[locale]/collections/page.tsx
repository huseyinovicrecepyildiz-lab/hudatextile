'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import ScrollReveal from '@/components/ScrollReveal';
import { Filter, Eye, X } from 'lucide-react';

type Category = 'all' | 'suits' | 'jackets' | 'trousers';

interface Product {
  id: number;
  category: Category;
  gradient: string;
  pattern: string;
}

export default function CollectionsPage() {
  const t = useTranslations('collections');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: t('all') },
    { key: 'suits', label: t('suits') },
    { key: 'jackets', label: t('jackets') },
    { key: 'trousers', label: t('trousers') },
  ];

  const products: Product[] = [
    { id: 1, category: 'suits', gradient: 'from-navy-800 via-navy-700 to-navy-900', pattern: '45deg' },
    { id: 2, category: 'suits', gradient: 'from-charcoal-800 via-charcoal-700 to-charcoal-900', pattern: '135deg' },
    { id: 3, category: 'suits', gradient: 'from-navy-900 via-navy-800 to-charcoal-900', pattern: '90deg' },
    { id: 4, category: 'jackets', gradient: 'from-navy-700 via-charcoal-700 to-navy-800', pattern: '60deg' },
    { id: 5, category: 'jackets', gradient: 'from-charcoal-700 via-charcoal-600 to-charcoal-800', pattern: '120deg' },
    { id: 6, category: 'jackets', gradient: 'from-navy-800 via-navy-600 to-navy-900', pattern: '30deg' },
    { id: 7, category: 'trousers', gradient: 'from-charcoal-900 via-charcoal-800 to-navy-900', pattern: '150deg' },
    { id: 8, category: 'trousers', gradient: 'from-navy-700 via-navy-800 to-charcoal-800', pattern: '75deg' },
    { id: 9, category: 'trousers', gradient: 'from-charcoal-800 via-navy-800 to-charcoal-900', pattern: '105deg' },
  ];

  const filtered = activeFilter === 'all' ? products : products.filter((p) => p.category === activeFilter);

  const getCategoryName = (cat: Category) => {
    switch (cat) {
      case 'suits': return t('suits');
      case 'jackets': return t('jackets');
      case 'trousers': return t('trousers');
      default: return '';
    }
  };

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
            {t('title')}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
              <Filter className="w-5 h-5 text-charcoal-400 mr-2" />
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeFilter === cat.key
                      ? 'bg-gradient-to-r from-navy-800 to-navy-900 text-white shadow-lg shadow-navy-900/20'
                      : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 80}>
                <div
                  className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer hover-lift"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
                  
                  {/* Fabric pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `repeating-linear-gradient(${product.pattern}, transparent, transparent 8px, rgba(255,255,255,0.04) 8px, rgba(255,255,255,0.04) 16px)`,
                      }}
                    />
                  </div>

                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                      <Eye className="w-8 h-8 text-white/80" />
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-gold-400 text-xs font-semibold uppercase tracking-wider">
                      {getCategoryName(product.category)}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mt-1">
                      {getCategoryName(product.category)} #{product.id}
                    </h3>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 font-medium border border-white/10">
                      {getCategoryName(product.category)}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image area */}
            <div className={`aspect-[4/3] bg-gradient-to-br ${selectedProduct.gradient} relative`}>
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `repeating-linear-gradient(${selectedProduct.pattern}, transparent, transparent 8px, rgba(255,255,255,0.04) 8px, rgba(255,255,255,0.04) 16px)`,
                  }}
                />
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            {/* Info */}
            <div className="p-8">
              <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider">
                {getCategoryName(selectedProduct.category)}
              </span>
              <h3 className="text-2xl font-display font-bold text-navy-900 mt-2 mb-3">
                {getCategoryName(selectedProduct.category)} #{selectedProduct.id}
              </h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">
                {selectedProduct.category === 'suits' && t('suitsDesc')}
                {selectedProduct.category === 'jackets' && t('jacketsDesc')}
                {selectedProduct.category === 'trousers' && t('trousersDesc')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
