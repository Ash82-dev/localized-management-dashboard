import SummaryCardSkeleton from "./SummaryCardSkeleton";

function SummaryCardsBoxSkeleton() {
  return (
    <section className="grid w-full grid-cols-1 place-items-center justify-around gap-5 md:grid-cols-3">
      {Array.from({ length: 3 }, (_, i) => (
        <SummaryCardSkeleton key={i} />
      ))}
    </section>
  );
}

export default SummaryCardsBoxSkeleton;
