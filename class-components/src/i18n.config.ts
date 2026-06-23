import type { AbstractIntlMessages } from 'next-intl';

export const SUPPORTED_LOCALES = ['ru', 'en'] as const;
export const DEFAULT_LOCALE = 'ru' as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export type Messages = AbstractIntlMessages;

export const i18nConfig = {
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'always',
} as const;
