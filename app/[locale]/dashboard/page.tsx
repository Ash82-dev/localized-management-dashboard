import initTranslations from "@/i18n";
import { Locale } from "@/i18n/i18nConfig";

async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["dashboard"]);

  return <main>{t("dashboard")}</main>;
}

export default Page;
