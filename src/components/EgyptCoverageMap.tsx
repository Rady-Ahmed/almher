import React, { useState } from 'react';
import { MapPin, ShieldCheck, Truck, Sparkles, Building2, ChevronLeft } from 'lucide-react';

interface GovernorateData {
  id: string;
  name: string;
  region: string;
  badge: string;
  x: number; // percentage in SVG map viewBox
  y: number; // percentage in SVG map viewBox
  coverageStatus: string;
  localProduceOrigin: string;
  deliveryTime: string;
  clientCount: string;
  description: string;
}

export const EGYPT_GOVERNORATES: GovernorateData[] = [
  {
    id: 'cairo-giza',
    name: 'القاهرة الكبرى والجيزة',
    region: 'العاصمة والمركز',
    badge: 'تغطية فورية نفس اليوم',
    x: 62,
    y: 35,
    coverageStatus: 'توصيل متاح يومياً على مدار الساعة',
    localProduceOrigin: 'مراكز الفرز الرئيسية والتوزيع السريع',
    deliveryTime: 'نفس اليوم (خلال ساعتين إلى 4 ساعات)',
    clientCount: '+45,000 منزل ومنشأة',
    description: 'أسرع خدمة توصيل طازجة تغطي كافة أحياء القاهرة، الجيزة، التجمع، الشيخ زايد، والمعادي، مع استلام فوري من مراكزنا.'
  },
  {
    id: 'alexandria',
    name: 'الإسكندرية والساحل الشمالي',
    region: 'عروس البحر المتوسط',
    badge: 'طازة نسيم البحر',
    x: 48,
    y: 19,
    coverageStatus: 'تغطية يومية كاملة',
    localProduceOrigin: 'مزارع كينج مريوط والبحيرة والساحل',
    deliveryTime: 'صباحي ومسائي يومياً',
    clientCount: '+18,000 عائلة سكندرية',
    description: 'من سموحة ومحرم بك إلى العجمي والساحل الشمالي، تصلكم خضروات وفواكه الماهر طازجة معطرة برائحة الصباح.'
  },
  {
    id: 'ismailia-canal',
    name: 'الإسماعيلية ومدن القناة',
    region: 'أرض المانجو والفراولة',
    badge: 'من قلب المزارع مباشرة',
    x: 74,
    y: 29,
    coverageStatus: 'مزارع التوريد الأولى للماهر',
    localProduceOrigin: 'مزارع عويس وسكري المانجو والفراولة',
    deliveryTime: 'توصيل يومي منتظم',
    clientCount: '+12,000 عميل',
    description: 'الإسماعيلية، بورسعيد، والسويس؛ حيث نحصد أشهر وأجود أنواع المانجو العويس والسكري ونوزعها لكافة محافظات مصر.'
  },
  {
    id: 'delta-heart',
    name: 'محافظات الدلتا الخصبة',
    region: 'الشرقية، الدقهلية، الغربية، المنوفية، القليوبية، كفر الشيخ',
    badge: 'سلة غذاء مصر الأصيلة',
    x: 58,
    y: 24,
    coverageStatus: 'تغطية شاملة لكل المراكز والقرى',
    localProduceOrigin: 'أراضي الطمي المصرية وأجود خضروات الحقل',
    deliveryTime: 'يومياً فجر كل يوم',
    clientCount: '+30,000 بيت مصري',
    description: 'منبت الخضار المصري الفلاحي: الطماطم، الخيار، البطاطس، الكوسة، والملوخية المورقة، نقطفها فجراً لتكون في مطبخك ظهراً.'
  },
  {
    id: 'upper-egypt',
    name: 'صعيد مصر الأبي',
    region: 'الفيوم، بني سويف، المنيا، أسيوط، سوهاج، قنا، الأقصر، أسوان',
    badge: 'خير النيل والشمس الدافئة',
    x: 64,
    y: 62,
    coverageStatus: 'خطوط توزيع منتظمة لكافة محافظات الصعيد',
    localProduceOrigin: 'رمان منفلوط، بلح أسوان، وموز وتين الصعيد',
    deliveryTime: 'توصيل يومي للمنازل والمنشآت',
    clientCount: '+22,000 عميل وشريك',
    description: 'من الفيوم وبني سويف إلى أسوان، نحمل فخر الزراعة المصرية وننقل أفضل محاصيل الصعيد لكل منزل بجودة لا تضاهى.'
  },
  {
    id: 'red-sea-sinai',
    name: 'البحر الأحمر وجنوب سيناء',
    region: 'الغردقة، الجونة، شرم الشيخ، دهب',
    badge: 'خدمة الفنادق والبيوت الفاخرة',
    x: 82,
    y: 52,
    coverageStatus: 'شحن مبرد معقم يحفظ درجة الطزاجة',
    localProduceOrigin: 'فرز أول فندقي عالي المعايير',
    deliveryTime: 'مجدول يومياً وشبه يومي',
    clientCount: '+8,500 عميل ومنتجع',
    description: 'توريدات فندقية ومنزلية معتمدة وفق أعلى معايير السلامة، نضمن فيها ثبات الجودة والنضارة في أصعب الأجواء الحارة.'
  }
];

