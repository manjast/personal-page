export const locales = ['en', 'sr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeMeta = {
  en: {
    label: 'English',
    shortLabel: 'EN',
    lang: 'en',
    hreflang: 'en',
    prefix: '',
  },
  sr: {
    label: 'Српски',
    shortLabel: 'СР',
    lang: 'sr-Cyrl-RS',
    hreflang: 'sr-Cyrl',
    prefix: '/sr',
  },
} as const;

type AlternatePaths = Record<Locale | 'x-default', string>;

export function normalizePath(pathname: string) {
  if (!pathname.startsWith('/')) {
    pathname = `/${pathname}`;
  }

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return `${pathname}/`;
  }

  return pathname;
}

export function stripLocalePrefix(pathname: string) {
  const normalized = normalizePath(pathname);

  if (normalized === '/sr/') {
    return '/';
  }

  if (normalized.startsWith('/sr/')) {
    return normalized.replace(/^\/sr/, '');
  }

  return normalized;
}

export function localizedPath(locale: Locale, pathname: string) {
  const basePath = stripLocalePrefix(pathname);

  if (locale === 'en') {
    return basePath;
  }

  return basePath === '/' ? '/sr/' : `/sr${basePath}`;
}

export function localizedHref(locale: Locale, href: string) {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) {
    return href;
  }

  return localizedPath(locale, href);
}

export function getAlternatePaths(pathname: string): AlternatePaths {
  const en = localizedPath('en', pathname);
  const sr = localizedPath('sr', pathname);

  return {
    en,
    sr,
    'x-default': en,
  };
}

export function absoluteUrl(siteUrl: string, pathname: string) {
  return new URL(normalizePath(pathname), siteUrl).toString();
}

export function caseStudyPath(locale: Locale, slug: string) {
  return localizedPath(locale, `/work/${slug}/`);
}
