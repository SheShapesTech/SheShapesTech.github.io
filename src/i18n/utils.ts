import de from './de.json';
import en from './en.json';

export type Translations = typeof de;
export type Locale = 'de' | 'en';

// Ensures en.json satisfies the same shape as de.json — TypeScript will error if a key is missing.
const translations: Record<Locale, Translations> = { de, en };

export function getLangFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] === 'en') return 'en';
  return 'de';
}

export function useTranslations(lang: Locale): Translations {
  return translations[lang];
}

export function getLocalizedPath(path: string, lang: Locale): string {
  if (lang === 'en') return `/en${path}`;
  return path;
}
