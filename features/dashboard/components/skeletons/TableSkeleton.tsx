function TableSkeleton() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="h-7 w-70 animate-pulse rounded-sm bg-surface"></div>
        <div className="h-7 w-30 animate-pulse rounded-sm bg-surface"></div>
      </div>
      <div className="h-70 w-full animate-pulse rounded-sm bg-surface"></div>
      <div className="flex items-center justify-between">
        <div className="h-7 w-50 animate-pulse rounded-sm bg-surface"></div>
        <div className="h-7 w-70 animate-pulse rounded-sm bg-surface"></div>
      </div>
    </div>
  );
}

export default TableSkeleton;
