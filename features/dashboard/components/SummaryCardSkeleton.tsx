function SummaryCardSkeleton() {
  return (
    <div className="flex min-h-37.5 w-full flex-col items-center gap-7 rounded-sm bg-surface px-10 py-7 text-on-surface shadow-lg">
      <div className="h-7 w-[50%] animate-pulse rounded-md bg-surface-variant"></div>
      <div className="h-7 w-[20%] animate-pulse rounded-md bg-surface-variant"></div>
    </div>
  );
}

export default SummaryCardSkeleton;
