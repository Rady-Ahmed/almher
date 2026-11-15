import React from 'react';
import { Carrot, Apple, Salad, Leaf, Calendar, Sparkles } from 'lucide-react';

interface CategoriesBarProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  counts: Record<string, number>;
}

export const CategoriesBar: React.FC<CategoriesBarProps> = ({
  selectedCategory,
  onSelectCategory,
  counts
}) => {
  const categories = [
    {
      id: 'all',
      name: 'جميع المنتجات',
      count: counts['all'] || 0,
      icon: Sparkles,
      activeColor: 'bg-ink text-white shadow-sm'
    },
    {
      id: 'vegetables',
      name: 'الخضروات',
      count: counts['vegetables'] || 0,
      icon: Carrot,
      activeColor: 'bg-brand-500 text-white shadow-brand-500/20 shadow-sm'
    },
    {
      id: 'fruits',
      name: 'الفاكهة والموالح',
      count: counts['fruits'] || 0,
      icon: Apple,
      activeColor: 'bg-brand-500 text-white shadow-brand-500/20 shadow-sm'
    },
    {
      id: 'leafy',
      name: 'الخضروات الورقية',
      count: counts['leafy'] || 0,
      icon: Salad,
      activeColor: 'bg-emerald-700 text-white shadow-sm'
    },
    {
      id: 'herbs',
      name: 'الأعشاب الطازجة',
      count: counts['herbs'] || 0,
      icon: Leaf,
      activeColor: 'bg-green-700 text-white shadow-sm'
    },
    {
      id: 'seasonal',
      name: 'المحاصيل الموسمية',
      count: counts['seasonal'] || 0,
      icon: Calendar,
      activeColor: 'bg-amber-600 text-white shadow-sm'
    }
  ];

  return (
    <section id="categories" className="py-6 sm:py-8 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-3.5">
          <h2 className="text-lg sm:text-xl font-black text-ink">تصفح بالأقسام</h2>
          <span className="text-xs font-semibold text-ink-muted">
            اختر قسماً لعرض المنتجات
          </span>
        </div>

        {/* Scrollable Category Row with soft scrollbar */}
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl border transition-all duration-200 tap-tactile text-right ${
                  isSelected
                    ? `${cat.activeColor} border-transparent font-bold scale-[1.02]`
                    : 'bg-surface-subtle hover:bg-white border-surface-border text-ink hover:border-zinc-300 font-semibold'
                }`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-white/20' : 'bg-white shadow-xs'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? 'text-white' : 'text-brand-500'}`} />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs sm:text-sm whitespace-nowrap">{cat.name}</span>
                  <span
                    className={`text-[10px] sm:text-[11px] ${
                      isSelected ? 'text-white/80' : 'text-ink-muted'
                    }`}
                  >
                    {cat.count} صنف
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
