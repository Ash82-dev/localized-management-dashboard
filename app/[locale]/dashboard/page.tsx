import { Suspense } from "react";
import SummaryCardBox from "@/features/dashboard/components/SummaryCardBox";
import RecordsTable from "@/features/dashboard/components/table/RecordsTable";
import SummaryCardsBoxSkeleton from "@/features/dashboard/components/skeletons/SummaryCardsBoxSkeleton";
import TableSkeleton from "@/features/dashboard/components/skeletons/TableSkeleton";
import RecordsBarChart from "@/features/dashboard/components/RecordsBarChart";
import ChartSkeleton from "@/features/dashboard/components/skeletons/ChartSkeleton";
import QueryErrorBoundary from "@/features/dashboard/components/error/QueryErrorBoundary";

function Page() {
  return (
    <div className="flex grow flex-col items-center gap-20 px-5 py-7">
      <QueryErrorBoundary>
        <Suspense fallback={<SummaryCardsBoxSkeleton />}>
          <SummaryCardBox />
        </Suspense>
      </QueryErrorBoundary>

      <QueryErrorBoundary>
        <Suspense fallback={<TableSkeleton />}>
          <RecordsTable />
        </Suspense>
      </QueryErrorBoundary>

      <QueryErrorBoundary>
        <Suspense fallback={<ChartSkeleton />}>
          <RecordsBarChart />
        </Suspense>
      </QueryErrorBoundary>
    </div>
  );
}

export default Page;
