//No estoy usando i18n, solo es un nombre
// src/lib/i18n.ts
import es from '../locales/es.json';
import en from '../locales/en.json';

export function getTranslation(lang: string) {
  const translations: Record<string, any> = { es, en };
  return translations[lang] ?? es;
}