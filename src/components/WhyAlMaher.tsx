import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, MessageCircle, HeartHandshake, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyAlMaher: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const hasCountedRef = useRef(false);

  // IntersectionObserver for entrance reveal & single count-up execution
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (!hasCountedRef.current) {
            hasCountedRef.current = true;
            const target = 150;
            const duration = 1200; // ms
            const startTime = performance.now();

            const animateCount = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(easeProgress * target);
              setCount(current);

              if (progress < 1) {
                requestAnimationFrame(animateCount);
              } else {
                setCount(target);
              }
            };

            requestAnimationFrame(animateCount);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-16 sm:py-24 bg-white border-b border-surface-border text-right relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block text-xs font-black text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full border border-brand-200/80">
            لماذا يختار عملاؤنا الماهر؟
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-ink tracking-tight">
            طازة يومية، وفرز فندقي، وتجربة تسوق بلا تعقيد
          </h2>
          <p className="text-xs sm:text-base text-ink-muted leading-relaxed max-w-2xl mx-auto font-normal">
            صممنا متجر الماهر ليكون الحل الأسهل والأسرع لاحتياجات البيوت والمطاعم الراقية.
          </p>
        </div>

        {/* PREMIUM BENTO GRID (4 Asymmetric Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* ========================================================
              CARD 1: WIDE — تنوع استثنائي (+150 صنف)
              (lg:col-span-7)
              ======================================================== */}
          <div
            style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
            className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-50/80 via-white to-brand-50/30 border border-surface-border hover:border-brand-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group cursor-default select-none ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } hover:-translate-y-1`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-brand-100 text-brand-600 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-black bg-brand-500 text-white shadow-xs">
                  تشكيلة متكاملة يومياً
                </span>
              </div>

              <div className="space-y-1.5 mb-5">
                <h3 className="text-lg sm:text-xl font-black text-ink group-hover:text-brand-600 transition-colors">
                  تنوع استثنائي (+150 صنف)
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  كل ما تحتاجه مائدتك ومطبخك من خضروات أساسية، فاكهة موسمية، وأعشاب فلاحية في مكان واحد.
                </p>
              </div>
            </div>

            {/* Focal Point Visual: Count-up & Fresh Produce Avatars */}
            <div className="pt-4 border-t border-brand-100/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-black text-brand-500 font-mono tracking-tight">
                  +{count}
                </span>
                <span className="text-xs sm:text-sm font-bold text-ink">
                  صنف طازج متاح للطلب
                </span>
              </div>

              {/* Clean Produce Mini-Gallery */}
              <div className="flex items-center -space-x-2 space-x-reverse">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-white shadow-xs p-1 overflow-hidden" title="طماطم بلدي">
                  <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=120&q=80" alt="طماطم" className="w-full h-full object-contain" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-white shadow-xs p-1 overflow-hidden" title="مانجو عويس">
                  <img src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=120&q=80" alt="مانجو" className="w-full h-full object-contain" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-white shadow-xs p-1 overflow-hidden" title="بطاطس تحمير">
                  <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=120&q=80" alt="بطاطس" className="w-full h-full object-contain" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-white shadow-xs p-1 overflow-hidden" title="فراولة">
                  <img src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=120&q=80" alt="فراولة" className="w-full h-full object-contain" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-500 text-white shadow-xs flex items-center justify-center text-[10px] font-black">
                  +146
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              CARD 2: COMPACT — اختيار حبة بحبة بعناية
              (lg:col-span-5)
              ======================================================== */}
          <div
            style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
            className={`lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-surface-subtle border border-surface-border hover:border-brand-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group cursor-default select-none ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } hover:-translate-y-1`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-surface-border text-emerald-600 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                  فرز دقيق
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-black text-ink group-hover:text-emerald-700 transition-colors">
                  اختيار حبة بحبة بعناية
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  فريقنا يفحص كل ثمرة يدوياً قبل التعبئة، لنضمن وصول الطازة النقية إلى باب منزلك.
                </p>
              </div>
            </div>

            {/* Visual Quality Inspection Badge */}
            <div className="pt-4 mt-4 border-t border-surface-border/80 flex items-center gap-2.5 text-xs font-bold text-ink">
              <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-[11px] sm:text-xs text-ink-muted">
                استبعاد تام لأي حبة تالفة أو غير ناضجة قبل التغليف
              </span>
            </div>
          </div>

          {/* ========================================================
              CARD 3: COMPACT — طلب فوري ومباشر بالواتساب
              (lg:col-span-5)
              ======================================================== */}
          <div
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
            className={`lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-surface-subtle border border-surface-border hover:border-emerald-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group cursor-default select-none ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } hover:-translate-y-1`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-surface-border text-[#25D366] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#25D366]/10 text-emerald-800 border border-[#25D366]/20">
                  تواصل مباشر
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-black text-ink group-hover:text-emerald-700 transition-colors">
                  طلب فوري ومباشر بالواتساب
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  بدون خطوات معقدة أو بطاقات بنكية، حدد طلبك وسنتواصل معك عبر الواتساب لتجهيزه وتوصيله.
                </p>
              </div>
            </div>

            {/* Subtle WhatsApp Message Bubble Simulation */}
            <div className="pt-4 mt-4 border-t border-surface-border/80">
              <div className="bg-white rounded-xl p-2.5 border border-emerald-100 shadow-xs flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[11px] font-bold text-ink">طلبك يصل منسقاً بالكامل لخدمة العملاء</span>
                </div>
                <span className="text-[10px] text-zinc-400 font-mono">الآن</span>
              </div>
            </div>
          </div>

          {/* ========================================================
              CARD 4: WIDE — جودة وضمان الماهر (Dark Neutral Editorial Card)
              (lg:col-span-7)
              ======================================================== */}
          <div
            style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
            className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-900 text-white border border-zinc-800 hover:border-zinc-700 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group cursor-default select-none ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } hover:-translate-y-1`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-zinc-800 border border-zinc-700 text-brand-400 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-black bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  شعارنا الدائم
                </span>
              </div>

              <div className="space-y-1.5 mb-5">
                <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-brand-300 transition-colors">
                  جودة وضمان الماهر
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  شعارنا "الطازة تبدأ من الماهر"، نلتزم بأعلى معايير النظافة والفرز الدقيق ورضاك التام عن كل صنف.
                </p>
              </div>
            </div>

            {/* Bottom Guarantee Checklist */}
            <div className="pt-4 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold">حق المعاينة الكاملة عند الاستلام</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold">التزام صارم بنظافة وحفظ المنتجات</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