export const EgyptCoverageMap: React.FC = () => {
  const [selectedGov, setSelectedGov] = useState<GovernorateData>(EGYPT_GOVERNORATES[0]);

  return (
    <section id="about-us" className="relative py-20 bg-ink text-white overflow-hidden">
      
      {/* Background Decorative Ambient Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        
        {/* BIG IMPACT HERO TYPOGRAPHY ("بامب وتيكست كبير") */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-300 text-xs sm:text-sm font-black tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span>من نحن — حكاية الماهر في مصر</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
            الـمـاهـر في كل <span className="text-brand-500 underline decoration-brand-500/50 underline-offset-8">بيت</span>،  
            الـمـاهـر في كل <span className="text-emerald-400">محافظة</span>
          </h2>

          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal pt-2">
            بدأنا بهدف واحد: أن يحصل كل بيت مصري على أنقى وأفضل حبة خضار وفاكهة وكأنه قطفها بيده من الحقل، 
            واليوم نسعى بكل فخر لنكون العلامة الأولى الموثوقة في كل ربوع الجمهورية.
          </p>
        </div>

        {/* 4 GIANT STATS TICKER ("أرقام وبامب الماهر") */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all text-center group">
            <span className="block text-4xl sm:text-5xl font-black text-brand-400 group-hover:scale-110 transition-transform">
              27
            </span>
            <span className="block text-sm sm:text-base font-extrabold text-white mt-1">محافظة تحت التغطية</span>
            <span className="text-[11px] text-gray-400 mt-0.5 block">من الإسكندرية لأسوان وسيناء</span>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all text-center group">
            <span className="block text-4xl sm:text-5xl font-black text-emerald-400 group-hover:scale-110 transition-transform">
              +150
            </span>
            <span className="block text-sm sm:text-base font-extrabold text-white mt-1">صنف خضار وفاكهة طازج</span>
            <span className="text-[11px] text-gray-400 mt-0.5 block">محاصيل يومية متجددة</span>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all text-center group">
            <span className="block text-4xl sm:text-5xl font-black text-amber-400 group-hover:scale-110 transition-transform">
              100%
            </span>
            <span className="block text-sm sm:text-base font-extrabold text-white mt-1">فرز وفحص يدوي فندقي</span>
            <span className="text-[11px] text-gray-400 mt-0.5 block">استبعاد تام لأي حبة تالفة</span>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all text-center group">
            <span className="block text-4xl sm:text-5xl font-black text-sky-400 group-hover:scale-110 transition-transform">
              +100K
            </span>
            <span className="block text-sm sm:text-base font-extrabold text-white mt-1">عائلة تثق في الماهر</span>
            <span className="text-[11px] text-gray-400 mt-0.5 block">طازة يوم بيوم وسرعة طلب</span>
          </div>
        </div>

        {/* INTERACTIVE EGYPT MAP & REGION EXPLORER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-lg">
          
          {/* LEFT/TOP: Stylized Interactive SVG Map of Egypt */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center p-4">
            
            <div className="w-full max-w-md aspect-[4/3.8] relative bg-black/40 rounded-3xl border border-white/10 p-4 overflow-hidden flex items-center justify-center shadow-2xl">
              
              {/* Map Outline & River Nile Representation */}
              <svg viewBox="0 0 400 380" className="w-full h-full text-gray-700/60" fill="none" stroke="currentColor" strokeWidth="1.5">
                {/* Simplified Stylized Egypt Borders */}
                <path
                  d="M 60,60 L 150,55 L 200,45 L 270,40 L 320,60 L 340,90 L 320,130 L 290,140 L 310,210 L 340,280 L 350,340 L 80,340 L 60,60 Z"
                  fill="#18181B"
                  stroke="#3F3F46"
                  strokeWidth="2"
                  className="transition-colors hover:fill-zinc-800"
                />
                {/* Sinai Peninsula */}
                <path
                  d="M 270,40 L 330,45 L 340,95 L 310,140 L 285,115 L 270,40 Z"
                  fill="#27272A"
                  stroke="#52525B"
                  strokeWidth="1.5"
                />
                {/* River Nile and Delta (River of Life in Cyan) */}
                <path
                  d="M 235,50 Q 215,80 200,120 T 195,190 T 215,250 T 235,310 T 240,340"
                  stroke="#06B6D4"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="opacity-70 animate-pulse"
                />
                {/* Nile Delta Branches */}
                <path
                  d="M 200,120 L 175,60 M 200,120 L 225,55 M 200,120 L 255,65"
                  stroke="#06B6D4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="opacity-70"
                />
              </svg>

              {/* Interactive Governorate Hotspots with Brand Logos & Pulsing Rings */}
              {EGYPT_GOVERNORATES.map((gov) => {
                const isSelected = selectedGov.id === gov.id;

                return (
                  <button
                    key={gov.id}
                    onClick={() => setSelectedGov(gov)}
                    style={{ left: `${gov.x}%`, top: `${gov.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 cursor-pointer"
                    title={gov.name}
                  >
                    {/* Glowing radar pulse ring */}
                    <span className="absolute -inset-2 rounded-full bg-brand-500/40 animate-ping" />
                    
                    {/* Al Maher Logo Mark on Map Node */}
                    <div
                      className={`relative w-8 h-8 rounded-full flex items-center justify-center p-1 transition-all duration-300 shadow-lg ${
                        isSelected
                          ? 'bg-brand-500 scale-125 ring-4 ring-white shadow-brand-500/50'
                          : 'bg-white hover:bg-brand-500 hover:scale-110'
                      }`}
                    >
                      <img
                        src="/favicon.svg"
                        alt="الماهر"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Tooltip Label */}
                    <div
                      className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[10px] font-black whitespace-nowrap shadow-md transition-all ${
                        isSelected
                          ? 'bg-white text-ink font-bold opacity-100 scale-100'
                          : 'bg-black/80 text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100'
                      }`}
                    >
                      {gov.name}
                    </div>
                  </button>
                );
              })}

              <div className="absolute bottom-3 left-4 text-[10px] text-gray-400 bg-black/60 px-2 py-1 rounded-md border border-white/10">
                خريطة التغطية الرسمية — الماهر مصر
              </div>
            </div>

            {/* Quick Region Selector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 w-full">
              {EGYPT_GOVERNORATES.map((gov) => (
                <button
                  key={gov.id}
                  onClick={() => setSelectedGov(gov)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedGov.id === gov.id
                      ? 'bg-brand-500 text-white shadow-md'
                      : 'bg-white/10 hover:bg-white/20 text-gray-300'
                  }`}
                >
                  {gov.name.split(' ')[0]}
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT/BOTTOM: Selected Governorate Comprehensive Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header of Active Region */}
            <div className="space-y-2 border-b border-white/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  {selectedGov.badge}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-brand-400" />
                  {selectedGov.region}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {selectedGov.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {selectedGov.description}
              </p>
            </div>

            {/* Feature Cards for the Region */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-brand-400 text-xs font-extrabold">
                  <Truck className="w-4 h-4 flex-shrink-0" />
                  <span>طريقة ومواعيد التوصيل</span>
                </div>
                <p className="text-xs text-white font-semibold">{selectedGov.deliveryTime}</p>
                <p className="text-[11px] text-gray-400">{selectedGov.coverageStatus}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-extrabold">
                  <Sparkles className="w-4 h-4 flex-shrink-0" />
                  <span>مصدر المحصول المحلي</span>
                </div>
                <p className="text-xs text-white font-semibold">{selectedGov.localProduceOrigin}</p>
                <p className="text-[11px] text-gray-400">فرز وتعبئة احترافية</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-extrabold">
                  <Building2 className="w-4 h-4 flex-shrink-0" />
                  <span>ثقة العملاء والمنشآت</span>
                </div>
                <p className="text-xs text-white font-semibold">{selectedGov.clientCount}</p>
                <p className="text-[11px] text-gray-400">منازل، مطاعم، وفنادق</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-extrabold">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>ضمان الجودة والطزاجة</span>
                </div>
                <p className="text-xs text-white font-semibold">استبدال أو إرجاع فوري</p>
                <p className="text-[11px] text-gray-400">حق العميل في المعاينة قبل الاستلام</p>
              </div>

            </div>

            {/* Bottom Callout */}
            <div className="p-4 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center text-white font-black">
                  ✓
                </div>
                <div>
                  <span className="font-extrabold text-white block">هل أنت في {selectedGov.name}؟</span>
                  <span className="text-[11px] text-gray-400">اطلب الآن وسنصلك أينما كنت بأعلى طزاجة وأفضل جودة.</span>
                </div>
              </div>

              <a
                href="#catalog"
                className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-xs transition-colors flex items-center gap-1"
              >
                <span>تسوق الآن</span>
                <ChevronLeft className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
