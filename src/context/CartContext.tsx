import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';

interface ToastState {
  id: number;
  message: string;
  subtext?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, unit: string, notes?: string) => void;
  updateQuantity: (productId: string, unit: string, quantity: number) => void;
  removeFromCart: (productId: string, unit: string) => void;
  clearCart: () => void;
  totalItemsCount: number;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
  
  // Favorites
  favorites: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;

  // Selected product modal
  selectedProductForModal: Product | null;
  setSelectedProductForModal: (product: Product | null) => void;

  // Toast
  showToast: (message: string, subtext?: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'al_maher_cart_v1';
const FAVORITES_STORAGE_KEY = 'al_maher_favorites_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to persist cart:', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to persist favorites:', e);
    }
  }, [favorites]);

  const showToast = (message: string, subtext?: string) => {
    const id = Date.now();
    setToast({ id, message, subtext });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 2800);
  };

  const addToCart = (product: Product, quantity: number, unit: string, notes?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selected_unit === unit
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          notes: notes !== undefined ? notes : updated[existingIndex].notes
        };
        return updated;
      } else {
        return [...prev, { product, quantity, selected_unit: unit, notes }];
      }
    });

    // Haptic feedback on mobile devices
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try { navigator.vibrate(20); } catch { /* ignore */ }
    }

    showToast(`تمت إضافة ${product.arabic_name}`, `${quantity} ${unit} في سلة طلبك`);
  };

  const updateQuantity = (productId: string, unit: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, unit);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selected_unit === unit
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string, unit: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selected_unit === unit)
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(productId);
      const updated = isFav ? prev.filter((id) => id !== productId) : [...prev, productId];
      showToast(isFav ? 'تمت الإزالة من المفضلة' : 'تمت الإضافة للمفضلة');
      return updated;
    });
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItemsCount,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        favorites,
        toggleFavorite,
        isFavorite,
        selectedProductForModal,
        setSelectedProductForModal,
        showToast
      }}
    >
      {children}

      {/* Floating Modern Toast Notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-24 left-1/2 z-50 pointer-events-auto toast-enter"
        >
          <div className="flex items-center gap-3 px-4 py-3 bg-ink/95 text-white rounded-2xl shadow-elevated border border-white/10 backdrop-blur-md text-right min-w-[280px] max-w-sm">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-black text-white">{toast.message}</p>
              {toast.subtext && (
                <p className="text-[11px] text-gray-300 font-medium">{toast.subtext}</p>
              )}
            </div>
            <button
              onClick={() => {
                setToast(null);
                setIsCartDrawerOpen(true);
              }}
              className="px-2.5 py-1 text-[11px] font-bold text-brand-300 hover:text-white bg-white/10 rounded-lg transition-colors flex items-center gap-1"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>السلة</span>
            </button>
            <button
              onClick={() => setToast(null)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
