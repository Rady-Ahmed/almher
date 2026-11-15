# الماهر | AL MAHER
> **"الطازة تبدأ من الماهر"**  
> Premium Grocery Shopping Platform for Fresh Vegetables & Fruits | React | PWA | Supabase | WhatsApp Commerce

---

## 1. Overview & Architecture

**الماهر (AL MAHER)** is an international-grade, lightweight, ultra-fast grocery shopping platform designed specifically for the fresh produce market (vegetables, fruits, leafy greens, and herbs). Built with an Arabic-first RTL aesthetic, realistic commercial food photography, flexible unit selection, and frictionless WhatsApp commerce.

### Core Stack
- **Frontend:** React 18, TypeScript 5, Vite 6
- **Styling & Design System:** Tailwind CSS v3, RTL (`dir="rtl"`), Custom Arabic Typography (`IBM Plex Sans Arabic`, `Cairo`)
- **Interactive Nationwide Map:** Interactive vector map of Egypt showcasing Al Maher's presence across all 27 governorates with real-time radar pulses and regional produce sourcing.
- **Special Curated Bundles:** 1-click addition of weekly family and gourmet boxes to the shopping cart.
- **PWA Capabilities:** Standalone mobile display, Web App Manifest, Service Worker (`sw.js`) with cache-first static shell and stale-while-revalidate for product imagery, offline fallback screen (`offline.html`)
- **Database & Storage:** Supabase PostgreSQL with Row Level Security (RLS) policies, text-based image URLs, and automatic local fallback mode when credentials are not configured
- **Ordering Engine:** WhatsApp Commerce via dynamic Arabic message generation with customer classification (فردي / تجاري) and fulfillment methods (توصيل / استلام)
- **Administration:** Secure admin dashboard (`/admin`) for product CRUD, category filtering, CSV export, and store configuration.

---

## 2. Brand Identity & Logo Suite

- **Primary Brand Color:** `#D92732` (Al Maher Crimson Red)
- **Supporting Palette:**
  - Neutral Dark: `#252525`
  - Subtle Surface: `#F7F7F5`
  - Clean Background: `#FFFFFF`
  - Border: `#EAEAEA`
  - Fresh Accent: `#15803D`
- **Logo Assets (`public/`):**
  - `logo.svg`: Main horizontal brandmark with Arabic lettering "الماهر", English subtitle, and stylized leaf emblem.
  - `logo-white.svg`: Inverted version for dark backgrounds and footer.
  - `logo-compact.svg`: Square badge mark for icons and compact headers.
  - `favicon.svg`: Vector icon favicon.
  - `manifest.json`: Web app manifest for Android and iOS PWA installation.

---

## 3. Product Catalog (152 Unique Items)

The catalog covers over 150 Egyptian produce items across 5 core categories with realistic studio photography and zero pricing:

| Category | Count | Sample Items |
| :--- | :---: | :--- |
| **الخضروات (Vegetables)** | 60 | طماطم بلدي، طماطم شيري، بطاطس تحمير سبونتا، بصل أحمر وأبيض، ثوم بلدي، خيار، جزر سكري، كوسة، باذنجان رومي، فلفل ألوان، فلفل حار، خس كابوتشا، كرنب بلدي، قرنبيط، بروكلي، بامية بلدي، بسلة، سبانخ، ملوخية، بنجر، بطاطا حلوة، قرع عسلي، خرشوف، قلقاس، ذرة سكرية، مشروم أبيض، كرفس، هليون، وغيرها. |
| **الفاكهة (Fruits)** | 74 | تفاح أحمر وأخضر وأصفر، موز بلدي ومستورد، برتقال بسرة وبلدي وسكري، يوسفي، ليمون بلدي وأضاليا، مانجو عويس وفص وسكري وكيت، جوافة بناتي، عنب بناتي وكريمسون وفليم، فراولة، رمان منفلوطي، بطيخ جيزة، شمام، كانتلوب، خوخ سيناوي، برقوق، مشمش، كمثرى، تين برشومي، تين شوكي مقشر، بلح زغلول وسماني وبرحي ومجدول، كاكا، كيوي، أناناس، أفوكادو هاس، دراجون فروت، باشن فروت، ليتشي، توت أزرق وأحمر، كرز، قشطة، وغيرها. |
| **الورقيات والأعشاب (Leafy & Herbs)** | 18 | بقدونس، كزبرة، شبت، نعناع بلدي وحبق سعودي، ريحان إيطالي، جرجير فلاحي، سلق، زعتر بري، روزماري، مريمية، أوريجانو، ورق عنب بناتي، ثوم أخضر، كالي، خس لولو روسو، رشاد. |
| **المجموع** | **152 صنف** | **جميعها مفروزة ومجهزة ومتاحة للاختيار بالوحدات المخصصة.** |

