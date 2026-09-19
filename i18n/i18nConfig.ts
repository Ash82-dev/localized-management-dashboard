export const i18nConfig = {
  locales: ["en", "fa"],
  defaultLocale: "en",
} as const;

export type Locale = (typeof i18nConfig.locales)[number];
