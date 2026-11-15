import { CartItem, OrderCustomerInfo, StoreSettings } from '../types';

/**
 * Validates whether the WhatsApp number has been set by the store administrator.
 */
export function isWhatsAppConfigured(settings?: StoreSettings | null): boolean {
  if (!settings || !settings.whatsapp_number) return false;
  const clean = settings.whatsapp_number.replace(/\D/g, '');
  // A valid international phone number usually has at least 9 to 15 digits
  return clean.length >= 9;
}

/**
 * Cleans phone number for wa.me link (digits only, e.g. 201012345678)
 */
export function cleanPhoneNumber(phone: string): string {
  let cleaned = phone.replace(/\D/g, '');
  // If user entered Egyptian number starting with 01, auto-prepend country code 2
  if (cleaned.startsWith('01') && cleaned.length === 11) {
    cleaned = '2' + cleaned;
  }
  return cleaned;
}

/**
 * Builds the elegant formatted Arabic order message for WhatsApp
 */
export function generateWhatsAppOrderMessage(
  customerInfo: OrderCustomerInfo,
  cartItems: CartItem[],
  settings?: StoreSettings | null
): string {
  const storeName = settings?.store_name || 'الماهر للخضروات والفاكهة';
  const timestamp = new Date().toLocaleDateString('ar-EG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const isCommercial = customerInfo.customer_type === 'commercial';
  const customerTypeLabel = isCommercial ? '🏢 طلب تجاري (مطعم / فندق / شركة)' : '👤 طلب منزلي / فردي';
  const fulfillmentLabel = customerInfo.fulfillment_method === 'delivery' ? '🚗 توصيل للمنزل' : '🏪 استلام من المتجر';

  let msg = `🌿 *طلب شراء جديد — ${storeName}*\n`;
  msg += `📅 *التاريخ:* ${timestamp}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

  msg += `📋 *بيانات العميل:*\n`;
  msg += `• *نوع الطلب:* ${customerTypeLabel}\n`;
  msg += `• *الاسم:* ${customerInfo.full_name}\n`;
  if (isCommercial && customerInfo.business_name) {
    msg += `• *اسم المنشأة/النشاط:* ${customerInfo.business_name}\n`;
  }
  msg += `• *رقم الهاتف:* ${customerInfo.phone_number}\n`;
  msg += `• *طريقة الاستلام:* ${fulfillmentLabel}\n`;

  if (customerInfo.fulfillment_method === 'delivery' && customerInfo.delivery_address) {
    msg += `• *عنوان التوصيل بالتفصيل:* ${customerInfo.delivery_address}\n`;
  }

  const paymentLabel = 
    customerInfo.payment_method === 'vodafone_cash' ? '📱 فودافون كاش (01155416650)' :
    customerInfo.payment_method === 'instapay' ? '⚡ تحويل إنستاباي (InstaPay)' :
    '💵 دفع نقداً عند الاستلام (كاش)';
  msg += `• *طريقة الدفع:* ${paymentLabel}\n`;

  msg += `\n🛒 *قائمة الأصناف المطلوبة (${cartItems.length} صنف):*\n`;
  msg += `─────────────────────\n`;

  cartItems.forEach((item, index) => {
    const num = index + 1;
    msg += `${num}. *${item.product.arabic_name}*\n`;
    msg += `   └ الكمية: ${item.quantity} ${item.selected_unit}\n`;
    if (item.notes && item.notes.trim()) {
      msg += `   └ ملاحظة خاصة: ${item.notes.trim()}\n`;
    }
  });

  msg += `─────────────────────\n`;

  if (customerInfo.order_notes && customerInfo.order_notes.trim()) {
    msg += `\n📝 *ملاحظات إضافية على الطلب:*\n`;
    msg += `${customerInfo.order_notes.trim()}\n`;
  }

  msg += `\n✨ *الطازة تبدأ من الماهر*\n`;
  msg += `_تم إرسال هذا الطلب عبر منصة الماهر للتسوق_`;

  return msg;
}

/**
 * Creates the complete wa.me click link
 */
export function buildWhatsAppLink(
  customerInfo: OrderCustomerInfo,
  cartItems: CartItem[],
  settings?: StoreSettings | null
): { url: string; isConfigured: boolean; message: string } {
  const configured = isWhatsAppConfigured(settings);
  const message = generateWhatsAppOrderMessage(customerInfo, cartItems, settings);
  
  if (!configured) {
    return {
      url: '',
      isConfigured: false,
      message
    };
  }

  const cleanNumber = cleanPhoneNumber(settings!.whatsapp_number);
  const encodedText = encodeURIComponent(message);
  const url = `https://wa.me/${cleanNumber}?text=${encodedText}`;

  return {
    url,
    isConfigured: true,
    message
  };
}
