import ChartSkeleton from "@/features/dashboard/components/skeletons/ChartSkeleton";
import SummaryCardsBoxSkeleton from "@/features/dashboard/components/skeletons/SummaryCardsBoxSkeleton";
import TableSkeleton from "@/features/dashboard/components/skeletons/TableSkeleton";

function loading() {
  return (
    <div className="flex grow flex-col items-center gap-20 px-5 py-7">
      <SummaryCardsBoxSkeleton />

      <TableSkeleton />

      <ChartSkeleton />
    </div>
  );
}

export default loading;
