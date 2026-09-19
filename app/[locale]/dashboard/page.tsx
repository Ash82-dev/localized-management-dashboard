import initTranslations from "@/i18n";
import { PageParams } from "@/types/routes-types";

async function Page({ params }: PageParams) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["dashboard"]);

  return <div></div>;
}

export default Page;
