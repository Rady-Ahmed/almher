import React, { useState, useEffect } from 'react';
import { Download, X, Share, PlusSquare } from 'lucide-react';

interface PWAInstallPromptProps {
  onInstall?: () => void;
}

export const PWAInstallPrompt: React.FC<PWAInstallPromptProps> = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
      return;
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Listen for beforeinstallprompt event (Chrome, Android, Edge)
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show prompt banner after brief delay
      setTimeout(() => setShowPrompt(true), 2500);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
      setShowPrompt(false);
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  if (isInstalled || (!showPrompt && !showIOSGuide)) {
    return null;
  }

  return (
    <>
      {/* Install Banner Prompt */}
      {showPrompt && !showIOSGuide && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-40 bg-white rounded-2xl p-4 shadow-elevated border border-surface-border fade-in text-right">
          <div className="flex items-start justify-between gap-3">
            <button
              onClick={() => setShowPrompt(false)}
              className="text-gray-400 hover:text-ink p-1 -mt-1"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <h4 className="text-sm font-extrabold text-ink">تثبيت تطبيق الماهر</h4>
                <p className="text-[11px] text-ink-muted">لتسوق أسرع وتصفح بدون انترنت</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center p-1.5 flex-shrink-0 shadow-sm">
                <img src="/favicon.svg" alt="الماهر" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-3 flex gap-2">
            <button
              onClick={handleInstallClick}
              className="flex-1 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>تثبيت الآن</span>
            </button>
            <button
              onClick={() => setShowPrompt(false)}
              className="px-3 py-2 rounded-xl bg-surface-subtle hover:bg-surface border border-surface-border text-xs font-semibold text-ink transition-colors"
            >
              لاحقاً
            </button>
          </div>
        </div>
      )}

      {/* iOS Installation Instructions Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm fade-in text-right">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-elevated border border-surface-border space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-surface-border">
              <span className="text-xs font-bold text-ink-muted">تثبيت التطبيق على الآيفون</span>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1 rounded-full text-ink hover:bg-surface-subtle"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-500 flex items-center justify-center p-2 shadow-sm">
                <img src="/favicon.svg" alt="الماهر" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-extrabold text-ink text-base">متجر الماهر على شاشتك</h3>
                <p className="text-xs text-ink-muted">خطوات بسيطة لإضافة التطبيق في Safari:</p>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs text-ink font-semibold">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-subtle">
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-xs text-brand-500 font-bold">1</div>
                <div className="flex items-center gap-2">
                  <span>اضغط على زر المشاركة</span>
                  <Share className="w-4 h-4 text-sky-600 inline" />
                  <span>في شريط Safari بالأسفل</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-subtle">
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-xs text-brand-500 font-bold">2</div>
                <div className="flex items-center gap-2">
                  <span>اختر</span>
                  <strong className="text-brand-600">"إضافة إلى الشاشة الرئيسية"</strong>
                  <PlusSquare className="w-4 h-4 text-emerald-600 inline" />
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-subtle">
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-xs text-brand-500 font-bold">3</div>
                <span>اضغط على "إضافة" (Add) في الزاوية العلوية</span>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-3 rounded-xl bg-brand-500 text-white font-bold text-sm shadow-sm hover:bg-brand-600 transition-colors"
            >
              فهمت ذلك، شكراً
            </button>
          </div>
        </div>
      )}
    </>
  );
};
