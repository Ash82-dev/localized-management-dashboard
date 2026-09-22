import { RecordFormData } from "./schema";
import { Record } from "./types";

export function toRecordFormData(record: Record): RecordFormData {
  return {
    name: record.name ?? "",
    status: record.status ?? "active",
    category: record.category ?? "development",
    score: record.score ?? 0,
    createdAt: record.createdAt ?? "",
    description: record.description ?? "",
  };
}
