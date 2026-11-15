import React, { useState } from 'react';
import { StoreSettings } from '../types';
import { cleanPhoneNumber } from '../utils/whatsapp';
import { Phone, MessageCircle, X, Clock, MapPin } from 'lucide-react';

interface FloatingWhatsAppProps {
  settings: StoreSettings | null;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ settings }) => {
  const [isOpen, setIsOpen] = useState(false);

  const rawPhone = settings?.phone_number || settings?.whatsapp_number || '01155416650';
  const cleanNum = cleanPhoneNumber(rawPhone);
  const displayPhone = '01155416650';

  const defaultMsg = encodeURIComponent(
    'السلام عليكم، أود الطلب أو الاستفسار من متجر الماهر للخضروات والفاكهة (فرع مغاغة).'
  );
  const waUrl = `https://wa.me/${cleanNum}?text=${defaultMsg}`;
  const telUrl = `tel:${rawPhone.replace(/\D/g, '')}`;

  return (
    <div className="fixed left-4 sm:left-6 bottom-20 md:bottom-6 z-40 select-none">
      <div className="relative flex flex-col items-start">

        {/* ── Expanded Action Popover Menu ── */}
        {isOpen && (
          <div
            className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-surface-border overflow-hidden text-right fade-up-enter"
            style={{ direction: 'rtl' }}
          >
            {/* Popover Header */}
            <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-3.5 text-white flex items-center justify-between">
              <div>
                <h4 className="text-xs font-black">الماهر للخضروات والفاكهة</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-white/90 mt-0.5">
                  <Clock className="w-3 h-3 text-amber-300" />
                  <span>خدمة وتوصيل 24 ساعة يومياً</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-white transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Location Notice */}
            <div className="px-3.5 py-2 bg-brand-50/60 border-b border-brand-100/60 flex items-center gap-1.5 text-[11px] font-bold text-brand-900">
              <MapPin className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
              <span>مركز مغاغة — محافظة المنيا</span>
            </div>

            {/* Action Buttons */}
            <div className="p-3 space-y-2">
              {/* WhatsApp Action */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs shadow-xs transition-transform active:scale-98"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="block leading-tight">محادثة واتساب سريعة</span>
                    <span className="text-[10px] font-mono text-white/90" dir="ltr">{displayPhone}</span>
                  </div>
                </div>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-md">دردشة</span>
              </a>

              {/* Direct Phone Call Action */}
              <a
                href={telUrl}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-ink hover:bg-black text-white font-bold text-xs shadow-xs transition-transform active:scale-98"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="block leading-tight">اتصال هاتفي مباشر</span>
                    <span className="text-[10px] font-mono text-gray-300" dir="ltr">{displayPhone}</span>
                  </div>
                </div>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-md">اتصل الآن</span>
              </a>
            </div>

            {/* Bottom mini footnote */}
            <div className="px-3.5 pb-2.5 pt-0.5 text-[10px] text-center text-ink-muted">
              جاهزون لاستقبال طلباتك على مدار الساعة
            </div>
          </div>
        )}

        {/* ── Main Floating Hub Trigger ── */}
        <div className="relative flex items-center">
          {/* Subtle Desktop Tooltip when closed */}
          {!isOpen && (
            <div
              onClick={() => setIsOpen(true)}
              className="hidden md:flex items-center gap-2 absolute right-full mr-3 whitespace-nowrap bg-zinc-900/95 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg border border-white/10 cursor-pointer hover:bg-zinc-800 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>تواصل أو اطلب: {displayPhone}</span>
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-zinc-900/95 rotate-45 border-r border-t border-white/10" />
            </div>
          )}

          {/* Floating Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="group relative flex items-center justify-center w-14 h-14 sm:w-[58px] sm:h-[58px] rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-elevated hover:shadow-2xl transition-all duration-300 tap-tactile hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
            aria-label="تواصل معنا عبر واتساب أو الهاتف"
            title="تواصل معنا (واتساب وهاتف)"
          >
            {/* Subtle Pulse Rings */}
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 group-hover:opacity-60 animate-ping pointer-events-none duration-1000" />

            {/* Phone mini badge at top-right of the circle */}
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-xs border-2 border-white">
              <Phone className="w-2.5 h-2.5" />
            </span>

            {/* WhatsApp Icon */}
            {isOpen ? (
              <X className="w-6 h-6 text-white transition-transform duration-200 rotate-90" />
            ) : (
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.83.811 2.796.811 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.797-5.767-5.797zm0 10.42c-.89 0-1.761-.24-2.521-.692l-.181-.108-1.874.491.5-1.826-.118-.188c-.499-.794-.763-1.713-.762-2.658 0-2.57 2.091-4.661 4.662-4.661 1.245 0 2.416.485 3.296 1.366s1.364 2.052 1.363 3.296c-.001 2.571-2.092 4.661-4.662 4.661zm2.554-3.488c-.14-.07-.828-.409-.956-.456s-.222-.07-.315.07-.362.456-.444.55-.163.105-.303.035c-.14-.07-.591-.218-1.126-.695-.416-.371-.697-.83-.778-.97-.082-.14-.009-.216.061-.285.063-.062.14-.163.21-.245.07-.081.093-.14.14-.233.047-.093.023-.175-.012-.245s-.315-.759-.432-1.04c-.114-.274-.23-.237-.315-.241l-.269-.004c-.093 0-.245.035-.373.175s-.49 4.79-.49 1.168.502 2.3 1.201 3.093c.7.794 1.705 1.218 2.756 1.385.498.079.889.063 1.223.01.373-.059 1.144-.468 1.307-.92.163-.452.163-.84.116-.92-.047-.081-.174-.128-.314-.198z" />
              </svg>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
