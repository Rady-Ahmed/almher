import React, { useState } from 'react';
import { Sparkles, Check, ShoppingBag, Gift, Flame, Users } from 'lucide-react';
import { SpecialOfferBundle, Product } from '../types';
import { useCart } from '../context/CartContext';

interface SpecialOffersProps {
  products: Product[];
  onOpenProductModal?: (product: Product) => void;
}

export const SPECIAL_OFFERS_DATA: SpecialOfferBundle[] = [
  {
    id: 'bundle-weekly-home',
    title: 'بكج طازة الأسبوع المنزلي المتكامل',
    subtitle: 'كل ما يحتاجه مطبخ العائلة أسبوعياً من الخضار الأساسي والسلطة الطازجة.',
    tag: 'الأكثر طلباً عائلياً',
    badge_color: 'bg-brand-500 text-white',
    image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    serves_text: 'تكفي عائلة 4 - 6 أفراد لمدة أسبوع كامل',
    items_summary: [
      '3 ك طماطم بلدي فرز أول مسكرة',
      '3 ك بطاطس تحمير سبونتا مقرمشة',
      '2 ك بصل أحمر بلدي عالي التركيز',
      '1.5 ك خيار بلدي مقرمش للسلطة',
      '1 ك جزر سكري برتقالي زاهي',
      '1 رأس خس كابوتشا طازج',
      'تشكيلة ورقيات خضراء (بقدونس، كزبرة، شبت)',
      '1 ك ملوخية فلاحي مورقة'
    ],
    product_ids: [
      { productId: 'veg-01', quantity: 3, unit: 'كيلو' },
      { productId: 'veg-04', quantity: 3, unit: 'كيلو' },
      { productId: 'veg-06', quantity: 2, unit: 'كيلو' },
      { productId: 'veg-11', quantity: 1, unit: 'كيلو' },
      { productId: 'veg-13', quantity: 1, unit: 'كيلو' },
      { productId: 'veg-28', quantity: 1, unit: 'قطعة' },
      { productId: 'herb-01', quantity: 2, unit: 'ربطة' },
      { productId: 'veg-38', quantity: 1, unit: 'كيلو' }
    ]
  },
  {
    id: 'bundle-royal-fruits',
    title: 'صندوق فواكه الضيافة الملكية',
    subtitle: 'مختارات فاخرة من أجود أنواع الفواكه السكرية المنتقاة حبة بحبة لضيوفك وأسرتك.',
    tag: 'طازة ملكية فاخرة',
    badge_color: 'bg-amber-500 text-white',
    image_url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
    serves_text: 'مثالية للضيافة والمناسبات والعصائر الطبيعية',
    items_summary: [
      '2 ك مانجو عويس إسماعيلية عسل',
      '2 ك عنب بناتي أبيض بدون بذور',
      '2 ك تفاح أحمر مقرمش إيطالي',
      '2 ك موز بلدي سكري فواح',
      '2 ك رمان منفلوطي أحمر ياقوتي',
      '1 ك جوافة بناتي بيضاء سكرية'
    ],
    product_ids: [
      { productId: 'fruit-15', quantity: 2, unit: 'كيلو' },
      { productId: 'fruit-23', quantity: 2, unit: 'كيلو' },
      { productId: 'fruit-01', quantity: 2, unit: 'كيلو' },
      { productId: 'fruit-04', quantity: 2, unit: 'كيلو' },
      { productId: 'fruit-28', quantity: 2, unit: 'كيلو' },
      { productId: 'fruit-21', quantity: 1, unit: 'كيلو' }
    ]
  },
  {
    id: 'bundle-mahshi-fest',
    title: 'بوكس لمة المحشي المصري الأصيل',
    subtitle: 'جميع متطلبات سفرة المحشي المصري مع الخضرة الفلاحية والصلصة النضرة.',
    tag: 'وليمة يوم الجمعة',
    badge_color: 'bg-emerald-600 text-white',
    image_url: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=800&q=80',
    serves_text: 'تجهيز حلة محشي مشكلة تسعد كل العائلة',
    items_summary: [
      '1 كرنبة بلدي مفروشة رقيقة الأوراق',
      '2 ك كوسة بلدي خضراء صغيرة للمحشي',
      '2 ك باذنجان عروس مشكل (أبيض وأسود)',
      '1 ك فلفل رومي أخضر بلدي مقرمش',
      '3 ك طماطم بلدي حمراء مستوية للتسبيكة',
      '5 ربطات خضرة مشكلة (شبت، كزبرة، بقدونس)'
    ],
    product_ids: [
      { productId: 'veg-30', quantity: 1, unit: 'قطعة' },
      { productId: 'veg-16', quantity: 2, unit: 'كيلو' },
      { productId: 'veg-19', quantity: 2, unit: 'كيلو' },
      { productId: 'veg-21', quantity: 1, unit: 'كيلو' },
      { productId: 'veg-01', quantity: 3, unit: 'كيلو' },
      { productId: 'herb-03', quantity: 2, unit: 'ربطة' }
    ]
  },
  {
    id: 'bundle-immunity-detox',
    title: 'بكج المناعة والديتوكس وفيتامين C',
    subtitle: 'تشكيلة صحية غنية بمضادات الأكسدة لتقوية المناعة والانتعاش اليومي.',
    tag: 'صحة وحيوية',
    badge_color: 'bg-rose-500 text-white',
    image_url: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=800&q=80',
    serves_text: 'روتين صحي أسبوعي للعصائر الخضراء والمناعة',
    items_summary: [
      '3 ك برتقال بلدي للعصير الطبيعي',
      '1 ك ليمون بنزهير أصفر فواح',
      '1.5 ك تفاح أخضر جراني سميث حامض',
      '1 ك بنجر أحمر ياقوتي للسموذي',
      'ربع ك زنجبيل طازج حار للتتبيل والشاي',
      '1 ك كيوي أخضر منعش غني بالألياف',
      '3 حزم جرجير بلدي فلاحي'
    ],
    product_ids: [
      { productId: 'fruit-07', quantity: 3, unit: 'كيلو' },
      { productId: 'fruit-11', quantity: 1, unit: 'كيلو' },
      { productId: 'fruit-02', quantity: 1, unit: 'كيلو' },
      { productId: 'veg-39', quantity: 1, unit: 'كيلو' },
      { productId: 'veg-59', quantity: 1, unit: 'ربع كيلو' },
      { productId: 'fruit-51', quantity: 1, unit: 'كيلو' },
      { productId: 'herb-07', quantity: 3, unit: 'ربطة' }
    ]
  }
];

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ products }) => {
  const { addToCart, setIsCartDrawerOpen } = useCart();
  const [addedBundleId, setAddedBundleId] = useState<string | null>(null);

  const handleAddBundleToCart = (bundle: SpecialOfferBundle) => {
    bundle.product_ids.forEach((req) => {
      const foundProduct = products.find((p) => p.id === req.productId);
      if (foundProduct) {
        addToCart(foundProduct, req.quantity, req.unit, `من باقة: ${bundle.title}`);
      }
    });

    setAddedBundleId(bundle.id);
    setTimeout(() => {
      setAddedBundleId(null);
      setIsCartDrawerOpen(true);
    }, 800);
  };

  return (
    <section id="special-offers" className="py-16 bg-gradient-to-b from-surface-subtle via-white to-surface-subtle border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 text-right">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-black tracking-wide mb-3">
              <Flame className="w-4 h-4 text-brand-500 fill-brand-500" />
              <span>عروض وتوفير الماهر الأسبوعي</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight">
              بكجات الماهر الحصرية — <span className="text-brand-500">جاهزة بضغطة زر</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-muted mt-2 max-w-2xl leading-relaxed">
              جمعنا لك أفضل الخضروات والفواكه في باقات متكاملة تلبي احتياجات بيتك وعائلتك بكل راحة، منتقاة بعناية فائقة وجاهزة للإضافة إلى سلتك دفعة واحدة.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-ink-muted bg-white p-3 rounded-2xl border border-surface-border shadow-xs">
            <Gift className="w-5 h-5 text-brand-500 flex-shrink-0" />
            <span>فرز يدوي مسبق وتغليف مريح يحفظ الطزاجة</span>
          </div>
        </div>

        {/* Mobile: horizontal scroll carousel / Desktop: 2-col grid */}
        {/* Scroll dots for mobile */}
        <div className="flex gap-2 justify-center mb-4 md:hidden">
          {SPECIAL_OFFERS_DATA.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-200" />
          ))}
        </div>

        <div className="
          flex gap-5
          overflow-x-auto offers-scroll-container
          md:grid md:grid-cols-2 md:overflow-visible
          pb-3 md:pb-0
          text-right
        ">
          {SPECIAL_OFFERS_DATA.map((bundle) => {
            const isAdded = addedBundleId === bundle.id;

            return (
              <div
                key={bundle.id}
                className="offers-scroll-item group relative bg-white rounded-3xl border border-surface-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between flex-shrink-0 w-[82vw] sm:w-[70vw] md:w-auto"
              >
                {/* Visual Header & Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-subtle">
                  <img
                    src={bundle.image_url}
                    alt={bundle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-black shadow-md ${bundle.badge_color || 'bg-brand-500 text-white'}`}>
                      {bundle.tag}
                    </span>
                  </div>

                  {/* Serves info pill */}
                  <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1.5 font-bold bg-black/40 backdrop-blur-md px-3 py-1 rounded-xl">
                      <Users className="w-3.5 h-3.5 text-amber-300" />
                      <span>{bundle.serves_text}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-semibold bg-brand-500/90 px-2.5 py-1 rounded-xl">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>فرز فندقي</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-ink group-hover:text-brand-600 transition-colors">
                      {bundle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-1">
                      {bundle.subtitle}
                    </p>

                    {/* What's in the box list */}
                    <div className="mt-4 pt-4 border-t border-surface-border">
                      <h4 className="text-xs font-black text-ink mb-2.5 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-500" />
                        محتويات البكج بالتفصيل ({bundle.items_summary.length} أصناف):
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-muted">
                        {bundle.items_summary.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-surface-subtle p-2 rounded-xl">
                            <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span className="font-semibold text-ink line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Add Bundle Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleAddBundleToCart(bundle)}
                      className={`w-full py-4 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md transition-all active:scale-98 ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-brand-500 hover:bg-brand-600 text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span>تمت إضافة جميع أصناف البكج للسلة بنجاح!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-5 h-5" />
                          <span>إضافة أصناف البكج كاملة إلى السلة</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-ink-muted mt-2">
                      يمكنك تعديل أي كمية أو استبعاد أي صنف من داخل السلة بحرية تامة.
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
