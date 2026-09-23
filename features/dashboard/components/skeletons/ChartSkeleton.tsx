function ChartSkeleton() {
  return (
    <div className="flex h-96 w-full animate-pulse items-center justify-around rounded-sm bg-surface p-4 shadow-lg">
      {Array.from({ length: 5 }, (_, i) => (
        <BarSkeleton key={i} />
      ))}
    </div>
  );
}

function BarSkeleton() {
  return <div className="h-[80%] w-10 animate-pulse bg-surface-variant"></div>;
}

export default ChartSkeleton;
