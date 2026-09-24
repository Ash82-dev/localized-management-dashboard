import { formatNumber } from "@/lib/number-formatter";
import { RecordsResponse, RecordsSummary } from "./types";

export function toSummaryRecords({
  data: records,
  meta,
}: RecordsResponse): RecordsSummary[] {
  const totalRecords = meta.total ?? 0;

  const activeRecords =
    records?.filter((record) => record.status === "active").length ?? 0;

  const averageScore =
    records && records.length > 0
      ? records.reduce((sum, record) => sum + (record.score ?? 0), 0) /
        records.length
      : 0;

  return [
    {
      label: "lbl_total_records",
      value: totalRecords,
    },
    {
      label: "lbl_active_records",
      value: activeRecords,
    },
    {
      label: "lbl_average_scores",
      value: formatNumber(averageScore),
    },
  ];
}
