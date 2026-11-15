-- =====================================================================
-- AL MAHER | الماهر — SUPABASE DATABASE SCHEMA
-- Premium Grocery Store (Vegetables & Fruits)
-- Arabic-First, No Prices, WhatsApp Commerce
-- =====================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES (Store Administrators)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE,
  full_name TEXT,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'staff')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CATEGORIES
CREATE TABLE IF NOT EXISTS public.categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  english_name TEXT,
  icon TEXT DEFAULT 'Sparkles',
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PRODUCTS (No price fields anywhere!)
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  arabic_name TEXT NOT NULL,
  english_name TEXT,
  category TEXT REFERENCES public.categories(id) ON DELETE SET NULL,
  description TEXT,
  search_aliases TEXT[] DEFAULT '{}',
  image_url TEXT NOT NULL,
  is_available BOOLEAN DEFAULT TRUE,
  is_featured BOOLEAN DEFAULT FALSE,
  is_seasonal BOOLEAN DEFAULT FALSE,
  allowed_units TEXT[] DEFAULT ARRAY['كيلو', 'نصف كيلو'],
  default_unit TEXT DEFAULT 'كيلو',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for speedy Arabic and English search
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category);
CREATE INDEX IF NOT EXISTS idx_products_available ON public.products(is_available);
CREATE INDEX IF NOT EXISTS idx_products_featured ON public.products(is_featured);
CREATE INDEX IF NOT EXISTS idx_products_seasonal ON public.products(is_seasonal);

-- 4. PRODUCT IMAGES (Optional gallery / storage record per product)
CREATE TABLE IF NOT EXISTS public.product_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id TEXT REFERENCES public.products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  storage_path TEXT,
  alt_text TEXT,
  is_primary BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. PRODUCT UNITS (Predefined or custom units)
CREATE TABLE IF NOT EXISTS public.product_units (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  unit_name TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. STORE SETTINGS (Single-row configuration for WhatsApp, fulfillment, etc.)
CREATE TABLE IF NOT EXISTS public.store_settings (
  id INT PRIMARY KEY DEFAULT 1,
  whatsapp_number TEXT DEFAULT '', -- Administrator configures this
  store_name TEXT DEFAULT 'الماهر للخضروات والفاكهة',
  tagline TEXT DEFAULT 'الطازة تبدأ من الماهر',
  delivery_enabled BOOLEAN DEFAULT TRUE,
  pickup_enabled BOOLEAN DEFAULT TRUE,
  store_address TEXT DEFAULT 'جمهورية مصر العربية',
  working_hours TEXT DEFAULT 'يومياً من ٨ صباحاً حتى ١١ مساءً',
  minimum_order_notes TEXT DEFAULT 'نحرص على فرز واختيار أفضل حبة خضار وفاكهة خصيصاً لطلبك.',
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT single_row_check CHECK (id = 1)
);

-- Insert Default Store Settings
INSERT INTO public.store_settings (id, whatsapp_number, store_name, tagline, delivery_enabled, pickup_enabled, store_address, working_hours)
VALUES (
  1,
  '', -- Initially empty until configured by admin
  'الماهر للخضروات والفاكهة',
  'الطازة تبدأ من الماهر',
  TRUE,
  TRUE,
  'جمهورية مصر العربية',
  'يومياً من ٨:٠٠ ص حتى ١١:٠٠ م'
)
ON CONFLICT (id) DO NOTHING;

-- Insert Standard Categories
INSERT INTO public.categories (id, name, english_name, icon, display_order)
VALUES 
  ('vegetables', 'الخضروات', 'Vegetables', 'Carrot', 1),
  ('fruits', 'الفاكهة', 'Fresh Fruits', 'Apple', 2),
  ('leafy', 'الخضروات الورقية', 'Leafy Greens', 'Salad', 3),
  ('herbs', 'الأعشاب الطازجة', 'Fresh Herbs', 'Leaf', 4),
  ('seasonal', 'المحاصيل الموسمية', 'Seasonal Produce', 'Calendar', 5)
ON CONFLICT (id) DO NOTHING;

-- Insert Standard Units
INSERT INTO public.product_units (unit_name, description)
VALUES 
  ('كيلو', 'وزن بالكيلوغرام'),
  ('نصف كيلو', 'وزن 500 غرام'),
  ('ربع كيلو', 'وزن 250 غرام'),
  ('قطعة', 'بالواحدة'),
  ('صندوق', 'صندوق خشبي أو كرتونة'),
  ('ربطة', 'حزمة أعشاب ورقية'),
  ('طبق', 'طبق تغليف فوم أو بلاستيك'),
  ('2 كيلو', 'وزن 2 كيلوغرام'),
  ('3 كيلو', 'وزن 3 كيلوغرام'),
  ('5 كيلو', 'وزن 5 كيلوغرام')
ON CONFLICT (unit_name) DO NOTHING;

-- =====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_units ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_settings ENABLE ROW LEVEL SECURITY;

-- 1. Public Read Policies (Anyone can browse active catalog and settings)
CREATE POLICY "Public can view active products" 
  ON public.products FOR SELECT USING (true);

CREATE POLICY "Public can view categories" 
  ON public.categories FOR SELECT USING (true);

CREATE POLICY "Public can view units" 
  ON public.product_units FOR SELECT USING (true);

CREATE POLICY "Public can view store settings" 
  ON public.store_settings FOR SELECT USING (true);

CREATE POLICY "Public can view product images" 
  ON public.product_images FOR SELECT USING (true);

-- 2. Authenticated Admin Write Policies
CREATE POLICY "Admins have full access to products" 
  ON public.products FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to categories" 
  ON public.categories FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to store_settings" 
  ON public.store_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to product_images" 
  ON public.product_images FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins have full access to product_units" 
  ON public.product_units FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Users can view their own profile" 
  ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);

-- Storage bucket creation for product images
-- (Executed in Supabase SQL editor or Supabase Storage API)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('product-images', 'product-images', true) ON CONFLICT DO NOTHING;
