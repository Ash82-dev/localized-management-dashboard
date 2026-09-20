import { Suspense } from "react";
import initTranslations from "@/i18n";
import { PageParams } from "@/types/routes-types";
import SummaryCardBox from "@/features/dashboard/components/SummaryCardBox";
import CardsAndTableSkeleton from "@/features/dashboard/components/CardsAndTableSkeleton";

async function Page({ params }: PageParams) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["dashboard"]);

  return (
    <div className="flex grow flex-col items-center gap-5 px-5 py-7">
      <Suspense fallback={<CardsAndTableSkeleton />}>
        <SummaryCardBox />
      </Suspense>
    </div>
  );
}

export default Page;
