import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Product, StoreSettings } from './types';
import { getProducts, getStoreSettings } from './services/storeService';
import { matchesSearchQuery } from './utils/search';
import { useCart } from './context/CartContext';

import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Hero } from './components/Hero';
import { CategoriesBar } from './components/CategoriesBar';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderModal } from './components/OrderModal';
import { AdminDashboard } from './components/AdminDashboard';
import { SpecialOffers } from './components/SpecialOffers';
import { OrderingSteps } from './components/OrderingSteps';
import { EgyptCoverageMap } from './components/EgyptCoverageMap';
import { WhyAlMaher } from './components/WhyAlMaher';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';

import { Sparkles, Heart, AlertCircle, ArrowUp, Calendar, Carrot, Apple, ArrowLeft } from 'lucide-react';

export const App: React.FC = () => {
  const { favorites } = useCart();

  // Catalog and Store State
  const [products, setProducts] = useState<Product[]>([]);
  const [storeSettings, setStoreSettings] = useState<StoreSettings | null>(null);
  const [, setIsLoading] = useState<boolean>(true);

  // Filters and Search State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState<boolean>(false);
  const [showOnlyFeatured, setShowOnlyFeatured] = useState<boolean>(false);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState<boolean>(false);

  // Modals State
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  // Scroll to Top visibility
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // PWA Install state
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [canInstallPWA, setCanInstallPWA] = useState<boolean>(false);

  const catalogRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLDivElement>(null);

  // Load Initial Data
  const loadInitialData = async () => {
    setIsLoading(true);
    try {
      const [prods, settings] = await Promise.all([
        getProducts(),
        getStoreSettings()
      ]);
      setProducts(prods);
      setStoreSettings(settings);
    } catch (err) {
      console.error('Failed to load initial store data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseAdmin = () => {
    setIsAdminOpen(false);
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('admin')) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  useEffect(() => {
    loadInitialData();

    // URL listener for direct /admin route, hash, or query parameter
    const checkAdminRoute = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (
        path === '/admin' || 
        path.endsWith('/admin') ||
        hash === '#admin' || 
        hash.includes('admin') ||
        search.includes('admin')
      ) {
        setIsAdminOpen(true);
      }
    };

    checkAdminRoute();
    window.addEventListener('hashchange', checkAdminRoute);
    window.addEventListener('popstate', checkAdminRoute);

    // Scroll listener
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    // PWA BeforeInstallPrompt listener
    const handleInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstallPWA(true);
    };
    window.addEventListener('beforeinstallprompt', handleInstallPrompt);

    return () => {
      window.removeEventListener('hashchange', checkAdminRoute);
      window.removeEventListener('popstate', checkAdminRoute);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setCanInstallPWA(false);
      }
      setDeferredPrompt(null);
    } else {
      alert('لتثبيت التطبيق على الآيفون: اضغط على زر المشاركة في متصفح Safari ثم اختر "إضافة إلى الشاشة الرئيسية".');
    }
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: products.length,
      vegetables: 0,
      fruits: 0,
      leafy: 0,
      herbs: 0,
      seasonal: 0
    };
    products.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
      if (p.is_seasonal) {
        counts.seasonal++;
      }
    });
    return counts;
  }, [products]);

  // Filtered Products for the main catalog
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Favorites filter
      if (showOnlyFavorites && !favorites.includes(prod.id)) {
        return false;
      }
      // Featured filter
      if (showOnlyFeatured && !prod.is_featured) {
        return false;
      }
      // Available filter
      if (showOnlyAvailable && !prod.is_available) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'seasonal') {
          if (!prod.is_seasonal) return false;
        } else if (prod.category !== selectedCategory) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        if (!matchesSearchQuery(prod, searchQuery)) {
          return false;
        }
      }
      return true;
    });
  }, [
    products,
    selectedCategory,
    searchQuery,
    showOnlyFavorites,
    showOnlyFeatured,
    showOnlyAvailable,
    favorites
  ]);

  // Section showcase slices
  const featuredList = useMemo(() => {
    return products.filter((p) => p.is_featured && p.is_available).slice(0, 8);
  }, [products]);

  const vegetablesList = useMemo(() => {
    return products.filter((p) => p.category === 'vegetables' && p.is_available).slice(0, 8);
  }, [products]);

  const fruitsList = useMemo(() => {
    return products.filter((p) => p.category === 'fruits' && p.is_available).slice(0, 8);
  }, [products]);

  const seasonalList = useMemo(() => {
    return products.filter((p) => p.is_seasonal && p.is_available).slice(0, 8);
  }, [products]);

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSearch = () => {
    searchInputRef.current?.scrollIntoView({ behavior: 'smooth' });
    const input = searchInputRef.current?.querySelector('input');
    input?.focus();
  };

  const handleSelectSpecificCategory = (catId: string) => {
    setSelectedCategory(catId);
    setShowOnlyFavorites(false);
    setShowOnlyFeatured(false);
    scrollToCatalog();
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-subtle font-sans text-ink selection:bg-brand-500 selection:text-white pb-16 md:pb-0">
      
      {/* PWA Floating Banner / iOS Guide */}
      <PWAInstallPrompt />

      {/* 1. MINIMAL RESPONSIVE HEADER */}
      <Header
        settings={storeSettings}
        onOpenSearch={scrollToSearch}
        onOpenFavorites={() => {
          setShowOnlyFavorites(true);
          scrollToCatalog();
        }}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onInstallClick={handleInstallClick}
        canInstall={canInstallPWA}
      />

      {/* 2. HERO SECTION — COMPLETE VISUAL REDESIGN */}
      <Hero
        onExploreClick={() => {
          const el = document.getElementById('categories');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onShopClick={scrollToCatalog}
      />

      {/* 3. DEDICATED SEARCH SECTION (Cinematic Light Smart Search Bar) */}
      <section ref={searchInputRef} id="search-section" className="py-10 sm:py-14 bg-gradient-to-b from-[#F7F7F5] via-white to-[#F7F7F5] border-b border-surface-border relative overflow-hidden">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          resultsCount={filteredProducts.length}
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectSpecificCategory}
          onSelectProduct={setActiveProductModal}
        />
      </section>

      {/* 4. HORIZONTAL CATEGORY NAVIGATION */}
      <CategoriesBar
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectSpecificCategory}
        counts={categoryCounts}
      />

      {/* 5. MAIN CATALOG SECTION — directly below search & categories */}
      <section ref={catalogRef} id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        
        {/* Catalog Control Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-surface-border">
          <div>
            <h2 className="text-xl sm:text-3xl font-black text-ink">
              {showOnlyFavorites
                ? 'قائمة المفضلة'
                : selectedCategory === 'all'
                ? 'كتالوج المنتجات الكامل'
                : selectedCategory === 'vegetables'
                ? 'تشكيلة الخضروات'
                : selectedCategory === 'fruits'
                ? 'تشكيلة الفاكهة والموالح'
                : selectedCategory === 'leafy'
                ? 'الخضروات الورقية'
                : selectedCategory === 'herbs'
                ? 'الأعشاب الطازجة'
                : 'المحاصيل الموسمية'}
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-1">
              عرض {filteredProducts.length} صنف من أصل {products.length} صنف مسجل
            </p>
          </div>

          {/* Quick Filter Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                setShowOnlyFavorites(!showOnlyFavorites);
                setShowOnlyFeatured(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all tap-tactile flex items-center gap-1.5 ${
                showOnlyFavorites
                  ? 'bg-brand-500 text-white border-brand-500 shadow-xs'
                  : 'bg-white text-ink border-surface-border hover:bg-surface-subtle'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${showOnlyFavorites ? 'fill-white' : ''}`} />
              <span>المفضلة ({favorites.length})</span>
            </button>

            <button
              onClick={() => {
                setShowOnlyFeatured(!showOnlyFeatured);
                setShowOnlyFavorites(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all tap-tactile flex items-center gap-1.5 ${
                showOnlyFeatured
                  ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                  : 'bg-white text-ink border-surface-border hover:bg-surface-subtle'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>المميز فقط</span>
            </button>

            <button
              onClick={() => setShowOnlyAvailable(!showOnlyAvailable)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all tap-tactile ${
                showOnlyAvailable
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white text-ink border-surface-border hover:bg-surface-subtle'
              }`}
            >
              المتوفر حالياً فقط
            </button>
          </div>
        </div>

        {/* Empty Search / No Results State */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-surface-border p-8 space-y-4 max-w-lg mx-auto shadow-xs fade-in">
            <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center mx-auto">
              <AlertCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-ink">لم نتمكن من العثور على أي صنف</h3>
              <p className="text-xs sm:text-sm text-ink-muted mt-1 leading-relaxed">
                جرب البحث بكلمات أخرى أو قم بإلغاء التصفية لعرض التشكيلة الكاملة من الخضروات والفاكهة.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setShowOnlyFavorites(false);
                setShowOnlyFeatured(false);
                setShowOnlyAvailable(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-brand-500 text-white font-bold text-xs shadow-xs hover:bg-brand-600 transition-colors tap-tactile"
            >
              عرض جميع المنتجات
            </button>
          </div>
        ) : (
          /* Products Grid: 2 cols on mobile, 3 cols on tablet, 4 cols on desktop */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {filteredProducts.map((prod, idx) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelect={setActiveProductModal}
                index={idx}
              />
            ))}
          </div>
        )}

      </section>

      {/* 6. FEATURED PRODUCTS (when no search query is active) */}
      {!searchQuery && selectedCategory === 'all' && !showOnlyFavorites && featuredList.length > 0 && (
        <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-ink">مختارات الماهر المميزة</h3>
                <p className="text-xs text-ink-muted">الأصناف الأكثر طلباً وحباً لدى عملائنا</p>
              </div>
            </div>

            <button
              onClick={() => {
                setShowOnlyFeatured(true);
                scrollToCatalog();
              }}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors tap-tactile"
            >
              <span>عرض كل المميز</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {featuredList.map((prod, idx) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelect={setActiveProductModal}
                index={idx}
              />
            ))}
          </div>
        </section>
      )}

      {/* 6. FRESH VEGETABLES SECTION (when browsing normally) */}
      {!searchQuery && selectedCategory === 'all' && !showOnlyFavorites && vegetablesList.length > 0 && (
        <section id="vegetables" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full border-t border-surface-border/60">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                <Carrot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-ink">تشكيلة الخضروات الطازجة</h3>
                <p className="text-xs text-ink-muted">منتقاة حبة بحبة من أخصب مزارع مصر</p>
              </div>
            </div>

            <button
              onClick={() => handleSelectSpecificCategory('vegetables')}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors tap-tactile"
            >
              <span>تصفح كل الخضروات ({categoryCounts.vegetables})</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {vegetablesList.map((prod, idx) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelect={setActiveProductModal}
                index={idx}
              />
            ))}
          </div>
        </section>
      )}

      {/* 7. FRESH FRUITS SECTION (when browsing normally) */}
      {!searchQuery && selectedCategory === 'all' && !showOnlyFavorites && fruitsList.length > 0 && (
        <section id="fruits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full border-t border-surface-border/60">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <Apple className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-ink">تشكيلة الفواكه والموالح</h3>
                <p className="text-xs text-ink-muted">فواكه سكرية منتقاة بعناية للضيافة والعصائر</p>
              </div>
            </div>

            <button
              onClick={() => handleSelectSpecificCategory('fruits')}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors tap-tactile"
            >
              <span>تصفح كل الفواكه ({categoryCounts.fruits})</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {fruitsList.map((prod, idx) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelect={setActiveProductModal}
                index={idx}
              />
            ))}
          </div>
        </section>
      )}

      {/* 8. SEASONAL PRODUCTS & CURATED BUNDLES */}
      {!searchQuery && selectedCategory === 'all' && !showOnlyFavorites && seasonalList.length > 0 && (
        <section id="seasonal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full border-t border-surface-border/60">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-ink">المحاصيل والفاكهة الموسمية</h3>
                <p className="text-xs text-ink-muted">طازة في أوانها وبأعلى حلاوة وجودة</p>
              </div>
            </div>

            <button
              onClick={() => handleSelectSpecificCategory('seasonal')}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors tap-tactile"
            >
              <span>تصفح كل الموسمي ({categoryCounts.seasonal})</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {seasonalList.map((prod, idx) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelect={setActiveProductModal}
                index={idx}
              />
            ))}
          </div>
        </section>
      )}

      {/* CURATED WEEKLY BUNDLES */}
      <SpecialOffers products={products} />

      {/* 9. SIMPLE ORDERING STEPS */}
      <OrderingSteps />

      {/* 10. STORE INFORMATION, EGYPT COVERAGE MAP, WHY US, REVIEWS & FOOTER */}
      <EgyptCoverageMap />

      <WhyAlMaher />

      <CustomerReviews />

      <Footer
        settings={storeSettings}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onInstallClick={handleInstallClick}
        canInstall={canInstallPWA}
      />

      {/* Mobile Fixed Bottom Navigation Bar */}
      <BottomNav
        onSearchClick={scrollToSearch}
        onCategoriesClick={() => {
          const el = document.getElementById('categories');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onFavoritesClick={() => {
          setShowOnlyFavorites((prev) => !prev);
          scrollToCatalog();
        }}
        isFavoritesActive={showOnlyFavorites}
      />

      {/* Global Floating WhatsApp Button */}
      <FloatingWhatsApp settings={storeSettings} />

      {/* PRODUCT DETAILS MODAL / BOTTOM SHEET */}
      <ProductModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
      />

      {/* CART DRAWER */}
      <CartDrawer
        onProceedToOrder={() => setIsOrderModalOpen(true)}
      />

      {/* WHATSAPP ORDER MODAL */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        settings={storeSettings}
        onOpenAdminSettings={() => {
          setIsOrderModalOpen(false);
          setIsAdminOpen(true);
        }}
      />

      {/* ADMIN DASHBOARD MODAL */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={handleCloseAdmin}
        products={products}
        settings={storeSettings}
        onRefreshData={loadInitialData}
      />

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 md:bottom-6 right-5 p-3 rounded-full bg-ink text-white shadow-elevated hover:bg-brand-500 transition-all z-30 tap-tactile"
          title="العودة لأعلى الصفحة"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
};

export default App;
