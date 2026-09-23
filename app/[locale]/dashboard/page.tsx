import { Suspense } from "react";
import SummaryCardBox from "@/features/dashboard/components/SummaryCardBox";
import RecordsTable from "@/features/dashboard/components/table/RecordsTable";
import CardsSkeleton from "@/features/dashboard/components/skeletons/CardsSkeleton";
import TableSkeleton from "@/features/dashboard/components/skeletons/TableSkeleton";
import RecordsBarChart from "@/features/dashboard/components/RecordsBarChart";
import ChartSkeleton from "@/features/dashboard/components/skeletons/ChartSkeleton";

async function Page() {
  return (
    <div className="flex grow flex-col items-center gap-20 px-5 py-7">
      <Suspense fallback={<CardsSkeleton />}>
        <SummaryCardBox />
      </Suspense>

      <Suspense fallback={<TableSkeleton />}>
        <RecordsTable />
      </Suspense>

      <Suspense fallback={<ChartSkeleton />}>
        <RecordsBarChart />
      </Suspense>
    </div>
  );
}

export default Page;
