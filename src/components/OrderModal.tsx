import React, { useState } from 'react';
import { X, Send, MapPin, Store, User, Building, AlertCircle, Copy, Check, Banknote, Smartphone, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { StoreSettings, CustomerType, FulfillmentMethod, OrderCustomerInfo } from '../types';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: StoreSettings | null;
  onOpenAdminSettings: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  settings,
  onOpenAdminSettings
}) => {
  const { cart } = useCart();

  const [customerType, setCustomerType] = useState<CustomerType>('individual');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [fulfillmentMethod, setFulfillmentMethod] = useState<FulfillmentMethod>(
    settings?.delivery_enabled ? 'delivery' : 'pickup'
  );
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'vodafone_cash' | 'instapay'>('cash');
  const [orderNotes, setOrderNotes] = useState('');

  const [copied, setCopied] = useState(false);
  const [copiedWallet, setCopiedWallet] = useState(false);
  const [showConfigNotice, setShowConfigNotice] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) {
      errors.fullName = 'يرجى إدخال الاسم بالكامل';
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'يرجى إدخال رقم الهاتف للتواصل';
    }
    if (customerType === 'commercial' && !businessName.trim()) {
      errors.businessName = 'يرجى إدخال اسم المنشأة أو النشاط التجاري';
    }
    if (fulfillmentMethod === 'delivery' && !deliveryAddress.trim()) {
      errors.deliveryAddress = 'يرجى كتابة عنوان التوصيل بالتفصيل';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const customerInfo: OrderCustomerInfo = {
    customer_type: customerType,
    full_name: fullName,
    phone_number: phoneNumber,
    business_name: businessName,
    fulfillment_method: fulfillmentMethod,
    delivery_address: deliveryAddress,
    payment_method: paymentMethod,
    order_notes: orderNotes
  };

  const { url, isConfigured, message } = buildWhatsAppLink(customerInfo, cart, settings);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!isConfigured) {
      setShowConfigNotice(true);
      return;
    }

    // Open WhatsApp URL
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm fade-in text-right">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white rounded-t-3xl sm:rounded-3xl shadow-elevated border border-surface-border overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-surface-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-ink">إتمام وتأكيد الطلب</h2>
              <p className="text-xs text-ink-muted">عبر الواتساب مباشرة وبكل سهولة</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-ink hover:bg-surface-subtle transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSubmitOrder} className="overflow-y-auto p-5 sm:p-6 space-y-5 flex-1">
          
          {/* WhatsApp Not Configured Notice Banner */}
          {(!isConfigured || showConfigNotice) && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-800">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>تنبيه للمسؤول: رقم الواتساب لم يتم ضبطه بعد</span>
              </div>
              <p>
                لم يتم إدخال رقم واتساب المتجر حتى الآن في لوحة التحكم. يمكنك كمسؤول تعيين الرقم بسهولة، أو تجربة نسخ نص الطلب المنسق بالأسفل.
              </p>
              <button
                type="button"
                onClick={onOpenAdminSettings}
                className="inline-block font-extrabold text-brand-600 hover:underline"
              >
                اضغط هنا لضبط رقم الواتساب من لوحة الإدارة ←
              </button>
            </div>
          )}

          {/* Customer Type Toggle */}
          <div>
            <label className="block text-xs font-black text-ink mb-2">نوع الطلب:</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setCustomerType('individual')}
                className={`flex items-center justify-center gap-2 p-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
                  customerType === 'individual'
                    ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-sm'
                    : 'bg-surface-subtle border-surface-border text-ink hover:bg-white'
                }`}
              >
                <User className="w-4 h-4" />
                <span>طلب فردي / منزلي</span>
              </button>

              <button
                type="button"
                onClick={() => setCustomerType('commercial')}
                className={`flex items-center justify-center gap-2 p-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
                  customerType === 'commercial'
                    ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-sm'
                    : 'bg-surface-subtle border-surface-border text-ink hover:bg-white'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>طلب تجاري (مطاعم / شركات)</span>
              </button>
            </div>
          </div>

          {/* Customer Name */}
          <div>
            <label className="block text-xs font-bold text-ink mb-1.5">
              {customerType === 'commercial' ? 'اسم مسؤول المشتريات / التواصل:' : 'الاسم بالكامل:'}
              <span className="text-brand-500 mr-1">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="مثال: محمد أحمد"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-ink focus:outline-none focus:ring-2 transition-all ${
                  formErrors.fullName
                    ? 'border-rose-500 ring-rose-100'
                    : 'border-surface-border focus:border-brand-500 ring-brand-50'
                }`}
              />
            </div>
            {formErrors.fullName && (
              <p className="text-[11px] text-rose-500 mt-1">{formErrors.fullName}</p>
            )}
          </div>

          {/* Commercial Business Name */}
          {customerType === 'commercial' && (
            <div>
              <label className="block text-xs font-bold text-ink mb-1.5">
                اسم المنشأة أو المطعم / النشاط التجاري:
                <span className="text-brand-500 mr-1">*</span>
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="مثال: مطعم بيت الكرم / فندق الأهرامات"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-ink focus:outline-none focus:ring-2 transition-all ${
                  formErrors.businessName
                    ? 'border-rose-500 ring-rose-100'
                    : 'border-surface-border focus:border-brand-500 ring-brand-50'
                }`}
              />
              {formErrors.businessName && (
                <p className="text-[11px] text-rose-500 mt-1">{formErrors.businessName}</p>
              )}
            </div>
          )}

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold text-ink mb-1.5">
              رقم الهاتف (للتواصل وتأكيد الطلب):
              <span className="text-brand-500 mr-1">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="مثال: 01012345678"
                dir="ltr"
                className={`w-full px-4 py-3 text-right rounded-xl border text-sm text-ink focus:outline-none focus:ring-2 transition-all ${
                  formErrors.phoneNumber
                    ? 'border-rose-500 ring-rose-100'
                    : 'border-surface-border focus:border-brand-500 ring-brand-50'
                }`}
              />
            </div>
            {formErrors.phoneNumber && (
              <p className="text-[11px] text-rose-500 mt-1">{formErrors.phoneNumber}</p>
            )}
          </div>

          {/* Fulfillment Method */}
          <div>
            <label className="block text-xs font-black text-ink mb-2">طريقة الاستلام والتوصيل:</label>
            <div className="grid grid-cols-2 gap-3">
              {settings?.delivery_enabled !== false && (
                <button
                  type="button"
                  onClick={() => setFulfillmentMethod('delivery')}
                  className={`flex items-center justify-center gap-2 p-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
                    fulfillmentMethod === 'delivery'
                      ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-sm'
                      : 'bg-surface-subtle border-surface-border text-ink hover:bg-white'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-brand-500" />
                  <span>توصيل للمنزل</span>
                </button>
              )}

              {settings?.pickup_enabled !== false && (
                <button
                  type="button"
                  onClick={() => setFulfillmentMethod('pickup')}
                  className={`flex items-center justify-center gap-2 p-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
                    fulfillmentMethod === 'pickup'
                      ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-sm'
                      : 'bg-surface-subtle border-surface-border text-ink hover:bg-white'
                  }`}
                >
                  <Store className="w-4 h-4 text-emerald-600" />
                  <span>استلام من المتجر</span>
                </button>
              )}
            </div>
          </div>

          {/* Delivery Address (only if delivery chosen) */}
          {fulfillmentMethod === 'delivery' && (
            <div>
              <label className="block text-xs font-bold text-ink mb-1.5">
                عنوان التوصيل بالتفصيل:
                <span className="text-brand-500 mr-1">*</span>
              </label>
              <textarea
                rows={2}
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                placeholder="المدينة، المنطقة، اسم الشارع، رقم العقار، الدور، رقم الشقة..."
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-ink focus:outline-none focus:ring-2 transition-all ${
                  formErrors.deliveryAddress
                    ? 'border-rose-500 ring-rose-100'
                    : 'border-surface-border focus:border-brand-500 ring-brand-50'
                }`}
              />
              {formErrors.deliveryAddress && (
                <p className="text-[11px] text-rose-500 mt-1">{formErrors.deliveryAddress}</p>
              )}
            </div>
          )}

          {/* Payment Method Selector */}
          <div>
            <label className="block text-xs font-black text-ink mb-2">طريقة الدفع المفضلة:</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('cash')}
                className={`flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-2xl border text-xs font-bold transition-all ${
                  paymentMethod === 'cash'
                    ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-xs'
                    : 'bg-surface-subtle border-surface-border text-ink hover:bg-white'
                }`}
              >
                <Banknote className="w-4 h-4 text-emerald-600" />
                <span>كاش عند الاستلام</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('vodafone_cash')}
                className={`flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-2xl border text-xs font-bold transition-all ${
                  paymentMethod === 'vodafone_cash'
                    ? 'bg-rose-50 border-rose-500 text-rose-700 shadow-xs'
                    : 'bg-surface-subtle border-surface-border text-ink hover:bg-white'
                }`}
              >
                <Smartphone className="w-4 h-4 text-rose-600" />
                <span>فودافون كاش</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('instapay')}
                className={`flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-2xl border text-xs font-bold transition-all ${
                  paymentMethod === 'instapay'
                    ? 'bg-purple-50 border-purple-500 text-purple-700 shadow-xs'
                    : 'bg-surface-subtle border-surface-border text-ink hover:bg-white'
                }`}
              >
                <Zap className="w-4 h-4 text-purple-600" />
                <span>إنستاباي InstaPay</span>
              </button>
            </div>

            {/* Vodafone Cash Details Box */}
            {paymentMethod === 'vodafone_cash' && (
              <div className="mt-2.5 p-3 rounded-xl bg-rose-50/70 border border-rose-200 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-rose-900">رقم محفظة فودافون كاش: </span>
                  <span className="font-mono font-black text-rose-700 text-sm">01155416650</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText('01155416650');
                    setCopiedWallet(true);
                    setTimeout(() => setCopiedWallet(false), 2000);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white border border-rose-200 text-rose-700 font-bold text-[11px] hover:bg-rose-100 flex items-center gap-1 transition-colors"
                >
                  {copiedWallet ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedWallet ? 'تم النسخ' : 'نسخ الرقم'}</span>
                </button>
              </div>
            )}

            {/* InstaPay Details Box */}
            {paymentMethod === 'instapay' && (
              <div className="mt-2.5 p-3 rounded-xl bg-purple-50/70 border border-purple-200 text-xs text-purple-900 leading-relaxed">
                <span className="font-bold">تحويل إنستاباي الفوري: </span>
                <span>يمكنك تحويل قيمة الطلب لرقم المتجر <strong>01155416650</strong> أو إرسال صورة التحويل عبر الواتساب مباشرة لتجهيز الطلب فوراً.</span>
              </div>
            )}
          </div>

          {/* Order Notes */}
          <div>
            <label className="block text-xs font-bold text-ink mb-1.5">
              ملاحظات عامة على الطلب (اختياري):
            </label>
            <input
              type="text"
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              placeholder="مثال: يرجى التوصيل بعد الساعة الخامسة مساءً..."
              className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm text-ink focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-50 transition-all"
            />
          </div>

          {/* Summary of Items */}
          <div className="bg-surface-subtle p-3.5 rounded-2xl border border-surface-border text-xs space-y-1.5">
            <span className="font-extrabold text-ink">ملخص الأصناف المطلوبة ({cart.length} أصناف):</span>
            <div className="max-h-24 overflow-y-auto space-y-1 text-ink-muted pr-2">
              {cart.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-[11px]">
                  <span>• {item.product.arabic_name}</span>
                  <span className="font-bold text-ink">{item.quantity} {item.selected_unit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Copy Message Preview Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleCopyMessage}
              className="w-full py-2.5 rounded-xl border border-surface-border bg-surface hover:bg-surface-subtle text-xs font-bold text-ink flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">تم نسخ نص رسالة الواتساب إلى الحافظة!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-brand-500" />
                  <span>معاينة أو نسخ نص الطلب كاملاً</span>
                </>
              )}
            </button>
          </div>

        </form>

        {/* Footer Submit Button */}
        <div className="p-4 sm:p-5 border-t border-surface-border bg-white">
          <button
            onClick={handleSubmitOrder}
            className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-base flex items-center justify-center gap-2.5 shadow-md transition-all active:scale-98"
          >
            <Send className="w-5 h-5" />
            <span>إرسال الطلب الآن عبر الواتساب</span>
          </button>
        </div>

      </div>
    </div>
  );
};
