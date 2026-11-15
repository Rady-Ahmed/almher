import React, { useRef, useEffect, useCallback } from 'react';
import { Star, Quote, CheckCircle2, Heart } from 'lucide-react';

interface ReviewItem {
  name: string;
  role: string;
  rating: number;
  comment: string;
  tag: string;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    name: 'الحاجة أم محمد',
    role: 'ربة منزل — المعادي، القاهرة',
    rating: 5,
    comment: 'خضار الماهر فرق معايا جداً في البيت.. الطماطم والخيار كأنهم مقطوفين الصبح بالندى، والملوخية خضرا تفتح النفس، ومعندهمش حبة واحدة مضروبة.',
    tag: 'عميلة أسبوعية دائمة'
  },
  {
    name: 'الشيف أحمد طارق',
    role: 'شيف ومسؤول مطبخ شرقي — سموحة، الإسكندرية',
    rating: 5,
    comment: 'بطلب خضار المطعم والبطاطس والبصل من الماهر، فرزهم الفندقي ونظافة التجهيز وفرت عليا وقت كبير وهدر كنا بنرميه في السوق، تجربة محترمة جداً.',
    tag: 'عميل تجاري ومطاعم'
  },
  {
    name: 'د. نورهان السيد',
    role: 'أخصائية تغذية — المنصورة، الدقهلية',
    rating: 5,
    comment: 'بكج فواكه الضيافة وبكج الديتوكس الصحي بقوا أساسيين عندي أسبوعياً. فكرة إني أختار الوحدات وأبعت بالواتساب بدون تعقيد الدفع الإلكتروني مريحة جداً.',
    tag: 'عاشقة الأكل الصحي'
  },
  {
    name: 'المهندس محمود زايد',
    role: 'الشيخ زايد، الجيزة',
    rating: 5,
    comment: 'أول مرة ألاقي متجر خضار أونلاين فاهم يعني إيه طزاجة وصدق في التعامل. المانجو العويس والتين والبطيخ كانوا سكر صافي. ربنا يباركلهم.',
    tag: 'طلب منزلي'
  }
];

