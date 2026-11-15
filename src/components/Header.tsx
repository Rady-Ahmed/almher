import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, MessageCircle, ShieldCheck, Download, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { StoreSettings } from '../types';
import { isWhatsAppConfigured } from '../utils/whatsapp';

interface HeaderProps {
  settings: StoreSettings | null;
  onOpenSearch: () => void;
  onOpenFavorites: () => void;
  onOpenAdmin: () => void;
  onInstallClick?: () => void;
  canInstall?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  settings,
  onOpenSearch,
  onOpenFavorites,
  onOpenAdmin,
  onInstallClick,
  canInstall
}) => {
  const { totalItemsCount, setIsCartDrawerOpen, favorites, showToast } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isWaReady = isWhatsAppConfigured(settings);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-surface-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          
          {/* Logo & Brand Wordmark */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group focus:outline-none tap-tactile">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-500 flex items-center justify-center shadow-xs group-hover:bg-brand-600 transition-colors">
                <img src="/favicon.svg" alt="الماهر" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-ink">الـمـاهـر</span>
                  <span className="text-[10px] sm:text-xs font-bold text-brand-500 tracking-wider font-mono">AL MAHER</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-ink-muted">الطازة تبدأ من الماهر</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links — Swiss Minimalist Spacing */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-bold text-ink">
            <a href="#hero" className="hover:text-brand-500 transition-colors">الرئيسية</a>
            <a href="#special-offers" className="hover:text-brand-500 text-brand-600 font-extrabold transition-colors flex items-center gap-1.5">
              <span>العروض والبكجات</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-ping" />
            </a>
            <a href="#categories" className="hover:text-brand-500 transition-colors">الأقسام</a>
            <a href="#vegetables" className="hover:text-brand-500 transition-colors">الخضروات</a>
            <a href="#fruits" className="hover:text-brand-500 transition-colors">الفاكهة</a>
            <a href="#catalog" className="hover:text-brand-500 transition-colors">كل المنتجات</a>
            <a href="#about-us" className="hover:text-brand-500 transition-colors">الماهر في كل مصر</a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Install PWA Button (if available) */}
            {canInstall && (
              <button
                onClick={onInstallClick}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-brand-50 text-brand-600 hover:bg-brand-100 rounded-xl border border-brand-200/80 transition-colors tap-tactile"
                title="تثبيت تطبيق الماهر على هاتفك"
              >
                <Download className="w-3.5 h-3.5" />
                <span>تثبيت التطبيق</span>
              </button>
            )}

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 rounded-xl text-ink hover:text-brand-500 hover:bg-surface-subtle transition-colors tap-tactile"
              title="بحث في الخضروات والفاكهة"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Favorites Button */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 sm:p-2.5 rounded-xl text-ink hover:text-brand-500 hover:bg-surface-subtle transition-colors tap-tactile"
              title="المفضلة"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-brand-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Contact Button */}
            {isWaReady ? (
              <a
                href={`https://wa.me/${settings?.whatsapp_number.replace(/\D/g, '')}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن منتجات الماهر')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-xl text-[#25D366] hover:bg-[#25D366]/10 transition-colors tap-tactile"
                title="تواصل مباشر عبر الواتساب"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ) : (
              <button
                onClick={() => showToast('خدمة الواتساب', 'رقم المتجر قيد التعيين حالياً في لوحة الإدارة')}
                className="p-2 sm:p-2.5 rounded-xl text-zinc-400 hover:text-zinc-600 hover:bg-surface-subtle transition-colors tap-tactile"
                title="واتساب المتجر"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartDrawerOpen(true)}
              className="relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-xs sm:text-sm shadow-xs transition-all tap-tactile"
              title="سلة الطلبات"
            >
              <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              <span className="hidden sm:inline">السلة</span>
              {totalItemsCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-black bg-white text-brand-600 rounded-full">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Admin Settings Button */}
            <button
              onClick={onOpenAdmin}
              className="p-2 sm:p-2.5 rounded-xl text-ink-light hover:text-ink hover:bg-surface-subtle transition-colors tap-tactile"
              title="لوحة تحكم المسؤول / الإدارة"
            >
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-ink hover:bg-surface-subtle tap-tactile"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-surface-border bg-white px-5 py-4 space-y-2 fade-in">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-ink hover:text-brand-500"
          >
            الرئيسية
          </a>
          <a
            href="#special-offers"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-extrabold text-brand-600 hover:text-brand-700"
          >
            عروض وبكجات الماهر الحصرية 🔥
          </a>
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-ink hover:text-brand-500"
          >
            الأقسام الرئيسية
          </a>
          <a
            href="#vegetables"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-ink hover:text-brand-500"
          >
            قسم الخضروات الطازجة
          </a>
          <a
            href="#fruits"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-ink hover:text-brand-500"
          >
            قسم الفواكه والموالح
          </a>
          <a
            href="#catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-ink hover:text-brand-500"
          >
            كتالوج المنتجات (+150 صنف)
          </a>
          <a
            href="#about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-ink hover:text-brand-500"
          >
            الماهر في كل الجمهورية (خريطة مصر) 🗺️
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-ink hover:text-brand-500"
          >
            لماذا تختار الماهر؟
          </a>

          {canInstall && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onInstallClick && onInstallClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold bg-brand-50 text-brand-600 rounded-xl border border-brand-200 mt-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>تثبيت تطبيق الماهر على الهاتف</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
