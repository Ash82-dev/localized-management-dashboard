"use client";

import { useRecords } from "../hooks/use-records";
import SummaryCard from "./SummaryCard";
import { toSummaryRecords } from "../toSummaryRecords";

function SummaryCardBox() {
  const { records } = useRecords({ limit: "all" });

  return (
    <section className="grid w-full grid-cols-1 place-items-center justify-around gap-5 md:grid-cols-3">
      {toSummaryRecords(records).map((card) => (
        <SummaryCard
          key={card.label}
          label={card.label}
          value={String(card.value)}
        />
      ))}
    </section>
  );
}

export default SummaryCardBox;