---

## 4. Product Units & Selection

Units are tailored specifically for each product:
- **أوزان:** كيلو، نصف كيلو، ربع كيلو، 2 كيلو، 3 كيلو، 5 كيلو.
- **عدد وحزم:** قطعة، 2 قطعة، 3 قطع، صندوق، كرتونة، طبق تغليف، ربطة أعشاب (1 إلى 5 ربطات).
- **ملاحظات الزبون:** حقل خاص بكل منتج لكتابة تفضيلات التسوية (مثال: "حبات مستوية للأكل فوراً" أو "حبات خضراء للسلطة").

---

## 5. WhatsApp Commerce Engine

- **Editable Setting:** The WhatsApp number is configured directly from `/admin` (`whatsapp_number`). No fake or hardcoded numbers are used.
- **Safety Fallback:** If tested before a number is provided, the interface shows a clear administrative configuration notice and allows copying the fully-formatted Arabic order text.
- **Arabic Order Structure:**
  - Header with store name and timestamp
  - Customer type (`فردي` / `تجاري`)
  - Customer name & business name
  - Phone number
  - Delivery method (`توصيل للمنزل` مع العنوان أو `استلام من المتجر`)
  - Itemized table of products with selected units and custom notes
  - General order notes
  - Tagline: *"الطازة تبدأ من الماهر"*

---

## 6. Admin Dashboard (`/admin`)

- **Access:** Click the shield icon in the header or footer, or navigate to `/admin`.
- **Default PIN:** `2026`
- **Features:**
  - **Product Management:** Add new produce, edit existing items, delete, toggle availability (متاح / نفد), toggle featured & seasonal flags.
  - **Image Pipeline:** Upload images to Supabase Storage or paste external image URLs with live visual preview.
  - **Store Configuration:** Set WhatsApp phone number, toggle home delivery on/off, toggle in-store pickup on/off, update store address, working hours, and notes.
  - **CSV Export:** Download the entire catalog (150+ products) in standard UTF-8 CSV format for bulk auditing in Excel or Google Sheets.

---

## 7. Supabase Database Migration

The full SQL migration script is located at:
[`supabase/schema.sql`](file:///c:/Users/RADY/OneDrive/Desktop/almher/supabase/schema.sql)

### Tables:
1. `profiles`: Store admins.
2. `categories`: Produce categories.
3. `products`: Catalog items (NO price fields).
4. `product_images`: Storage image records.
5. `product_units`: Allowed measurement units.
6. `store_settings`: Single-row store configuration (WhatsApp number, delivery toggles).

### Setup in Supabase:
1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in your Supabase dashboard.
3. Paste the contents of `supabase/schema.sql` and run.
4. Copy your project URL and public Anon Key into `.env`:
   ```bash
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
5. Create a public Storage bucket named `product-images`.

---

## 8. PWA Verification & Offline Experience

- **Web App Manifest:** Validated in `public/manifest.json`.
- **Service Worker:** Validated in `public/sw.js` with offline caching strategy.
- **Offline Screen:** Available in `public/offline.html`.
- **Mobile Installation:** Custom prompt banner for Android/Chrome and interactive 3-step guide for iOS Safari.

---

## 9. Local Development & Production Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle with optimized code-splitting
npm run build

# Preview production build
npm run preview
```
#   a l m h e r  
 