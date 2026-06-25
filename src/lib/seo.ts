import { routing, type Locale } from "@/i18n/routing";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://dead-or-alive-6-last-round.wiki").replace(/\/$/, "");

export const defaultSeoImagePath = "/images/hero.webp";

export function localizedPath(pathname: string, locale: Locale) {
  if (pathname === "/") return locale === routing.defaultLocale ? "/" : `/${locale}`;
  return locale === routing.defaultLocale ? pathname : `/${locale}${pathname}`;
}

export function absoluteUrl(pathname: string, locale?: Locale) {
  if (pathname.startsWith("http")) return pathname;
  const path = locale ? localizedPath(pathname, locale) : pathname;
  return `${siteUrl}${path === "/" ? "" : path}`;
}

export function languageAlternates(pathname: string) {
  return {
    ...Object.fromEntries(routing.locales.map((locale) => [locale, localizedPath(pathname, locale)])),
    "x-default": localizedPath(pathname, routing.defaultLocale),
  };
}

export function absoluteLanguageAlternates(pathname: string) {
  return {
    ...Object.fromEntries(routing.locales.map((locale) => [locale, absoluteUrl(pathname, locale)])),
    "x-default": absoluteUrl(pathname, routing.defaultLocale),
  };
}

export function pageAlternates(pathname: string, locale: Locale) {
  return {
    canonical: localizedPath(pathname, locale),
    languages: languageAlternates(pathname),
  };
}

export function openGraphLocale(locale: Locale) {
  const locales: Record<Locale, string> = {
    en: "en_US",
    ja: "ja_JP",
    ko: "ko_KR",
    es: "es_ES",
  };

  return locales[locale];
}
