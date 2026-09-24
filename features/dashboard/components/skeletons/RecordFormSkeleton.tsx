function RecordFormSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }, (_, i) => (
        <RecordFieldSkeleton key={i} />
      ))}
    </div>
  );
}

function RecordFieldSkeleton() {
  return (
    <>
      <div className="h-5 w-1/6 animate-pulse rounded-sm bg-surface-variant"></div>
      <div className="h-7 w-full animate-pulse rounded-sm bg-surface-variant"></div>
    </>
  );
}

export default RecordFormSkeleton;
