import React, { useState } from 'react';
import { Heart, Plus, Check, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, index = 0 }) => {
  const { toggleFavorite, isFavorite, addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [heartAnim, setHeartAnim] = useState(false);
  const favorited = isFavorite(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.is_available) return;
    const unit = product.default_unit || product.allowed_units[0] || 'كيلو';
    addToCart(product, 1, unit);
    // showToast is called internally by addToCart in CartContext
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1400);
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHeartAnim(true);
    toggleFavorite(product.id);
    setTimeout(() => setHeartAnim(false), 350);
  };

  // Accent bar colour based on availability
  const accentColor = !product.is_available
    ? '#d4d4d8'
    : product.is_seasonal
    ? '#f59e0b'
    : '#22c55e';

  // Stagger entrance delay based on card index
  const staggerStyle: React.CSSProperties = {
    animationDelay: index < 12 ? `${(index % 6) * 45}ms` : undefined,
  };

  return (
    <article
      onClick={() => onSelect(product)}
      style={staggerStyle}
      className="product-card group relative bg-white rounded-2xl border border-surface-border hover:border-brand-200/80 flex flex-col cursor-pointer shadow-card hover:shadow-card-hover select-none fade-up-enter overflow-hidden"
    >
      {/* Left accent bar */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[3px] rounded-r-2xl z-10 transition-colors duration-300"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />

      {/* Featured shimmer pill — above image */}
      {product.is_featured && (
        <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50/95 border border-amber-200 shadow-xs backdrop-blur-sm">
          <Sparkles className="w-2.5 h-2.5 text-amber-500 fill-amber-400" />
          <span className="text-[9px] font-black text-amber-700 tracking-wide">مختارات</span>
        </div>
      )}

      {/* ── Image container ── */}
      <div className="relative aspect-square w-full bg-surface-subtle overflow-hidden flex items-center justify-center p-3">
        {/* Skeleton shimmer */}
        {!imageLoaded && (
          <div className="absolute inset-0 skeleton-shimmer" />
        )}

        <img
          src={product.image_url}
          alt={product.arabic_name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`product-card-img w-full h-full object-contain object-center transition-opacity ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${!product.is_available ? 'grayscale opacity-50' : ''}`}
        />

        {/* Status badge — top right inside image */}
        <div className="absolute top-2 right-2">
          {product.is_available ? (
            product.is_seasonal ? (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/90 text-white shadow-xs backdrop-blur-sm">
                موسمي
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/90 text-white shadow-xs backdrop-blur-sm">
                طازج
              </span>
            )
          ) : (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-zinc-500/80 text-white shadow-xs backdrop-blur-sm">
              نفد
            </span>
          )}
        </div>

        {/* Heart button — floating top left inside image */}
        <button
          onClick={handleHeartClick}
          aria-label={favorited ? `إزالة ${product.arabic_name} من المفضلة` : `إضافة ${product.arabic_name} للمفضلة`}
          className={`absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center transition-all tap-tactile shadow-sm border ${
            favorited
              ? 'bg-brand-50 border-brand-200 text-brand-500'
              : 'bg-white/90 border-surface-border text-zinc-400 hover:text-brand-500 hover:border-brand-200'
          } ${heartAnim ? 'heart-pop' : ''}`}
        >
          <Heart className={`w-3.5 h-3.5 transition-transform duration-200 ${favorited ? 'fill-brand-500' : ''}`} />
        </button>

        {/* Unavailable overlay */}
        {!product.is_available && (
          <div className="absolute inset-0 bg-white/30 flex items-center justify-center">
            <span className="text-[10px] font-black text-zinc-500 bg-white/80 px-2.5 py-1 rounded-full border border-zinc-200">
              غير متوفر
            </span>
          </div>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="flex-1 flex flex-col justify-between p-3 sm:p-3.5 text-right space-y-1">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-ink leading-snug line-clamp-1 group-hover:text-brand-600 transition-colors">
            {product.arabic_name}
          </h3>
          <p className="text-[10px] font-medium text-ink-light tracking-wide font-mono mt-0.5">
            {product.english_name}
          </p>
          <p className="text-xs text-ink-muted line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Unit tag + Quick-add button */}
        <div className="pt-2.5 mt-1.5 border-t border-surface-border/60 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-[11px] font-bold text-brand-700 bg-brand-50/70 px-2 py-0.5 rounded-lg border border-brand-100/50">
            <span>{product.default_unit || product.allowed_units?.[0] || 'كيلو'}</span>
          </div>

          {product.is_available ? (
            <button
              onClick={handleQuickAdd}
              aria-label={`إضافة ${product.arabic_name} إلى السلة`}
              className={`flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl font-bold text-xs transition-all tap-tactile ${
                addedAnimation
                  ? 'bg-emerald-600 text-white shadow-xs scale-95'
                  : 'bg-brand-500 hover:bg-brand-600 text-white shadow-xs hover:shadow-sm'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>✓</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>أضف</span>
                </>
              )}
            </button>
          ) : (
            <span className="text-[11px] font-semibold text-zinc-400">نفدت</span>
          )}
        </div>
      </div>
    </article>
  );
};
