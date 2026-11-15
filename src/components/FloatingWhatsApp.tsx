import React, { useState } from 'react';
import { StoreSettings } from '../types';
import { isWhatsAppConfigured, cleanPhoneNumber } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  settings: StoreSettings | null;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ settings }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const isConfigured = isWhatsAppConfigured(settings);

  const handleClick = (e: React.MouseEvent) => {
    if (!isConfigured) {
      e.preventDefault();
      alert('رقم خدمة العملاء عبر الواتساب قيد التجهيز حالياً. يمكنك تصفح المنتجات وإرسال طلبك عبر المتجر مباشرة.');
      return;
    }

    const phone = cleanPhoneNumber(settings?.whatsapp_number || '');
    const defaultMsg = encodeURIComponent(
      'السلام عليكم، أود الاستفسار بخصوص منتجات متجر الماهر للخضروات والفاكهة.'
    );
    const waUrl = `https://wa.me/${phone}?text=${defaultMsg}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed left-5 sm:left-6 bottom-20 md:bottom-6 z-30 select-none">
      <div className="relative flex items-center">
        
        {/* Desktop Tooltip */}
        <div
          className={`hidden md:block absolute right-full mr-3 whitespace-nowrap bg-zinc-900/95 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg border border-white/10 transition-all duration-200 pointer-events-none ${
            showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span>تواصل معنا عبر واتساب</span>
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-zinc-900/95 rotate-45 border-r border-t border-white/10" />
        </div>

        {/* Floating WhatsApp Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          className="group relative flex items-center justify-center w-14 h-14 sm:w-[58px] sm:h-[58px] rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-elevated hover:shadow-2xl transition-all duration-300 tap-tactile hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
          aria-label="تواصل معنا عبر واتساب"
          title="تواصل معنا عبر واتساب"
        >
          {/* Subtle Ambient Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping pointer-events-none duration-1000" />
          
          {/* Authentic WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.83.811 2.796.811 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.797-5.767-5.797zm0 10.42c-.89 0-1.761-.24-2.521-.692l-.181-.108-1.874.491.5-1.826-.118-.188c-.499-.794-.763-1.713-.762-2.658 0-2.57 2.091-4.661 4.662-4.661 1.245 0 2.416.485 3.296 1.366s1.364 2.052 1.363 3.296c-.001 2.571-2.092 4.661-4.662 4.661zm2.554-3.488c-.14-.07-.828-.409-.956-.456s-.222-.07-.315.07-.362.456-.444.55-.163.105-.303.035c-.14-.07-.591-.218-1.126-.695-.416-.371-.697-.83-.778-.97-.082-.14-.009-.216.061-.285.063-.062.14-.163.21-.245.07-.081.093-.14.14-.233.047-.093.023-.175-.012-.245s-.315-.759-.432-1.04c-.114-.274-.23-.237-.315-.241l-.269-.004c-.093 0-.245.035-.373.175s-.49 4.79-.49 1.168.502 2.3 1.201 3.093c.7.794 1.705 1.218 2.756 1.385.498.079.889.063 1.223.01.373-.059 1.144-.468 1.307-.92.163-.452.163-.84.116-.92-.047-.081-.174-.128-.314-.198z" />
          </svg>
        </button>

      </div>
    </div>
  );
};
