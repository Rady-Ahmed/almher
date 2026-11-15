import React, { useEffect, useRef } from 'react';
import { StoreSettings } from '../types';
import { MessageCircle, MapPin, Clock, Heart, Download, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { isWhatsAppConfigured, cleanPhoneNumber } from '../utils/whatsapp';

interface FooterProps {
  settings: StoreSettings | null;
  onOpenAdmin: () => void;
  onInstallClick?: () => void;
  canInstall?: boolean;
}

/* ─────────────────────────────────────────────
   Minimal SVG Line-Art shapes (Fruit / Leaf)
───────────────────────────────────────────── */
const StrawberryArt: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 60 72" fill="none" className={className} aria-hidden="true">
    {/* leaves */}
    <path d="M30 18 C24 10 14 8 18 2 C22 8 28 12 30 18Z" stroke="#D92732" strokeWidth="1.2" strokeLinejoin="round" fill="none" opacity="0.5"/>
    <path d="M30 18 C36 10 46 8 42 2 C38 8 32 12 30 18Z" stroke="#D92732" strokeWidth="1.2" strokeLinejoin="round" fill="none" opacity="0.5"/>
    <path d="M30 18 C30 10 30 4 30 2" stroke="#D92732" strokeWidth="1" fill="none" opacity="0.4"/>
    {/* body */}
    <path d="M30 22 C18 22 10 32 12 46 C14 58 22 68 30 70 C38 68 46 58 48 46 C50 32 42 22 30 22Z" stroke="#D92732" strokeWidth="1.4" fill="none" opacity="0.45"/>
    {/* seed dots */}
    <circle cx="22" cy="40" r="1.2" fill="#D92732" opacity="0.4"/>
    <circle cx="30" cy="35" r="1.2" fill="#D92732" opacity="0.4"/>
    <circle cx="38" cy="40" r="1.2" fill="#D92732" opacity="0.4"/>
    <circle cx="25" cy="52" r="1.2" fill="#D92732" opacity="0.35"/>
    <circle cx="35" cy="52" r="1.2" fill="#D92732" opacity="0.35"/>
  </svg>
);

const OrangeArt: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 72 72" fill="none" className={className} aria-hidden="true">
    {/* outer circle */}
    <circle cx="36" cy="38" r="28" stroke="#D92732" strokeWidth="1.3" fill="none" opacity="0.4"/>
    {/* segments */}
    <line x1="36" y1="10" x2="36" y2="66" stroke="#D92732" strokeWidth="0.9" opacity="0.3"/>
    <line x1="8"  y1="38" x2="64" y2="38" stroke="#D92732" strokeWidth="0.9" opacity="0.3"/>
    <line x1="16" y1="18" x2="56" y2="58" stroke="#D92732" strokeWidth="0.9" opacity="0.25"/>
    <line x1="56" y1="18" x2="16" y2="58" stroke="#D92732" strokeWidth="0.9" opacity="0.25"/>
    {/* stem + leaf */}
    <path d="M36 10 C36 6 36 3 36 2" stroke="#D92732" strokeWidth="1.1" fill="none" opacity="0.5"/>
    <path d="M36 6 C40 4 46 2 42 -2" stroke="#D92732" strokeWidth="1" fill="none" opacity="0.4"/>
  </svg>
);

const LeafArt: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 50 80" fill="none" className={className} aria-hidden="true">
    <path d="M25 75 C25 75 5 55 5 35 C5 15 25 5 25 5 C25 5 45 15 45 35 C45 55 25 75 25 75Z" stroke="#D92732" strokeWidth="1.3" fill="none" opacity="0.4"/>
    <path d="M25 75 L25 5" stroke="#D92732" strokeWidth="1" fill="none" opacity="0.35"/>
    <path d="M25 55 C15 48 10 40 12 32" stroke="#D92732" strokeWidth="0.8" fill="none" opacity="0.3"/>
    <path d="M25 55 C35 48 40 40 38 32" stroke="#D92732" strokeWidth="0.8" fill="none" opacity="0.3"/>
    <path d="M25 40 C18 35 14 28 16 22" stroke="#D92732" strokeWidth="0.8" fill="none" opacity="0.25"/>
    <path d="M25 40 C32 35 36 28 34 22" stroke="#D92732" strokeWidth="0.8" fill="none" opacity="0.25"/>
  </svg>
);

