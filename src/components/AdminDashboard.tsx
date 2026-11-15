import React, { useState } from 'react';
import { 
  X, Save, Plus, Trash2, Edit3, 
  Settings, Package, 
  Upload, Download, Search, 
  Phone, LogOut, Check
} from 'lucide-react';
import { Product, StoreSettings, ProductCategory } from '../types';
import { saveProduct, deleteProduct, updateStoreSettings, uploadProductImage } from '../services/storeService';
import { isSupabaseConfigured } from '../lib/supabase';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  settings: StoreSettings | null;
  onRefreshData: () => Promise<void>;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  products,
  settings,
  onRefreshData
}) => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('al_maher_admin_auth') === 'true';
  });
  const [adminPin, setAdminPin] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  // Active Tab: 'products' | 'settings' | 'import-export'
  const [activeTab, setActiveTab] = useState<'products' | 'settings' | 'import-export'>('products');

  // Product Editing / Creation Modal State
  const [isEditingProduct, setIsEditingProduct] = useState<boolean>(false);
  const [currentEditingProduct, setCurrentEditingProduct] = useState<Partial<Product> | null>(null);
  const [isSavingProduct, setIsSavingProduct] = useState<boolean>(false);
  const [imageUploadLoading, setImageUploadLoading] = useState<boolean>(false);
  const [adminSearch, setAdminSearch] = useState<string>('');
  const [adminCategoryFilter, setAdminCategoryFilter] = useState<string>('all');

  // Store Settings Form State
  const [settingsForm, setSettingsForm] = useState<StoreSettings>(() => {
    return settings || {
      whatsapp_number: '',
      store_name: 'الماهر للخضروات والفاكهة',
      tagline: 'الطازة تبدأ من الماهر',
      delivery_enabled: true,
      pickup_enabled: true,
      store_address: 'جمهورية مصر العربية',
      working_hours: 'يومياً من ٨ صباحاً حتى ١١ مساءً',
      minimum_order_notes: 'نحرص على فرز واختيار أفضل حبة خضار وفاكهة خصيصاً لطلبك.'
    };
  });
  const [isSavingSettings, setIsSavingSettings] = useState<boolean>(false);
  const [settingsSaveSuccess, setSettingsSaveSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin PIN: 2026 or 1234
    if (adminPin === '2026' || adminPin === '1234' || adminPin === 'admin') {
      setIsAuthenticated(true);
      localStorage.setItem('al_maher_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('كلمة المرور أو رمز PIN غير صحيح (جرب 2026)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('al_maher_admin_auth');
  };

  // Open Edit Product
  const handleEditProduct = (prod: Product) => {
    setCurrentEditingProduct({ ...prod });
    setIsEditingProduct(true);
  };

  // Open Add Product
  const handleAddProduct = () => {
    const newId = `prod-${Date.now().toString(36)}`;
    setCurrentEditingProduct({
      id: newId,
      arabic_name: '',
      english_name: '',
      category: 'vegetables',
      description: '',
      search_aliases: [],
      image_url: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
      is_available: true,
      is_featured: false,
      is_seasonal: false,
      allowed_units: ['كيلو', 'نصف كيلو'],
      default_unit: 'كيلو'
    });
    setIsEditingProduct(true);
  };

  // Save Product
  const handleSaveProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentEditingProduct || !currentEditingProduct.arabic_name) {
      alert('يرجى إدخال اسم الصنف باللغة العربية');
      return;
    }

    setIsSavingProduct(true);
    try {
      await saveProduct(currentEditingProduct as Product);
      await onRefreshData();
      setIsEditingProduct(false);
      setCurrentEditingProduct(null);
    } catch (err: any) {
      alert('حدث خطأ أثناء حفظ المنتج: ' + err.message);
    } finally {
      setIsSavingProduct(false);
    }
  };

  // Delete Product
  const handleDeleteProduct = async (id: string, name: string) => {
    if (window.confirm(`هل أنت متأكد من حذف الصنف "${name}"؟`)) {
      await deleteProduct(id);
      await onRefreshData();
    }
  };

  // Toggle Availability Fast
  const handleToggleAvailability = async (prod: Product) => {
    const updated = { ...prod, is_available: !prod.is_available };
    await saveProduct(updated);
    await onRefreshData();
  };

  // Handle Image Upload
  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUploadLoading(true);
    try {
      const uploadedUrl = await uploadProductImage(file, 'products');
      setCurrentEditingProduct((prev) => prev ? { ...prev, image_url: uploadedUrl } : null);
    } catch (err: any) {
      alert('فشل رفع الصورة: ' + err.message);
    } finally {
      setImageUploadLoading(false);
    }
  };

  // Save Settings
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingSettings(true);
    try {
      await updateStoreSettings(settingsForm);
      await onRefreshData();
      setSettingsSaveSuccess(true);
      setTimeout(() => setSettingsSaveSuccess(false), 2500);
    } catch (err: any) {
      alert('حدث خطأ أثناء حفظ الإعدادات: ' + err.message);
    } finally {
      setIsSavingSettings(false);
    }
  };

  // Filtered Products for Admin Table
  const filteredAdminProducts = products.filter((p) => {
    const matchesSearch = 
      p.arabic_name.toLowerCase().includes(adminSearch.toLowerCase()) ||
      p.english_name.toLowerCase().includes(adminSearch.toLowerCase());
    const matchesCat = adminCategoryFilter === 'all' || p.category === adminCategoryFilter;
    return matchesSearch && matchesCat;
  });

  // Export CSV
  const handleExportCSV = () => {
    const headers = ['id', 'arabic_name', 'english_name', 'category', 'is_available', 'is_featured', 'is_seasonal', 'default_unit', 'image_url'];
    const rows = products.map((p) => [
      p.id,
      `"${p.arabic_name.replace(/"/g, '""')}"`,
      `"${p.english_name.replace(/"/g, '""')}"`,
      p.category,
      p.is_available,
      p.is_featured,
      p.is_seasonal,
      `"${p.default_unit}"`,
      `"${p.image_url}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `al_maher_catalog_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6 fade-in text-right">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-surface-border overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Top Navbar */}
        <div className="bg-ink text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-white">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tight">لوحة تحكم إدارة الماهر</h2>
              <p className="text-xs text-white/70">
                {isSupabaseConfigured ? '🟢 متصل بقاعدة بيانات Supabase' : '🟡 يعمل في وضع التخزين المحلي (Offline Mode)'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                title="تسجيل الخروج"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">خروج</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auth Gate */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center max-w-md mx-auto w-full my-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-500">
              <Settings className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-black text-ink">تسجيل دخول المسؤول</h3>
              <p className="text-xs sm:text-sm text-ink-muted mt-1">
                أدخل رمز PIN للمسؤول للوصول إلى إعدادات المتجر وقائمة المنتجات.
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div>
                <input
                  type="password"
                  value={adminPin}
                  onChange={(e) => setAdminPin(e.target.value)}
                  placeholder="رمز PIN (الافتراضي: 2026)"
                  className="w-full text-center py-3.5 px-4 rounded-xl border border-surface-border text-lg tracking-widest font-mono focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
                  autoFocus
                />
                {authError && (
                  <p className="text-xs text-rose-500 mt-2 font-bold">{authError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-extrabold text-sm shadow-sm transition-all"
              >
                دخول لوحة التحكم
              </button>

              <div className="text-[11px] text-ink-light bg-surface-subtle p-2.5 rounded-xl">
                رمز PIN الافتراضي للتجربة: <code className="font-mono font-bold text-brand-600">2026</code>
              </div>
            </form>
          </div>
        ) : (
          <>
            {/* Navigation Tabs */}
            <div className="bg-surface-subtle border-b border-surface-border px-6 pt-3 flex gap-2">
              <button
                onClick={() => setActiveTab('products')}
                className={`flex items-center gap-2 px-5 py-3 rounded-t-2xl font-bold text-sm border-t border-r border-l transition-all ${
                  activeTab === 'products'
                    ? 'bg-white border-surface-border text-brand-600 shadow-xs'
                    : 'bg-transparent border-transparent text-ink-muted hover:text-ink'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>إدارة المنتجات ({products.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center gap-2 px-5 py-3 rounded-t-2xl font-bold text-sm border-t border-r border-l transition-all ${
                  activeTab === 'settings'
                    ? 'bg-white border-surface-border text-brand-600 shadow-xs'
                    : 'bg-transparent border-transparent text-ink-muted hover:text-ink'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>إعدادات المتجر والواتساب</span>
              </button>

              <button
                onClick={() => setActiveTab('import-export')}
                className={`flex items-center gap-2 px-5 py-3 rounded-t-2xl font-bold text-sm border-t border-r border-l transition-all ${
                  activeTab === 'import-export'
                    ? 'bg-white border-surface-border text-brand-600 shadow-xs'
                    : 'bg-transparent border-transparent text-ink-muted hover:text-ink'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>استيراد وتصدير CSV</span>
              </button>
            </div>

            {/* TAB 1: PRODUCTS MANAGEMENT */}
            {activeTab === 'products' && (
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
                
                {/* Search & Actions Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 w-full sm:w-auto flex-1 max-w-md">
                    <div className="relative w-full">
                      <Search className="w-4 h-4 absolute right-3 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        value={adminSearch}
                        onChange={(e) => setAdminSearch(e.target.value)}
                        placeholder="بحث في المنتجات..."
                        className="w-full pr-9 pl-3 py-2.5 rounded-xl border border-surface-border text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                      />
                    </div>

                    <select
                      value={adminCategoryFilter}
                      onChange={(e) => setAdminCategoryFilter(e.target.value)}
                      className="px-3 py-2.5 rounded-xl border border-surface-border text-xs sm:text-sm bg-white focus:outline-none"
                    >
                      <option value="all">كل الأقسام</option>
                      <option value="vegetables">خضروات</option>
                      <option value="fruits">فاكهة</option>
                      <option value="leafy">ورقيات</option>
                      <option value="herbs">أعشاب</option>
                      <option value="seasonal">موسمي</option>
                    </select>
                  </div>

                  <button
                    onClick={handleAddProduct}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>إضافة صنف جديد</span>
                  </button>
                </div>

                {/* Products Table */}
                <div className="border border-surface-border rounded-2xl overflow-hidden bg-white shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right text-xs sm:text-sm">
                      <thead className="bg-surface-subtle border-b border-surface-border text-ink-muted font-black">
                        <tr>
                          <th className="p-3">الصورة</th>
                          <th className="p-3">الاسم بالعربي</th>
                          <th className="p-3">الاسم بالإنجليزي</th>
                          <th className="p-3">القسم</th>
                          <th className="p-3">الوحدة الافتراضية</th>
                          <th className="p-3 text-center">التوفر</th>
                          <th className="p-3 text-center">إجراءات</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-border">
                        {filteredAdminProducts.map((prod) => (
                          <tr key={prod.id} className="hover:bg-surface-subtle/50 transition-colors">
                            <td className="p-3">
                              <div className="w-11 h-11 rounded-lg bg-surface-subtle border border-surface-border p-1 flex items-center justify-center overflow-hidden">
                                <img
                                  src={prod.image_url}
                                  alt={prod.arabic_name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            </td>
                            <td className="p-3 font-bold text-ink">
                              {prod.arabic_name}
                              {prod.is_featured && (
                                <span className="mr-1.5 px-1.5 py-0.5 rounded text-[10px] bg-amber-100 text-amber-800">
                                  مميز
                                </span>
                              )}
                            </td>
                            <td className="p-3 font-mono text-ink-light text-xs">
                              {prod.english_name}
                            </td>
                            <td className="p-3">
                              <span className="px-2 py-1 rounded-md bg-gray-100 text-[11px] font-semibold text-ink-muted">
                                {prod.category}
                              </span>
                            </td>
                            <td className="p-3 font-semibold text-brand-600">
                              {prod.default_unit}
                            </td>
                            <td className="p-3 text-center">
                              <button
                                onClick={() => handleToggleAvailability(prod)}
                                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                                  prod.is_available
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                    : 'bg-rose-50 text-rose-700 border border-rose-200'
                                }`}
                              >
                                {prod.is_available ? 'متاح' : 'نفد'}
                              </button>
                            </td>
                            <td className="p-3 text-center">
                              <div className="flex items-center justify-center gap-1.5">
                                <button
                                  onClick={() => handleEditProduct(prod)}
                                  className="p-1.5 rounded-lg text-ink-muted hover:text-brand-500 hover:bg-surface-subtle transition-colors"
                                  title="تعديل"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteProduct(prod.id, prod.arabic_name)}
                                  className="p-1.5 rounded-lg text-gray-400 hover:text-rose-500 hover:bg-rose-50 transition-colors"
                                  title="حذف"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: STORE & WHATSAPP SETTINGS */}
            {activeTab === 'settings' && (
              <form onSubmit={handleSaveSettings} className="flex-1 overflow-y-auto p-6 space-y-6 max-w-2xl mx-auto w-full">
                
                {/* WhatsApp Phone Configuration (Section 10) */}
                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                  <div className="flex items-center gap-2.5 font-black text-emerald-900 text-sm">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <span>رقم واتساب المتجر لاستقبال طلبات الزبائن (WhatsApp Commerce)</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    أدخل رقم الهاتف الدولي الذي ستستقبل عليه رسائل طلبات الزبائن (مثال لمصر: <code className="font-mono font-bold">201012345678</code> أو <code className="font-mono font-bold">01012345678</code>).
                  </p>
                  <div>
                    <input
                      type="text"
                      value={settingsForm.whatsapp_number}
                      onChange={(e) => setSettingsForm({ ...settingsForm, whatsapp_number: e.target.value })}
                      placeholder="أدخل رقم الواتساب هنا..."
                      dir="ltr"
                      className="w-full px-4 py-3 rounded-xl border border-emerald-300 bg-white font-mono text-base font-bold text-ink focus:outline-none focus:ring-4 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                {/* Store Name & Tagline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">اسم المتجر:</label>
                    <input
                      type="text"
                      value={settingsForm.store_name}
                      onChange={(e) => setSettingsForm({ ...settingsForm, store_name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">شعار المتجر (Tagline):</label>
                    <input
                      type="text"
                      value={settingsForm.tagline}
                      onChange={(e) => setSettingsForm({ ...settingsForm, tagline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm"
                    />
                  </div>
                </div>

                {/* Delivery & Pickup Toggles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-4 rounded-xl border border-surface-border bg-surface-subtle">
                    <div>
                      <span className="text-xs font-extrabold text-ink block">خدمة التوصيل للمنازل</span>
                      <span className="text-[11px] text-ink-muted">تفعيل أو إيقاف خيار التوصيل</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settingsForm.delivery_enabled}
                      onChange={(e) => setSettingsForm({ ...settingsForm, delivery_enabled: e.target.checked })}
                      className="w-5 h-5 text-brand-500 rounded cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl border border-surface-border bg-surface-subtle">
                    <div>
                      <span className="text-xs font-extrabold text-ink block">الاستلام من المتجر</span>
                      <span className="text-[11px] text-ink-muted">تفعيل أو إيقاف الاستلام المباشر</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settingsForm.pickup_enabled}
                      onChange={(e) => setSettingsForm({ ...settingsForm, pickup_enabled: e.target.checked })}
                      className="w-5 h-5 text-brand-500 rounded cursor-pointer"
                    />
                  </div>
                </div>

                {/* Working Hours & Store Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">ساعات العمل:</label>
                    <input
                      type="text"
                      value={settingsForm.working_hours}
                      onChange={(e) => setSettingsForm({ ...settingsForm, working_hours: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">عنوان المتجر / المنطقة:</label>
                    <input
                      type="text"
                      value={settingsForm.store_address}
                      onChange={(e) => setSettingsForm({ ...settingsForm, store_address: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm"
                    />
                  </div>
                </div>

                {/* Save Settings Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSavingSettings}
                    className="w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    {isSavingSettings ? (
                      <span>جارِ الحفظ...</span>
                    ) : settingsSaveSuccess ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>تم حفظ الإعدادات بنجاح</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5" />
                        <span>حفظ إعدادات المتجر</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

            {/* TAB 3: IMPORT & EXPORT */}
            {activeTab === 'import-export' && (
              <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-xl mx-auto w-full">
                <div className="p-6 rounded-2xl border border-surface-border bg-surface-subtle space-y-4">
                  <div className="flex items-center gap-3">
                    <Download className="w-6 h-6 text-brand-500" />
                    <div>
                      <h4 className="font-black text-ink text-sm">تصدير كتالوج المنتجات (CSV)</h4>
                      <p className="text-xs text-ink-muted">تنزيل جدول المنتجات الحالية (150+ صنف) لفتحه في Excel أو Google Sheets.</p>
                    </div>
                  </div>
                  <button
                    onClick={handleExportCSV}
                    className="w-full py-3 rounded-xl bg-white border border-surface-border hover:bg-surface-subtle text-ink font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <Download className="w-4 h-4 text-brand-500" />
                    <span>تنزيل ملف الكتالوج CSV ({products.length} صنف)</span>
                  </button>
                </div>
              </div>
            )}
          </>
        )}

      </div>

      {/* Product Edit / Create Modal */}
      {isEditingProduct && currentEditingProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-surface-border text-right space-y-4 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b pb-3 border-surface-border">
              <h3 className="font-black text-ink text-base">
                {currentEditingProduct.id ? 'تعديل بيانات الصنف' : 'إضافة صنف جديد'}
              </h3>
              <button
                onClick={() => setIsEditingProduct(false)}
                className="p-1.5 rounded-full hover:bg-surface-subtle"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveProductSubmit} className="space-y-4 text-xs">
              
              {/* Product Names */}
              <div>
                <label className="block font-bold text-ink mb-1">الاسم بالعربي:*</label>
                <input
                  type="text"
                  value={currentEditingProduct.arabic_name || ''}
                  onChange={(e) => setCurrentEditingProduct({ ...currentEditingProduct, arabic_name: e.target.value })}
                  placeholder="مثال: طماطم بلدي فاخرة"
                  className="w-full px-3 py-2.5 rounded-xl border border-surface-border text-sm"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-ink mb-1">الاسم بالإنجليزي:</label>
                <input
                  type="text"
                  value={currentEditingProduct.english_name || ''}
                  onChange={(e) => setCurrentEditingProduct({ ...currentEditingProduct, english_name: e.target.value })}
                  placeholder="مثال: Fresh Tomatoes"
                  className="w-full px-3 py-2.5 rounded-xl border border-surface-border text-sm font-mono"
                />
              </div>

              {/* Category & Default Unit */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-ink mb-1">القسم:*</label>
                  <select
                    value={currentEditingProduct.category || 'vegetables'}
                    onChange={(e) => setCurrentEditingProduct({ ...currentEditingProduct, category: e.target.value as ProductCategory })}
                    className="w-full px-3 py-2.5 rounded-xl border border-surface-border text-sm bg-white"
                  >
                    <option value="vegetables">خضروات</option>
                    <option value="fruits">فاكهة</option>
                    <option value="leafy">ورقيات</option>
                    <option value="herbs">أعشاب</option>
                    <option value="seasonal">موسمي</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-ink mb-1">الوحدة الافتراضية:*</label>
                  <input
                    type="text"
                    value={currentEditingProduct.default_unit || 'كيلو'}
                    onChange={(e) => setCurrentEditingProduct({ ...currentEditingProduct, default_unit: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-surface-border text-sm"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block font-bold text-ink mb-1">الوصف:</label>
                <textarea
                  rows={2}
                  value={currentEditingProduct.description || ''}
                  onChange={(e) => setCurrentEditingProduct({ ...currentEditingProduct, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-surface-border text-sm"
                />
              </div>

              {/* Image Pipeline: Direct URL or Storage Upload (Section 03 & 12) */}
              <div className="p-3.5 rounded-2xl bg-surface-subtle border border-surface-border space-y-2">
                <label className="block font-black text-ink">صورة المنتج الفوتوغرافية:</label>
                
                {/* Image Live Preview */}
                <div className="aspect-video w-full rounded-xl bg-white border border-surface-border flex items-center justify-center overflow-hidden p-2">
                  {currentEditingProduct.image_url ? (
                    <img
                      src={currentEditingProduct.image_url}
                      alt="معاينة"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-400">لا توجد صورة بعد</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={currentEditingProduct.image_url || ''}
                    onChange={(e) => setCurrentEditingProduct({ ...currentEditingProduct, image_url: e.target.value })}
                    placeholder="رابط الصورة المباشر (URL)"
                    className="flex-1 px-3 py-2 rounded-xl border border-surface-border text-xs font-mono"
                  />
                  
                  <label className="px-3 py-2 rounded-xl bg-brand-50 text-brand-600 font-bold border border-brand-200 hover:bg-brand-100 cursor-pointer flex items-center gap-1">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{imageUploadLoading ? 'جارِ الرفع...' : 'رفع ملف'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileChange}
                      className="hidden"
                      disabled={imageUploadLoading}
                    />
                  </label>
                </div>
              </div>

              {/* Toggles */}
              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer font-bold">
                  <input
                    type="checkbox"
                    checked={currentEditingProduct.is_available !== false}
                    onChange={(e) => setCurrentEditingProduct({ ...currentEditingProduct, is_available: e.target.checked })}
                    className="w-4 h-4 rounded text-brand-500"
                  />
                  <span>متوفر للطلب</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-bold">
                  <input
                    type="checkbox"
                    checked={Boolean(currentEditingProduct.is_featured)}
                    onChange={(e) => setCurrentEditingProduct({ ...currentEditingProduct, is_featured: e.target.checked })}
                    className="w-4 h-4 rounded text-brand-500"
                  />
                  <span>صنف مميز بالواجهة</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-bold">
                  <input
                    type="checkbox"
                    checked={Boolean(currentEditingProduct.is_seasonal)}
                    onChange={(e) => setCurrentEditingProduct({ ...currentEditingProduct, is_seasonal: e.target.checked })}
                    className="w-4 h-4 rounded text-brand-500"
                  />
                  <span>محصول موسمي</span>
                </label>
              </div>

              {/* Submit / Cancel */}
              <div className="pt-3 flex gap-2">
                <button
                  type="submit"
                  disabled={isSavingProduct}
                  className="flex-1 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm shadow-sm"
                >
                  {isSavingProduct ? 'جارِ الحفظ...' : 'حفظ الصنف'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingProduct(false)}
                  className="px-4 py-3 rounded-xl border border-surface-border text-ink font-semibold"
                >
                  إلغاء
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
