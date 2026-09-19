import { Locale } from "@/i18n/i18nConfig";

export interface PageParams {
  params: Promise<{ locale: Locale }>;
}
