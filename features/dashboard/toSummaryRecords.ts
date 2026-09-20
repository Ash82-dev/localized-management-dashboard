import { Record, RecordsSummary } from "./types";

export function toSummaryRecords(
  records: Record[] | undefined,
): RecordsSummary[] {
  const totalRecords = records?.length ?? 0;

  const activeRecords =
    records?.filter((record) => record.status === "active").length ?? 0;

  const averageScore =
    records && records.length > 0
      ? records.reduce((sum, record) => sum + record.score, 0) / records.length
      : 0;

  return [
    {
      label: "total_records",
      value: totalRecords,
    },
    {
      label: "active_records",
      value: activeRecords,
    },
    {
      label: "average_scores",
      value: averageScore,
    },
  ];
}