/* ─────────────────────────────────────────────
   Animated flowing wave SVG (top divider)
───────────────────────────────────────────── */
const WaterFlowDivider: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let raf: number;
    let t = 0;

    const animate = () => {
      t += 0.004;
      if (pathRef.current) {
        const amp = 18;
        const d = `
          M0,60
          C120,${60 - amp * Math.sin(t)},240,${60 + amp * Math.cos(t + 0.5)},360,${60 - amp * Math.sin(t + 1)}
          C480,${60 + amp * Math.cos(t + 1.5)},600,${60 - amp * Math.sin(t + 2)},720,${60 + amp * Math.cos(t + 2.5)}
          C840,${60 - amp * Math.sin(t + 3)},960,${60 + amp * Math.cos(t + 3.5)},1080,${60 - amp * Math.sin(t + 4)}
          C1200,${60 + amp * Math.cos(t + 4.5)},1320,${60 - amp * Math.sin(t + 5)},1440,60
          L1440,120 L0,120 Z
        `;
        pathRef.current.setAttribute('d', d);
      }
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full overflow-hidden leading-none" style={{ height: 90 }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* subtle glow behind wave */}
        <defs>
          <filter id="waveGlow" x="-5%" y="-20%" width="110%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#F7F7F5"/>
            <stop offset="30%"  stopColor="#fff"/>
            <stop offset="70%"  stopColor="#F7F7F5"/>
            <stop offset="100%" stopColor="#F5F4F0"/>
          </linearGradient>
          {/* shimmer gradient that travels along the wave */}
          <linearGradient id="shimmer" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="rgba(217,39,50,0)" />
            <stop offset="45%"  stopColor="rgba(217,39,50,0.08)" />
            <stop offset="55%"  stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="rgba(217,39,50,0)" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1 0" to="2 0"
              dur="4s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        {/* Background fill — same colour as footer */}
        <rect width="1440" height="120" fill="#1a1a1a"/>

        {/* Wave fill from page bg → footer bg */}
        <path
          ref={pathRef}
          d="M0,60 C360,20 1080,100 1440,60 L1440,120 L0,120 Z"
          fill="#1a1a1a"
        />

        {/* Top of wave — off-white from search section */}
        <path
          d="M0,0 L1440,0 L1440,60 C1080,100 360,20 0,60 Z"
          fill="#F7F7F5"
        />

        {/* Shimmer layer on the wave edge */}
        <path
          d="M0,0 L1440,0 L1440,60 C1080,100 360,20 0,60 Z"
          fill="url(#shimmer)"
          opacity="0.6"
        />

        {/* Soft top-edge line of the wave */}
        <path
          d="M0,60 C360,20 1080,100 1440,60"
          stroke="rgba(217,39,50,0.15)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Floating light particles (lazy canvas)
───────────────────────────────────────────── */
const FooterParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = 22;
    const dots = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.5 + 0.1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217,39,50,${d.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.45 }}
    />
  );
};

