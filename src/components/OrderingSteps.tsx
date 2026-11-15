import React from 'react';
import { ShoppingBasket, Scale, Send, CheckCircle2 } from 'lucide-react';

export const OrderingSteps: React.FC = () => {
  const steps = [
    {
      step: '٠١',
      icon: ShoppingBasket,
      title: 'اختر أصنافك المفضلة',
      desc: 'تصفح أكثر من 150 صنفاً من الخضار والفاكهة والأعشاب الطازجة المفروزة حبة بحبة.'
    },
    {
      step: '٠٢',
      icon: Scale,
      title: 'حدد الوحدات والكميات',
      desc: 'مرونة كاملة في اختيار الوزن (كيلو، نصف كيلو، ربطة، طبق) مع إمكانية إضافة ملاحظاتك الخاصة.'
    },
    {
      step: '٠٣',
      icon: Send,
      title: 'أرسل طلبك بنقرة واتساب',
      desc: 'يصل طلبك منسقاً فوراً إلى واتساب المتجر لتجهيزه وتوصيله لباب منزلك بأعلى معايير النظافة.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-surface-border text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-brand-600 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200">
            خطوات طلب سهلة وسريعة
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-ink">
            كيف تطلب من الماهر في ٣ خطوات بسيطة؟
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            بدون بطاقات بنكية أو إجراءات معقدة.. من السلة لمطبخك مباشرة.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="relative p-6 sm:p-7 rounded-2xl bg-surface-subtle border border-surface-border hover:border-brand-200 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-card hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-surface-border text-brand-500 flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="font-mono text-2xl font-black text-zinc-300">
                    {st.step}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-black text-ink">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-surface-border/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>خدمة سريعة وموثوقة</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
