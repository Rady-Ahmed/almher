import React, { useEffect, useRef } from 'react';
import { X, Trash2, Plus, Minus, ArrowLeft, ShoppingBag, Package, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  onProceedToOrder: () => void;
}

/* Progress bar steps */
const STEPS = ['اختيار الأصناف', 'مراجعة السلة', 'إرسال الطلب'];

export const CartDrawer: React.FC<CartDrawerProps> = ({ onProceedToOrder }) => {
  const {
    cart,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItemsCount
  } = useCart();

  // Lock body scroll when drawer open
  useEffect(() => {
    if (isCartDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isCartDrawerOpen]);

  const prevCountRef = useRef(totalItemsCount);
  useEffect(() => { prevCountRef.current = totalItemsCount; }, [totalItemsCount]);

  if (!isCartDrawerOpen) return null;

  const currentStep = cart.length === 0 ? 0 : 1;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="سلة الطلبات">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/55 backdrop-blur-sm transition-opacity fade-in"
        onClick={() => setIsCartDrawerOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col drawer-enter text-right border-r border-surface-border">

          {/* ── Header ── */}
          <div className="px-4 sm:px-5 pt-4 pb-3 border-b border-surface-border bg-white">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shadow-xs relative">
                  <ShoppingBag className="w-4 h-4" />
                  {totalItemsCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-brand-500 text-white text-[9px] font-black flex items-center justify-center badge-bounce">
                      {totalItemsCount}
                    </span>
                  )}
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-ink">سلة طلباتك</h2>
                  <p className="text-xs text-ink-muted">
                    {totalItemsCount > 0
                      ? `${cart.length} صنف · ${totalItemsCount} وحدة إجمالاً`
                      : 'لا توجد أصناف بعد'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="px-2.5 py-1 text-xs font-bold text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors tap-tactile"
                    title="إفراغ السلة"
                  >
                    مسح الكل
                  </button>
                )}
                <button
                  onClick={() => setIsCartDrawerOpen(false)}
                  aria-label="إغلاق السلة"
                  className="p-2 rounded-xl text-ink hover:bg-surface-subtle transition-colors tap-tactile"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="flex items-center gap-1.5" aria-label="مراحل الطلب">
              {STEPS.map((step, i) => (
                <React.Fragment key={step}>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black transition-colors ${
                        i <= currentStep
                          ? 'bg-brand-500 text-white'
                          : 'bg-surface-subtle text-zinc-400 border border-surface-border'
                      }`}
                    >
                      {i < currentStep ? '✓' : i + 1}
                    </div>
                    <span className={`text-[9px] font-bold hidden sm:block ${i <= currentStep ? 'text-brand-600' : 'text-zinc-400'}`}>
                      {step}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`flex-1 h-px transition-colors ${i < currentStep ? 'bg-brand-300' : 'bg-surface-border'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── Cart Items ── */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {cart.length === 0 ? (
              /* Empty state */
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 min-h-[260px]">
                <div className="w-20 h-20 rounded-3xl bg-surface-subtle flex items-center justify-center border border-surface-border">
                  <Package className="w-9 h-9 text-zinc-300 stroke-[1.2]" />
                </div>
                <div>
                  <h3 className="text-base font-black text-ink">سلتك فارغة حالياً</h3>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed max-w-[220px] mx-auto">
                    تصفح تشكيلة الخضروات والفاكهة الطازجة وأضف ما يعجبك
                  </p>
                </div>
                <button
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-brand-500 text-white font-bold text-sm shadow-xs hover:bg-brand-600 transition-colors tap-tactile"
                >
                  ابدأ التسوق
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selected_unit}`}
                  className="cart-item-enter flex gap-3 p-3 rounded-2xl border border-surface-border bg-surface-subtle/40 hover:bg-surface-subtle transition-all"
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  {/* Thumbnail */}
                  <div className="w-[68px] h-[68px] sm:w-20 sm:h-20 rounded-xl bg-white p-1.5 border border-surface-border/70 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-xs">
                    <img
                      src={item.product.image_url}
                      alt={item.product.arabic_name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs sm:text-sm font-bold text-ink leading-tight line-clamp-1">
                          {item.product.arabic_name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selected_unit)}
                          className="text-zinc-400 hover:text-rose-500 p-1 transition-colors tap-tactile flex-shrink-0"
                          aria-label={`حذف ${item.product.arabic_name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-brand-50 border border-brand-100 text-[10px] font-bold text-brand-700">
                        {item.selected_unit}
                      </span>
                      {item.notes && (
                        <p className="text-[10px] text-ink-muted mt-0.5 italic line-clamp-1">
                          {item.notes}
                        </p>
                      )}
                    </div>

                    {/* Quantity + total */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-surface-border rounded-xl bg-white p-0.5 shadow-xs">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selected_unit, item.quantity - 1)}
                          aria-label="إنقاص الكمية"
                          className="w-7 h-7 rounded-lg hover:bg-surface-subtle flex items-center justify-center text-ink tap-tactile transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-9 text-center text-xs font-black text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selected_unit, item.quantity + 1)}
                          aria-label="زيادة الكمية"
                          className="w-7 h-7 rounded-lg hover:bg-surface-subtle flex items-center justify-center text-ink tap-tactile transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-black text-brand-600">
                        {item.quantity} {item.selected_unit}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* ── Footer ── */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-surface-border bg-white space-y-3">
              {/* Summary pill */}
              <div className="bg-brand-50/70 px-4 py-2.5 rounded-xl border border-brand-100 flex items-center justify-between text-xs text-brand-900">
                <span className="font-bold">إجمالي السلة</span>
                <span className="font-black text-sm">
                  {cart.length} صنف · {totalItemsCount} وحدة
                </span>
              </div>

              {/* WhatsApp order button */}
              <button
                onClick={() => {
                  setIsCartDrawerOpen(false);
                  onProceedToOrder();
                }}
                className="w-full py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2.5 shadow-md transition-all tap-tactile bg-[#25D366] hover:bg-[#1aad52] text-white"
              >
                <MessageCircle className="w-5 h-5" />
                <span>متابعة الطلب عبر الواتساب</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-ink-muted">
                يُرسَل الطلب منسقاً لواتساب المتجر لتأكيده وتجهيزه فوراً
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
