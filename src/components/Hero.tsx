import React from 'react';
import { ArrowLeft, CheckCircle2, ShoppingBag, LayoutGrid } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onShopClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[580px] sm:min-h-[680px] lg:min-h-[760px] w-full flex flex-col justify-between overflow-hidden bg-[#F7F7F5] select-none border-b border-surface-border"
    >
      {/* 1. REAL, VIBRANT FRESH PRODUCE PHOTOGRAPH WITH NATURAL DAYLIGHT */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=2000&q=95"
          alt="تشكيلة خضروات وفاكهة طازجة - الماهر"
          className="w-full h-full object-cover object-center hero-cinematic-bg filter brightness-[1.03] contrast-[1.04]"
          loading="eager"
        />

        {/* Soft Natural Daylight Spotlight: Illuminates the 3D typography without washing out produce */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.72)_0%,_rgba(255,255,255,0.30)_55%,_transparent_100%)]" />

        {/* Ambient Top & Bottom Light Fill */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/35" />
      </div>

      {/* 2. UNIFIED IMMERSIVE 3D HERO CONTENT (Cohesive Single Advertising Unit) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 flex-1 flex flex-col items-center justify-center text-center">
        
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
          
          {/* FIRST: Official AL MAHER SVG Logo — Responsive (110–140px on Mobile, Desktop Untouched) */}
          <div className="hero-reveal-1 flex flex-col items-center justify-center mb-2 sm:mb-3">
            <div className="w-[110px] min-[360px]:w-[122px] min-[390px]:w-[132px] min-[414px]:w-[140px] md:w-[170px] max-w-[140px] md:max-w-[175px] flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <img
                src="/logo.svg"
                alt="شعار الماهر الرسمي"
                className="w-full h-auto object-contain select-none drop-shadow-xs"
                width={320}
                height={80}
                style={{ aspectRatio: '320 / 80' }}
              />
            </div>
          </div>

          {/* SECOND: Main Headline with Immersive 3D Typography */}
          <h1 className="flex flex-col items-center justify-center tracking-tight leading-none w-full">
            
            {/* Headline Line 1: «الطازة تبدأ من» with Tactile Depth */}
            <span className="hero-reveal-2 hero-3d-title block text-2xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-1.5">
              الطازة تبدأ من
            </span>

            {/* Headline Line 2: «الـمـاهـر» — 3D Arabic Extrusion & Signature Oval Loop */}
            <div className="hero-depth-reveal relative inline-block my-1.5 sm:my-2 px-6 sm:px-12 py-1.5 sm:py-3 max-w-full">
              
              {/* Organic Hand-Drawn Calligraphic SVG Oval Loop */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-visible"
                viewBox="0 0 340 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 170 10 C 265 8, 332 28, 330 62 C 328 96, 255 112, 170 112 C 85 112, 8 96, 10 62 C 12 28, 75 10, 175 9"
                  stroke="#D92732"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  className="hero-oval-stroke"
                />
              </svg>

              {/* «الـمـاهـر» Realistic 3D Extruded Display Typography */}
              <span className="hero-3d-wordmark relative z-10 block text-5xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-none font-['Cairo']">
                الـمـاهـر
              </span>
            </div>

          </h1>

          {/* THIRD: Marketing Description Connected Visually */}
          <p className="hero-reveal-4 text-xs sm:text-base lg:text-lg text-ink font-semibold leading-relaxed max-w-2xl mx-auto mt-2.5 sm:mt-4 px-2 sm:px-3 drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]">
            اختار خضارك وفاكهتك المفضلة من أكثر من 150 صنفًا مختارًا بعناية، واجمع طلبك بسهولة وأرسله مباشرة عبر واتساب.
          </p>

          {/* FOURTH: Action Buttons as Part of the Integrated Composition */}
          <div className="hero-reveal-5 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full sm:w-auto mt-4 sm:mt-6">
            {/* Primary CTA: تسوق الآن with Tactile 3D Lift */}
            <button
              onClick={onShopClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 sm:px-8 sm:py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm sm:text-base shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 tap-tactile"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>تسوق الآن</span>
            </button>

            {/* Secondary CTA: اكتشف الأقسام */}
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-4 rounded-xl bg-white/85 hover:bg-white text-ink font-bold text-sm sm:text-base border border-surface-border/90 hover:border-zinc-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 tap-tactile backdrop-blur-sm"
            >
              <LayoutGrid className="w-4 h-4 text-brand-500" />
              <span>اكتشف الأقسام</span>
              <ArrowLeft className="w-4 h-4 text-ink-muted mr-1" />
            </button>
          </div>

        </div>

      </div>

      {/* FIFTH: Store Features Unified Horizontal Bar (مميزات المتجر) */}
      <div className="hero-reveal-6 relative z-10 w-full max-w-4xl mx-auto px-3 sm:px-4 pb-4 sm:pb-6">
        <div className="w-full rounded-2xl bg-white/75 backdrop-blur-md border border-white/70 px-4 sm:px-8 py-3 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-surface-border/80">
            
            {/* Feature 1 */}
            <div className="flex items-center justify-center gap-2.5 py-1 sm:py-0">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-brand-50 text-brand-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-ink">فرز يدوي حبة بحبة</span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center justify-center gap-2.5 pt-1.5 sm:pt-0">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-brand-50 text-brand-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-ink">طلب سلس بالواتساب</span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center justify-center gap-2.5 pt-1.5 sm:pt-0">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-brand-50 text-brand-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-ink">خدمة توصيل 24 ساعة — مغاغة</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