export const CustomerReviews: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  
  // Animation metrics refs (mutated directly in requestAnimationFrame to avoid re-renders)
  const animStateRef = useRef({
    offset: 0,
    singleSetWidth: 0,
    baseSpeed: 28, // pixels per second
    targetSpeedRatio: 1.0,
    currentSpeedRatio: 1.0,
    isHovered: false,
    isFocused: false,
    isDragging: false,
    startX: 0,
    dragStartOffset: 0,
    lastTime: 0,
    isTabHidden: false,
    isReducedMotion: false,
    rafId: 0
  });

  // Measure single set width accurately
  const measureWidth = useCallback(() => {
    if (firstSetRef.current) {
      const width = firstSetRef.current.offsetWidth;
      if (width > 0) {
        animStateRef.current.singleSetWidth = width;
      }
    }
  }, []);

  useEffect(() => {
    // Check reduced motion
    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    animStateRef.current.isReducedMotion = reducedQuery.matches;

    const handleReducedChange = (e: MediaQueryListEvent) => {
      animStateRef.current.isReducedMotion = e.matches;
    };
    reducedQuery.addEventListener('change', handleReducedChange);

    // Initial measurement
    measureWidth();

    // Use ResizeObserver for responsive recalculation
    const resizeObserver = new ResizeObserver(() => {
      measureWidth();
    });

    if (firstSetRef.current) {
      resizeObserver.observe(firstSetRef.current);
    }

    // Visibility change handler (tab pause)
    const handleVisibilityChange = () => {
      animStateRef.current.isTabHidden = document.hidden;
      if (!document.hidden) {
        animStateRef.current.lastTime = performance.now();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Animation frame loop
    const state = animStateRef.current;
    state.lastTime = performance.now();

    const tick = (now: number) => {
      const deltaSeconds = Math.min((now - state.lastTime) / 1000, 0.1);
      state.lastTime = now;

      // Update target speed ratio based on interaction
      if (state.isReducedMotion || state.isFocused || state.isTabHidden) {
        state.targetSpeedRatio = 0;
      } else if (state.isHovered) {
        // Smoothly reduce to ~18% on hover
        state.targetSpeedRatio = 0.18;
      } else {
        // Full normal speed
        state.targetSpeedRatio = 1.0;
      }

      // Smooth deceleration/acceleration interpolation (lerp)
      state.currentSpeedRatio += (state.targetSpeedRatio - state.currentSpeedRatio) * 0.08;

      if (!state.isDragging && state.singleSetWidth > 0) {
        // Move horizontally (direction from right to left in RTL: incrementing offset)
        const step = state.baseSpeed * state.currentSpeedRatio * deltaSeconds;
        state.offset = (state.offset + step) % state.singleSetWidth;

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(-${state.offset}px, 0, 0)`;
        }
      }

      state.rafId = requestAnimationFrame(tick);
    };

    state.rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(state.rafId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reducedQuery.removeEventListener('change', handleReducedChange);
      resizeObserver.disconnect();
    };
  }, [measureWidth]);

  // Hover handlers for smooth deceleration
  const handleMouseEnter = () => {
    animStateRef.current.isHovered = true;
  };

  const handleMouseLeave = () => {
    animStateRef.current.isHovered = false;
  };

  // Keyboard accessibility
  const handleFocus = () => {
    animStateRef.current.isFocused = true;
  };

  const handleBlur = () => {
    animStateRef.current.isFocused = false;
  };

  // Touch and pointer drag interactions
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = animStateRef.current;
    state.isDragging = true;
    state.startX = e.clientX;
    state.dragStartOffset = state.offset;
    if (trackRef.current) {
      trackRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = animStateRef.current;
    if (!state.isDragging || state.singleSetWidth <= 0) return;

    // In RTL, dragging right moves content left (increases offset), dragging left decreases offset
    const deltaX = state.startX - e.clientX;
    let newOffset = (state.dragStartOffset + deltaX) % state.singleSetWidth;
    if (newOffset < 0) {
      newOffset += state.singleSetWidth;
    }
    state.offset = newOffset;

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(-${state.offset}px, 0, 0)`;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = animStateRef.current;
    state.isDragging = false;
    state.lastTime = performance.now();
    try {
      if (trackRef.current?.hasPointerCapture(e.pointerId)) {
        trackRef.current.releasePointerCapture(e.pointerId);
      }
    } catch {
      // ignore
    }
  };

  const renderCard = (rev: ReviewItem, keyPrefix: string, index: number) => (
    <div
      key={`${keyPrefix}-${index}`}
      className="w-[290px] sm:w-[350px] lg:w-[370px] h-[225px] flex-shrink-0 p-5 sm:p-6 rounded-2xl bg-surface-subtle border border-surface-border hover:border-brand-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between text-right select-none"
    >
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(rev.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
            ))}
          </div>
          <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-brand-200/80 flex-shrink-0" />
        </div>

        <p className="text-xs sm:text-sm text-ink leading-relaxed font-normal line-clamp-3">
          "{rev.comment}"
        </p>
      </div>

      <div className="pt-3 border-t border-surface-border/80 flex items-center justify-between">
        <div>
          <h4 className="text-xs sm:text-sm font-black text-ink flex items-center gap-1.5">
            <span>{rev.name}</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
          </h4>
          <p className="text-[10px] sm:text-[11px] text-ink-muted">{rev.role}</p>
        </div>

        <span className="text-[10px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-100/60">
          {rev.tag}
        </span>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      aria-label="آراء وتجارب العملاء"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="py-16 sm:py-20 bg-white border-b border-surface-border text-right relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            أهل الماهر يشاركون تجاربهم
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-ink tracking-tight">
            ثقة آلاف البيوت والمطاعم في كل أنحاء الجمهورية
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            شهادات حقيقية نعتز بها ونعمل كل يوم لنكون عند حسن ظنكم دائماً.
          </p>
        </div>
      </div>

      {/* CONTINUOUS MARQUEE CAROUSEL CONTAINER */}
      <div className="relative w-full overflow-hidden py-2 cursor-grab active:cursor-grabbing">
        
        {/* Left & Right Subtle Soft Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

        {/* Horizontal Marquee Track (Smooth Continuous Loop) */}
        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{ touchAction: 'pan-y' }}
          className="flex gap-4 sm:gap-6 will-change-transform select-none w-max"
        >
          {/* Original Sequence (Set 1) — Measured for loop width */}
          <div ref={firstSetRef} className="flex gap-4 sm:gap-6 flex-shrink-0">
            {REVIEWS_DATA.map((rev, idx) => renderCard(rev, 'set-1', idx))}
          </div>

          {/* Seamless Duplicate (Set 2) */}
          <div className="flex gap-4 sm:gap-6 flex-shrink-0">
            {REVIEWS_DATA.map((rev, idx) => renderCard(rev, 'set-2', idx))}
          </div>

          {/* Seamless Duplicate (Set 3) — ensures zero gaps on ultra-wide viewports */}
          <div className="flex gap-4 sm:gap-6 flex-shrink-0" aria-hidden="true">
            {REVIEWS_DATA.map((rev, idx) => renderCard(rev, 'set-3', idx))}
          </div>

          {/* Seamless Duplicate (Set 4) */}
          <div className="flex gap-4 sm:gap-6 flex-shrink-0" aria-hidden="true">
            {REVIEWS_DATA.map((rev, idx) => renderCard(rev, 'set-4', idx))}
          </div>
        </div>

      </div>

      {/* Bottom Trust Note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-200/80 max-w-xl mx-auto flex items-center justify-center gap-3 text-center text-xs font-bold text-brand-900 shadow-xs">
          <Heart className="w-4 h-4 text-brand-500 fill-brand-500 flex-shrink-0" />
          <span>كل طلب يُفرز ويُجهز يدوياً بحب وعناية فائقة ليرضي ذوقك</span>
        </div>
      </div>
    </section>
  );
};
