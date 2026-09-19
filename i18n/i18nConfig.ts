interface I18nConfigProps {
  locales: string[];
  defaultLocale: string;
  prefixDefault?: boolean;
}

export const i18nConfig: I18nConfigProps = {
  locales: ["en", "fa"],
  defaultLocale: "en",
  prefixDefault: true,
} as const;

export type Locale = (typeof i18nConfig.locales)[number];
