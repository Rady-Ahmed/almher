import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Clock, Flame, ArrowLeft, Mic, Sparkles, Filter, Check } from 'lucide-react';
import { Product } from '../types';
import { getRecentSearches, saveRecentSearch, clearRecentSearches, matchesSearchQuery } from '../utils/search';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultsCount: number;
  products?: Product[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  onSelectProduct?: (product: Product) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  resultsCount,
  products = [],
  selectedCategory = 'all',
  onSelectCategory,
  onSelectProduct
}) => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceNotification, setVoiceNotification] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Animated Typing Placeholder
  const placeholderPhrases = [
    'طماطم بلدي طازجة...',
    'فراولة سكري فاخرة...',
    'موز بلدي مستوي...',
    'مانجو عويس فاخر...',
    'خيار بلدي طازج...',
    'تفاح أحمر سكري...',
    'بطاطس تحمير ممتازة...'
  ];

  const [currentPlaceholder, setCurrentPlaceholder] = useState('');

  // Category filter options
  const categoryFilters = [
    { id: 'all', label: 'الكل' },
    { id: 'vegetables', label: '🥕 خضروات' },
    { id: 'fruits', label: '🍎 فواكه' },
    { id: 'leafy', label: '🌿 ورقيات' },
    { id: 'seasonal', label: '🌟 موسمي' },
  ];

  useEffect(() => {
    setRecentSearches(getRecentSearches());

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    // Typing effect loop
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCurrentPlaceholder('طماطم، بطاطس، مانجو، فراولة...');
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const typeLoop = () => {
      const currentPhrase = placeholderPhrases[phraseIndex];

      if (!isDeleting) {
        charIndex++;
        setCurrentPlaceholder(currentPhrase.substring(0, charIndex));

        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          timer = setTimeout(typeLoop, 2000);
          return;
        }
        timer = setTimeout(typeLoop, 95);
      } else {
        charIndex--;
        setCurrentPlaceholder(currentPhrase.substring(0, charIndex));

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % placeholderPhrases.length;
          timer = setTimeout(typeLoop, 450);
          return;
        }
        timer = setTimeout(typeLoop, 45);
      }
    };

    timer = setTimeout(typeLoop, 500);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Voice Search Handler (Web Speech API with Arabic Support)
  const toggleVoiceSearch = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceNotification('البحث الصوتي غير مدعوم في متصفحك حالياً.');
      setTimeout(() => setVoiceNotification(null), 3500);
      return;
    }

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      recognition.lang = 'ar-EG'; // Egyptian Arabic by default
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
        setVoiceNotification('جاري الاستماع... تحدّث الآن باسم الصنف');
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results?.[0]?.[0]?.transcript;
        if (transcript) {
          const cleanTranscript = transcript.trim();
          onSearchChange(cleanTranscript);
          saveRecentSearch(cleanTranscript);
          setRecentSearches(getRecentSearches());
          setShowDropdown(true);
          setVoiceNotification(`تم البحث عن: "${cleanTranscript}"`);
          setTimeout(() => setVoiceNotification(null), 2500);
        }
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        console.warn('Voice recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setVoiceNotification('يرجى السماح بالوصول إلى الميكروفون للبحث بالصوت.');
        } else {
          setVoiceNotification('لم نتمكن من التقاط الصوت، حاول مجدداً.');
        }
        setTimeout(() => setVoiceNotification(null), 3000);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (err) {
      console.error('Speech recognition start failed:', err);
      setIsListening(false);
      setVoiceNotification('حدث خطأ أثناء تفعيل الميكروفون.');
      setTimeout(() => setVoiceNotification(null), 3000);
    }
  };

  const handleSelectRecent = (term: string) => {
    onSearchChange(term);
    saveRecentSearch(term);
    setShowDropdown(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      saveRecentSearch(searchQuery);
      setRecentSearches(getRecentSearches());
      setShowDropdown(false);
    }
  };

  const handleClear = () => {
    onSearchChange('');
    setShowDropdown(false);
  };

  // Smart Matching Suggestions (Instant predictive products as user types)
  const smartProductSuggestions = useMemo(() => {
    if (!searchQuery.trim() || !products.length) return [];
    return products
      .filter((prod) => matchesSearchQuery(prod, searchQuery))
      .slice(0, 4);
  }, [products, searchQuery]);

  const popularSuggestions = ['طماطم بلدي', 'بطاطس تحمير', 'مانجو عويس', 'فراولة', 'خيار بلدي', 'تفاح أحمر', 'ملوخية'];

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 fade-up-enter select-none">
      
      {/* 1. CINEMATIC AMBIENT SOFT LIGHTING & FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Center Radial Red & Daylight Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[560px] h-[120px] sm:h-[160px] bg-brand-500/[0.045] blur-[70px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[420px] h-[80px] sm:h-[110px] bg-white blur-[40px] rounded-full" />

        {/* Floating Light Particles: Subtle, low-opacity, gently drifting */}
        <div className="absolute top-2 right-12 w-2 h-2 rounded-full bg-brand-500/30 blur-[1px] particle-float-1" />
        <div className="absolute -top-2 left-16 w-3 h-3 rounded-full bg-white/90 blur-[1.5px] shadow-[0_0_8px_rgba(255,255,255,0.9)] particle-float-2" />
        <div className="absolute bottom-3 right-1/4 w-2 h-2 rounded-full bg-amber-300/35 blur-[1px] particle-float-3" />
        <div className="absolute bottom-1 left-12 w-2.5 h-2.5 rounded-full bg-brand-400/25 blur-[1px] particle-float-1" />
        <div className="absolute top-6 left-1/3 w-1.5 h-1.5 rounded-full bg-white/80 blur-[0.5px] particle-float-2" />
      </div>

      {/* 2. DEDICATED SECTION HEADING & SUBTITLE */}
      <div className="relative z-10 text-center mb-5 sm:mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-ink tracking-tight">
          بتدور على إيه النهارده؟
        </h2>
        <p className="text-xs sm:text-sm text-ink-muted mt-1.5 font-normal">
          اعثر على خضرواتك وفاكهتك المفضلة بسهولة.
        </p>
      </div>

      {/* 3. CINEMATIC LIGHT SEARCH BAR BOX (With Voice Search & Clear) */}
      <div className="relative z-10">
        <div
          className={`group relative flex items-center bg-white rounded-2xl transition-all duration-300 ease-out shadow-[0_8px_30px_rgba(0,0,0,0.05),_0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] border ${
            isFocused || isListening
              ? 'border-brand-500 ring-4 ring-brand-500/15 shadow-[0_14px_40px_rgba(217,39,50,0.14)]'
              : 'border-zinc-200/85 hover:border-zinc-300 ring-1 ring-black/[0.03]'
          }`}
        >
          {/* Subtle Glass Specular Top Highlight */}
          <div className="absolute inset-x-0 top-0 h-[45%] rounded-t-2xl bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />

          {/* Search Icon */}
          <div className="absolute right-4.5 pointer-events-none text-ink-muted flex items-center justify-center">
            <Search
              className={`w-5 h-5 transition-all duration-300 ${
                isFocused || isListening ? 'text-brand-500 scale-110' : 'text-brand-500/90'
              }`}
            />
          </div>

          {/* Input with Animated Typing Placeholder */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              onSearchChange(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => {
              setIsFocused(true);
              setShowDropdown(true);
            }}
            onKeyDown={handleKeyDown}
            placeholder={
              searchQuery
                ? ''
                : isFocused
                ? 'ابحث بالاسم أو تحدث بالصوت (طماطم، فراولة، نعناع...)'
                : `ابحث عن ${currentPlaceholder}`
            }
            className="w-full pr-12 pl-24 sm:pl-28 py-3.5 sm:py-4 rounded-2xl bg-transparent text-sm sm:text-base text-ink placeholder:text-ink-muted/70 focus:outline-none transition-colors relative z-10"
            dir="rtl"
          />

          {/* Action Icons Group: Clear Button + Voice Search Mic Button */}
          <div className="absolute left-3.5 flex items-center gap-1.5 z-10">
            {/* Clear Button */}
            {searchQuery && (
              <button
                onClick={handleClear}
                className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-subtle transition-colors tap-tactile"
                title="مسح البحث"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Voice Search Microphone Button */}
            <button
              onClick={toggleVoiceSearch}
              className={`p-2 rounded-xl transition-all duration-200 tap-tactile flex items-center justify-center ${
                isListening
                  ? 'bg-brand-500 text-white animate-pulse ring-4 ring-brand-500/25 shadow-md'
                  : 'text-ink-muted hover:text-brand-600 hover:bg-brand-50'
              }`}
              title={isListening ? 'إيقاف الاستماع' : 'البحث بالصوت'}
              aria-label="البحث بالصوت"
            >
              {isListening ? (
                <div className="flex items-center gap-1">
                  <Mic className="w-4 h-4" />
                  <span className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 bg-white voice-wave-1 rounded-full" />
                    <span className="w-0.5 bg-white voice-wave-2 rounded-full" />
                    <span className="w-0.5 bg-white voice-wave-3 rounded-full" />
                  </span>
                </div>
              ) : (
                <Mic className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-brand-500" />
              )}
            </button>
          </div>
        </div>

        {/* Live Voice Notification / Feedback Toast */}
        {voiceNotification && (
          <div className="mt-2.5 px-3.5 py-2 rounded-xl bg-brand-50/90 backdrop-blur-sm border border-brand-200/80 text-brand-800 text-xs font-bold flex items-center gap-2 fade-in shadow-xs">
            {isListening ? (
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            )}
            <span>{voiceNotification}</span>
          </div>
        )}

        {/* 4. SMART QUICK FILTER PILLS (Instant Category Filtering) */}
        {onSelectCategory && (
          <div className="mt-3.5 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-[11px] font-bold text-ink-muted flex items-center gap-1 flex-shrink-0">
              <Filter className="w-3 h-3 text-brand-500" />
              تصفية سريعة:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
              {categoryFilters.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all duration-200 tap-tactile flex-shrink-0 flex items-center gap-1 ${
                      isActive
                        ? 'bg-brand-500 text-white shadow-xs'
                        : 'bg-white hover:bg-brand-50 hover:text-brand-700 text-ink border border-surface-border'
                    }`}
                  >
                    <span>{cat.label}</span>
                    {isActive && <Check className="w-3 h-3 mr-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Search Results Count Indicator */}
        {searchQuery && (
          <div className="mt-2.5 flex items-center justify-between text-xs text-ink-muted px-2 fade-in">
            <span>
              تم العثور على <strong className="text-brand-600 font-extrabold">{resultsCount}</strong> صنف يطابق "{searchQuery}"
            </span>
            <button
              onClick={handleClear}
              className="text-brand-600 hover:text-brand-700 font-bold transition-colors tap-tactile"
            >
              إلغاء وتصفح الكل
            </button>
          </div>
        )}

        {/* 5. SMART DROPDOWN: Instant Matching Products, Suggestions & History */}
        {showDropdown && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-elevated border border-surface-border p-4 sm:p-5 z-30 fade-in">
            
            {/* A. Smart Predictive Products (When user is typing) */}
            {searchQuery.trim() && smartProductSuggestions.length > 0 && (
              <div className="mb-4 pb-3 border-b border-surface-border/80">
                <div className="flex items-center justify-between text-xs font-bold text-ink mb-2.5">
                  <span className="flex items-center gap-1.5 text-brand-600">
                    <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                    منتجات مقترحة فورية
                  </span>
                  <span className="text-[11px] text-ink-muted font-normal">اضغط للمعاينة السريعة</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {smartProductSuggestions.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        if (onSelectProduct) {
                          onSelectProduct(prod);
                        } else {
                          onSearchChange(prod.arabic_name);
                        }
                        setShowDropdown(false);
                      }}
                      className="group flex items-center gap-2.5 p-2 rounded-xl bg-surface-subtle/80 hover:bg-brand-50/70 border border-surface-border/60 hover:border-brand-200 transition-all cursor-pointer tap-tactile"
                    >
                      <img
                        src={prod.image_url}
                        alt={prod.arabic_name}
                        className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0 text-right">
                        <p className="text-xs font-bold text-ink truncate group-hover:text-brand-600 transition-colors">
                          {prod.arabic_name}
                        </p>
                        <p className="text-[10px] text-ink-muted truncate">
                          {prod.default_unit} • {prod.category === 'vegetables' ? 'خضروات' : prod.category === 'fruits' ? 'فاكهة' : 'طازج'}
                        </p>
                      </div>
                      <ArrowLeft className="w-3.5 h-3.5 text-brand-400 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* B. Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs font-bold text-ink-muted mb-2.5">
                  <span className="flex items-center gap-1.5 text-ink">
                    <Clock className="w-3.5 h-3.5 text-brand-500" />
                    عمليات البحث الأخيرة
                  </span>
                  <button
                    onClick={() => {
                      clearRecentSearches();
                      setRecentSearches([]);
                    }}
                    className="text-zinc-400 hover:text-rose-500 font-medium transition-colors tap-tactile"
                  >
                    مسح السجل
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((term, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectRecent(term)}
                      className="px-3 py-1.5 bg-surface-subtle hover:bg-brand-50 hover:text-brand-700 rounded-xl text-xs font-semibold text-ink border border-surface-border/60 transition-colors tap-tactile"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* C. Trending & Popular Suggestions */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-ink mb-2.5">
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                الأصناف الأكثر طلباً وبحثاً
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSuggestions.map((term, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectRecent(term)}
                    className="px-3 py-1.5 bg-brand-50/70 hover:bg-brand-50 text-brand-700 rounded-xl text-xs font-bold border border-brand-100 transition-colors tap-tactile flex items-center gap-1"
                  >
                    <span>{term}</span>
                    <ArrowLeft className="w-3 h-3 text-brand-400" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>

    </div>
  );
};