/* ─────────────────────────────────────────────
   Main Footer Component
───────────────────────────────────────────── */
export const Footer: React.FC<FooterProps> = ({
  settings,
  onOpenAdmin,
  onInstallClick,
  canInstall,
}) => {
  const isWaReady = isWhatsAppConfigured(settings);
  const waNumber  = isWaReady ? cleanPhoneNumber(settings!.whatsapp_number) : '';
  const waLink    = waNumber ? `https://wa.me/${waNumber}` : '#';

  const navLinks = [
    { href: '#hero',           label: 'الرئيسية' },
    { href: '#catalog',        label: 'كل المنتجات' },
    { href: '#categories',     label: 'أقسام المنتجات' },
    { href: '#special-offers', label: 'عروض التوفير' },
    { href: '#about-us',       label: 'الماهر في مصر' },
    { href: '#why-us',         label: 'لماذا الماهر؟' },
  ];

  return (
    <>
      {/* ── Water-flow transition ── */}
      <WaterFlowDivider />

      {/* ── Main footer body ── */}
      <footer
        className="relative bg-[#1a1a1a] text-white text-right overflow-hidden"
        style={{ direction: 'rtl' }}
      >
        {/* Floating particles layer */}
        <FooterParticles />

        {/* Subtle radial glow behind content */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(217,39,50,0.07) 0%, transparent 70%)',
          }}
        />

        {/* ── Decorative fruit line-arts ── */}
        <div
          className="absolute left-6 top-10 opacity-25 pointer-events-none select-none hidden lg:block"
          aria-hidden="true"
        >
          <LeafArt className="w-14 h-20" />
        </div>
        <div
          className="absolute left-28 bottom-16 opacity-20 pointer-events-none select-none hidden lg:block"
          aria-hidden="true"
        >
          <OrangeArt className="w-16 h-16" />
        </div>
        <div
          className="absolute right-10 bottom-20 opacity-20 pointer-events-none select-none hidden lg:block"
          aria-hidden="true"
        >
          <StrawberryArt className="w-12 h-14" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">

            {/* ── Brand column ── */}
            <div className="lg:col-span-5 space-y-5">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center p-1.5 shadow-lg flex-shrink-0"
                  style={{ background: 'rgba(217,39,50,0.15)', border: '1px solid rgba(217,39,50,0.3)' }}
                >
                  <img
                    src="/logo-white.svg"
                    alt="شعار الماهر"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/favicon.svg';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-white leading-tight">
                    الـمـاهـر
                  </h3>
                  <span className="text-[11px] font-bold text-[#D92732] font-mono tracking-widest">
                    AL MAHER GROCERY
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-loose max-w-xs">
                «الطازة تبدأ من الماهر» — متجركم الأول لتسوق الخضروات والفاكهة الطازجة الفاخرة،
                المنتقاة بعناية يومياً من أخصب مزارع مصر مباشرةً إلى باب بيتكم.
              </p>

              {/* WhatsApp CTA button */}
              {isWaReady ? (
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200 shadow-md group"
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #1aad52 100%)',
                    color: '#fff',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = '')}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>اطلب عبر الواتساب الآن</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs text-gray-500 border border-white/10">
                  <MessageCircle className="w-4 h-4" />
                  <span>الواتساب قيد التهيئة في لوحة الإدارة</span>
                </div>
              )}

              {/* PWA Install */}
              {canInstall && (
                <button
                  onClick={onInstallClick}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors border border-white/10"
                >
                  <Download className="w-4 h-4 text-[#D92732]" />
                  <span>تثبيت تطبيق الماهر</span>
                </button>
              )}
            </div>

            {/* ── Quick nav ── */}
            <div className="sm:col-span-1 lg:col-span-3 space-y-4">
              <h4 className="text-sm font-extrabold text-white flex items-center gap-2 after:flex-1 after:h-px after:bg-white/10">
                تصفح المتجر
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-xs text-gray-400 hover:text-[#D92732] transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-[#D92732] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact info ── */}
            <div className="sm:col-span-1 lg:col-span-4 space-y-4">
              <h4 className="text-sm font-extrabold text-white flex items-center gap-2 after:flex-1 after:h-px after:bg-white/10">
                بيانات المتجر والتواصل
              </h4>
              <div className="space-y-3 text-xs text-gray-400">
                {/* Working hours */}
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#D92732] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">مواعيد العمل:</span>
                    <span className="leading-relaxed text-gray-300">
                      {settings?.working_hours || 'خدمة توصيل 24 ساعة يومياً (على مدار الساعة)'}
                    </span>
                  </div>
                </div>

                {/* Location / Google Maps */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D92732] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">المقر الرئيسي:</span>
                    <span className="leading-relaxed text-gray-300 block">
                      {settings?.store_address || 'مركز مغاغة — محافظة المنيا'}
                    </span>
                    <a
                      href={settings?.maps_url || 'https://goo.gl/maps/bNQs294idzVw6WyAA?g_st=ac'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-400 hover:text-brand-300 mt-1 transition-colors"
                    >
                      <span>عرض موقع المتجر على خرائط Google</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-center gap-2.5 pt-1">
                  <Phone className="w-4 h-4 text-[#D92732] flex-shrink-0" />
                  <div className="flex items-center gap-3">
                    <a
                      href="tel:01155416650"
                      className="font-mono text-white font-bold hover:text-[#D92732] transition-colors"
                      dir="ltr"
                    >
                      01155416650
                    </a>
                    <span className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded-md">اتصال وواتساب</span>
                  </div>
                </div>

                {/* Facebook Page Button */}
                <div className="pt-2">
                  <a
                    href={settings?.facebook_url || 'https://www.facebook.com/share/1CFo1teCHV/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1877F2]/15 hover:bg-[#1877F2]/25 text-white text-xs font-bold transition-all border border-[#1877F2]/30 group"
                  >
                    <svg className="w-4 h-4 fill-[#1877F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>صفحتنا الرسمية على فيسبوك</span>
                    <ExternalLink className="w-3 h-3 text-gray-400 opacity-70" />
                  </a>
                </div>
              </div>

              {/* Thin decorative separator */}
              <div className="border-t border-white/10 pt-3">
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  توصيل سريع ومباشر في مغاغة وكافة أنحاء المنيا والجمهورية.
                </p>
              </div>
            </div>

          </div>{/* /grid */}

          {/* ── Bottom bar ── */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
            <p>© {new Date().getFullYear()} الماهر | AL MAHER. جميع الحقوق محفوظة.</p>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                صُنع بشغف للمنتج المصري الطازج
                <Heart className="w-3 h-3 text-[#D92732] fill-[#D92732]" aria-hidden="true" />
              </span>
              <span className="text-gray-700">·</span>
              <button
                onClick={onOpenAdmin}
                className="text-xs font-bold text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
                title="فتح لوحة تحكم المسؤول"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                <span>لوحة الإدارة</span>
              </button>
            </div>
          </div>

        </div>{/* /content */}
      </footer>
    </>
  );
};
