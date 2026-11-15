import { Product } from '../types';

/**
 * Normalizes Arabic text for flexible matching:
 * - Removes diacritics (tashkeel)
 * - Normalizes Alef forms (أ, إ, آ, ٱ -> ا)
 * - Normalizes Taa Marbuta (ة -> ه)
 * - Normalizes Yaa (ى -> ي)
 * - Removes non-alphanumeric punctuation and collapses multiple spaces
 */
export function normalizeArabicText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    // Remove Arabic tashkeel / diacritics
    .replace(/[\u064B-\u0652\u0670\u0640]/g, '')
    // Normalize Alefs
    .replace(/[أإآٱ]/g, 'ا')
    // Normalize Taa Marbuta
    .replace(/ة/g, 'ه')
    // Normalize Yaa / Alif Maqsura
    .replace(/ى/g, 'ي')
    // Remove extra punctuation
    .replace(/[^\w\s\u0600-\u06FF]/gi, ' ')
    // Collapse whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Evaluates whether a product matches a user search query
 */
export function matchesSearchQuery(product: Product, rawQuery: string): boolean {
  const query = normalizeArabicText(rawQuery);
  if (!query) return true;

  const queryTerms = query.split(' ').filter(Boolean);

  const normalizedArabic = normalizeArabicText(product.arabic_name);
  const normalizedEnglish = product.english_name.toLowerCase();
  const normalizedDesc = normalizeArabicText(product.description);
  const normalizedCategory = product.category.toLowerCase();
  const normalizedAliases = (product.search_aliases || []).map(normalizeArabicText);

  // Check if every query term matches at least one attribute of the product
  return queryTerms.every(term => {
    return (
      normalizedArabic.includes(term) ||
      normalizedEnglish.includes(term) ||
      normalizedDesc.includes(term) ||
      normalizedCategory.includes(term) ||
      normalizedAliases.some(alias => alias.includes(term) || term.includes(alias))
    );
  });
}

const RECENT_SEARCHES_KEY = 'al_maher_recent_searches_v1';

export function getRecentSearches(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_SEARCHES_KEY);
    return raw ? JSON.parse(raw) : ['طماطم', 'مانجو', 'بطاطس', 'موز', 'فراولة'];
  } catch {
    return ['طماطم', 'مانجو', 'بطاطس', 'موز', 'فراولة'];
  }
}

export function saveRecentSearch(term: string): void {
  try {
    const trimmed = term.trim();
    if (!trimmed) return;
    const existing = getRecentSearches().filter(s => s.toLowerCase() !== trimmed.toLowerCase());
    const updated = [trimmed, ...existing].slice(0, 8);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
  } catch {
    // ignore local storage errors
  }
}

export function clearRecentSearches(): void {
  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  } catch {
    // ignore
  }
}
