import { Product, StoreSettings } from '../types';
import { INITIAL_PRODUCTS } from '../data/products';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const PRODUCTS_STORAGE_KEY = 'al_maher_products_data_v2';
const SETTINGS_STORAGE_KEY = 'al_maher_store_settings_v2';

export const DEFAULT_STORE_SETTINGS: StoreSettings = {
  whatsapp_number: '01155416650',
  phone_number: '01155416650',
  store_name: 'الماهر للخضروات والفاكهة',
  tagline: 'الطازة تبدأ من الماهر',
  delivery_enabled: true,
  pickup_enabled: true,
  store_address: 'مركز مغاغة، محافظة المنيا',
  working_hours: 'خدمة توصيل على مدار 24 ساعة يومياً',
  minimum_order_notes: 'نحرص على فرز واختيار كل حبة خضار وفاكهة طازجة خصيصاً لطلبك.',
  facebook_url: 'https://www.facebook.com/share/1CFo1teCHV/',
  maps_url: 'https://goo.gl/maps/bNQs294idzVw6WyAA?g_st=ac',
  admin_pin: 'almher2026#'
};

/**
 * Loads products from Supabase or localStorage fallback
 */
export async function getProducts(): Promise<Product[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('is_featured', { ascending: false });

      if (!error && data && data.length > 0) {
        return data as Product[];
      }
    } catch (err) {
      console.warn('Supabase fetch failed, falling back to local cache:', err);
    }
  }

  // Local fallback
  try {
    const cached = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading local product cache:', err);
  }

  // Seed default 150+ products
  try {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
  } catch {
    // ignore
  }

  return INITIAL_PRODUCTS;
}

/**
 * Saves or updates a product
 */
export async function saveProduct(product: Product): Promise<Product> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('products')
        .upsert({
          id: product.id,
          arabic_name: product.arabic_name,
          english_name: product.english_name,
          category: product.category,
          description: product.description,
          search_aliases: product.search_aliases,
          image_url: product.image_url,
          is_available: product.is_available,
          is_featured: product.is_featured,
          is_seasonal: product.is_seasonal,
          allowed_units: product.allowed_units,
          default_unit: product.default_unit,
          price: product.price,
          price_before_discount: product.price_before_discount,
          stock_quantity: product.stock_quantity,
          is_best_seller: product.is_best_seller,
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (!error && data) {
        return data as Product;
      }
    } catch (err) {
      console.error('Supabase product save error:', err);
    }
  }

  // Update local storage
  const current = await getProducts();
  const index = current.findIndex(p => p.id === product.id);
  let updated: Product[];

  if (index >= 0) {
    updated = [...current];
    updated[index] = { ...product, updated_at: new Date().toISOString() };
  } else {
    updated = [{ ...product, created_at: new Date().toISOString() }, ...current];
  }

  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(updated));
  return product;
}

/**
 * Deletes a product
 */
export async function deleteProduct(productId: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);
      if (error) throw error;
    } catch (err) {
      console.error('Supabase delete product error:', err);
    }
  }

  const current = await getProducts();
  const updated = current.filter(p => p.id !== productId);
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(updated));
  return true;
}

/**
 * Retrieves store settings
 */
export async function getStoreSettings(): Promise<StoreSettings> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('store_settings')
        .select('*')
        .eq('id', 1)
        .single();

      if (!error && data) {
        return data as StoreSettings;
      }
    } catch (err) {
      console.warn('Supabase settings fetch error:', err);
    }
  }

  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (raw) {
      return { ...DEFAULT_STORE_SETTINGS, ...JSON.parse(raw) };
    }
  } catch {
    // fallback
  }

  return DEFAULT_STORE_SETTINGS;
}

/**
 * Updates store settings (WhatsApp number, delivery settings, etc.)
 */
export async function updateStoreSettings(settings: Partial<StoreSettings>): Promise<StoreSettings> {
  const current = await getStoreSettings();
  const merged: StoreSettings = { ...current, ...settings };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('store_settings')
        .upsert({
          id: 1,
          whatsapp_number: merged.whatsapp_number,
          phone_number: merged.phone_number,
          store_name: merged.store_name,
          tagline: merged.tagline,
          delivery_enabled: merged.delivery_enabled,
          pickup_enabled: merged.pickup_enabled,
          store_address: merged.store_address,
          working_hours: merged.working_hours,
          minimum_order_notes: merged.minimum_order_notes,
          admin_pin: merged.admin_pin,
          facebook_url: merged.facebook_url,
          maps_url: merged.maps_url,
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (!error && data) {
        return data as StoreSettings;
      }
    } catch (err) {
      console.error('Supabase save settings error:', err);
    }
  }

  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(merged));
  return merged;
}

/**
 * Upload image to Supabase Storage 'product-images' bucket
 */
export async function uploadProductImage(file: File, folder = 'produce'): Promise<string> {
  if (!isSupabaseConfigured || !supabase) {
    // For demo/offline without active Supabase credentials, convert to object URL or base64 preview
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  }

  const fileExt = file.name.split('.').pop();
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from('product-images')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: true
    });

  if (uploadError) {
    throw uploadError;
  }

  const { data } = supabase.storage
    .from('product-images')
    .getPublicUrl(fileName);

  return data.publicUrl;
}
