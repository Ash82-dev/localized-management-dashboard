import { RecordFormData } from "./schema";
import { Category, Record as RecordType } from "./types";

export function toRecordFormData(record: RecordType): RecordFormData {
  return {
    name: record.name ?? "",
    status: record.status ?? "active",
    category: record.category ?? "development",
    score: record.score ?? 0,
    createdAt: record.createdAt ?? "",
    description: record.description ?? "",
  };
}

export const toLocalizedChartLabelKey: Record<Category, string> = {
  development: "lbl_development_category",
  design: "lbl_design_category",
  marketing: "lbl_marketing_category",
  operations: "lbl_operations_category",
  research: "lbl_research_category",
};

export const categoryColors: Record<Category, string> = {
  development: "var(--chart-1)",
  design: "var(--chart-2)",
  marketing: "var(--chart-3)",
  operations: "var(--chart-4)",
  research: "var(--chart-5)",
};
