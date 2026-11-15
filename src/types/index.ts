export type ProductCategory = 'vegetables' | 'fruits' | 'leafy' | 'herbs' | 'seasonal';

export type ProductUnit = 
  | 'كيلو' 
  | 'نصف كيلو' 
  | 'ربع كيلو' 
  | 'قطعة' 
  | 'صندوق' 
  | 'ربطة' 
  | '2 كيلو' 
  | '3 كيلو' 
  | '5 كيلو' 
  | 'كرتونة' 
  | 'طبق';

export interface Product {
  id: string;
  arabic_name: string;
  english_name: string;
  category: ProductCategory;
  description: string;
  search_aliases: string[];
  image_url: string;
  is_available: boolean;
  is_featured: boolean;
  is_seasonal: boolean;
  allowed_units: string[];
  default_unit: string;
  price?: number;
  price_before_discount?: number;
  stock_quantity?: number;
  is_best_seller?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selected_unit: string;
  notes?: string;
}

export type CustomerType = 'individual' | 'commercial';
export type FulfillmentMethod = 'delivery' | 'pickup';

export interface OrderCustomerInfo {
  customer_type: CustomerType;
  full_name: string;
  phone_number: string;
  business_name?: string;
  contact_person?: string;
  fulfillment_method: FulfillmentMethod;
  delivery_address?: string;
  payment_method?: 'cash' | 'vodafone_cash' | 'instapay';
  order_notes?: string;
}

export interface SpecialOfferBundle {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  badge_color?: string;
  image_url: string;
  serves_text: string;
  items_summary: string[];
  product_ids: { productId: string; quantity: number; unit: string }[];
}

export interface StoreSettings {
  whatsapp_number: string;
  phone_number?: string;
  store_name: string;
  tagline: string;
  delivery_enabled: boolean;
  pickup_enabled: boolean;
  store_address: string;
  working_hours: string;
  minimum_order_notes?: string;
  admin_pin?: string;
  facebook_url?: string;
  maps_url?: string;
}
