import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Check, Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart, isFavorite, toggleFavorite, setIsCartDrawerOpen } = useCart();
  
  const [selectedUnit, setSelectedUnit] = useState<string>('كيلو');
  const [quantity, setQuantity] = useState<number>(1);
  const [notes, setNotes] = useState<string>('');
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [heartAnim, setHeartAnim] = useState<boolean>(false);

  useEffect(() => {
    if (product) {
      setSelectedUnit(product.default_unit || product.allowed_units[0] || 'كيلو');
      setQuantity(1);
      setNotes('');
      setIsAdded(false);
    }
  }, [product]);

  if (!product) return null;

  const favorited = isFavorite(product.id);

  const handleAddToCart = () => {
    if (!product.is_available) return;
    addToCart(product, quantity, selectedUnit, notes);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
      setIsCartDrawerOpen(true);
    }, 550);
  };

  const handleHeartClick = () => {
    setHeartAnim(true);
    toggleFavorite(product.id);
    setTimeout(() => setHeartAnim(false), 350);
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-200">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal / Bottom Sheet Container */}
      <div className="relative w-full max-w-lg bg-white rounded-t-[22px] sm:rounded-2xl shadow-elevated border border-surface-border overflow-hidden z-10 text-right max-h-[90vh] flex flex-col bottom-sheet-enter sm:modal-enter">
        
        {/* Mobile Pull Indicator Pill */}
        <div className="pt-2.5 pb-1 sm:hidden flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-zinc-300" />
        </div>

        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-surface-border/80">
          <button
            onClick={handleHeartClick}
            aria-label="المفضلة"
            className={`p-2 rounded-xl transition-all tap-tactile ${
              favorited ? 'text-brand-500 bg-brand-50' : 'text-zinc-400 hover:text-brand-500'
            } ${heartAnim ? 'heart-pop' : ''}`}
          >
            <Heart className={`w-5 h-5 ${favorited ? 'fill-brand-500' : ''}`} />
          </button>

          <span className="text-xs font-bold text-ink-muted">تفاصيل الصنف</span>

          <button
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="p-2 rounded-xl text-ink hover:bg-surface-subtle transition-colors tap-tactile"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-5 flex-1">
          
          {/* Main Product Photography */}
          <div className="relative aspect-[4/3] w-full rounded-2xl bg-surface-subtle overflow-hidden flex items-center justify-center p-4 border border-surface-border/60">
            <img
              src={product.image_url}
              alt={product.arabic_name}
              className="w-full h-full object-contain object-center transition-transform duration-300"
            />
            {product.is_seasonal && (
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-xs">
                موسمي طازج
              </span>
            )}
          </div>

          {/* Titles & Description */}
          <div>
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-ink">
                {product.arabic_name}
              </h2>
              {product.is_available ? (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  متوفر
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-zinc-100 text-zinc-500 border border-zinc-200">
                  غير متوفر
                </span>
              )}
            </div>
            <p className="text-xs font-semibold text-ink-light tracking-wide font-mono mt-0.5">
              {product.english_name}
            </p>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-2">
              {product.description}
            </p>
          </div>

          {/* Units Selection with Swiss Modern Buttons */}
          <div>
            <label className="block text-xs font-extrabold text-ink mb-2">
              اختر الوحدة المطلوبة:
            </label>
            <div className="flex flex-wrap gap-2">
              {product.allowed_units.map((unit) => {
                const isSelected = selectedUnit === unit;
                return (
                  <button
                    key={unit}
                    onClick={() => setSelectedUnit(unit)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold border transition-all tap-tactile ${
                      isSelected
                        ? 'bg-brand-500 text-white border-brand-500 shadow-xs'
                        : 'bg-surface-subtle hover:bg-white text-ink border-surface-border'
                    }`}
                  >
                    {unit}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity Controls with Micro-interactions */}
          <div>
            <label className="block text-xs font-extrabold text-ink mb-2">
              حدد الكمية:
            </label>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-surface-border rounded-xl bg-surface-subtle p-1 shadow-xs">
                <button
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  aria-label="إنقاص الكمية"
                  className="w-9 h-9 rounded-lg bg-white hover:bg-surface-subtle disabled:opacity-40 text-ink flex items-center justify-center transition-all tap-tactile shadow-xs"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-14 text-center text-base font-black text-ink">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  aria-label="زيادة الكمية"
                  className="w-9 h-9 rounded-lg bg-white hover:bg-surface-subtle text-ink flex items-center justify-center transition-all tap-tactile shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs sm:text-sm font-bold text-ink-muted">
                المجموع المحدد: <span className="text-brand-600 font-extrabold">{quantity} {selectedUnit}</span>
              </div>
            </div>
          </div>

          {/* Special Notes (e.g. Ripeness, Packing) */}
          <div>
            <label className="block text-xs font-extrabold text-ink mb-1.5">
              ملاحظات خاصة باختيار الصنف (اختياري):
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="مثال: نرغب بحبات مستوية للأكل فوراً، أو حبات خضراء متوسطة..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-surface-border bg-white text-xs sm:text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-50 transition-all"
            />
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-surface-border bg-surface-subtle/40">
          <button
            onClick={handleAddToCart}
            disabled={!product.is_available}
            className={`w-full py-3.5 rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs transition-all tap-tactile ${
              !product.is_available
                ? 'bg-zinc-300 text-zinc-500 cursor-not-allowed'
                : isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-500 hover:bg-brand-600 text-white shadow-brand-500/20 hover:shadow-md'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-5 h-5 stroke-[2.5]" />
                <span>تمت الإضافة إلى السلة بنجاح</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5" />
                <span>إضافة إلى سلة الطلب ({quantity} {selectedUnit})</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
