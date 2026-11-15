import React, { useEffect, useRef, useState } from 'react';
import { Home, LayoutGrid, Search, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface BottomNavProps {
  onSearchClick: () => void;
  onCategoriesClick: () => void;
  onFavoritesClick: () => void;
  isFavoritesActive: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  onSearchClick,
  onCategoriesClick,
  onFavoritesClick,
  isFavoritesActive
}) => {
  const { totalItemsCount, setIsCartDrawerOpen, favorites } = useCart();
  const [activeTab, setActiveTab] = useState<string>('home');
  const prevCartCount = useRef(totalItemsCount);
  const [cartBounce, setCartBounce] = useState(false);
  const [favBounce, setFavBounce] = useState(false);

  // Bounce the cart badge when count increases
  useEffect(() => {
    if (totalItemsCount > prevCartCount.current) {
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 450);
    }
    prevCartCount.current = totalItemsCount;
  }, [totalItemsCount]);

  // Bounce fav badge when it changes
  const prevFavLen = useRef(favorites.length);
  useEffect(() => {
    if (favorites.length !== prevFavLen.current) {
      setFavBounce(true);
      setTimeout(() => setFavBounce(false), 450);
    }
    prevFavLen.current = favorites.length;
  }, [favorites.length]);

  const tabs = [
    {
      id: 'home',
      label: 'الرئيسية',
      icon: Home,
      action: () => {
        setActiveTab('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      id: 'categories',
      label: 'الأقسام',
      icon: LayoutGrid,
      action: () => {
        setActiveTab('categories');
        onCategoriesClick();
      }
    },
    {
      id: 'search',
      label: 'بحث',
      icon: Search,
      action: () => {
        setActiveTab('search');
        onSearchClick();
      },
      isCenterFab: true
    },
    {
      id: 'favorites',
      label: 'المفضلة',
      icon: Heart,
      action: () => {
        setActiveTab('favorites');
        onFavoritesClick();
      },
      badge: favorites.length > 0 ? favorites.length : null,
      badgeBounce: favBounce,
      isActive: isFavoritesActive
    },
    {
      id: 'cart',
      label: 'السلة',
      icon: ShoppingBag,
      action: () => {
        setActiveTab('cart');
        setIsCartDrawerOpen(true);
      },
      badge: totalItemsCount > 0 ? totalItemsCount : null,
      badgeBounce: cartBounce
    }
  ];

  return (
    <nav
      aria-label="التنقل الرئيسي للهاتف"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/96 backdrop-blur-md border-t border-surface-border shadow-elevated safe-bottom select-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-center justify-around h-[58px] px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === 'favorites' ? isFavoritesActive : activeTab === tab.id;

          if (tab.isCenterFab) {
            return (
              <button
                key={tab.id}
                onClick={tab.action}
                className="flex-1 flex flex-col items-center justify-center tap-tactile -mt-5 group"
                aria-label={tab.label}
              >
                <div className="w-12 h-12 rounded-full bg-brand-500 group-active:bg-brand-600 flex items-center justify-center shadow-lg transition-all group-hover:shadow-brand-500/40 group-hover:scale-105">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-[9px] font-bold text-ink-muted mt-0.5">{tab.label}</span>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={tab.action}
              className={`flex-1 flex flex-col items-center justify-center py-1 tap-tactile relative transition-colors ${
                isActive ? 'text-brand-500' : 'text-zinc-400 hover:text-brand-400'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Active top-bar indicator */}
              {isActive && <span className="bottom-nav-active-dot" aria-hidden="true" />}

              {/* Icon with optional badge */}
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110' : ''} ${tab.id === 'favorites' && isActive ? 'fill-brand-500' : ''}`} />
                {tab.badge != null && (
                  <span
                    className={`absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-brand-500 text-white text-[9px] font-black flex items-center justify-center ${
                      tab.badgeBounce ? 'badge-bounce' : ''
                    }`}
                  >
                    {tab.badge > 99 ? '99+' : tab.badge}
                  </span>
                )}
              </div>

              <span className={`text-[10px] font-bold mt-0.5 transition-colors ${isActive ? 'text-brand-500' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
