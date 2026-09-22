export const statusOptions = ["active", "inactive"] as const;

export type Status = (typeof statusOptions)[number];

export const categoryOptions = [
  "development",
  "design",
  "marketing",
  "operations",
  "research",
] as const;

export type Category = (typeof categoryOptions)[number];

export interface Record {
  id: number;
  name: string;
  category: Category;
  status: Status;
  score: number;
  description: string;
  createdAt: string;
}

interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface RecordsResponse {
  data: Record[];
  meta: Meta;
}

export interface RecordsParams {
  page?: number;
  limit?: number | "all";
  search?: string;
  status?: Status;
}

export interface RecordsSummary {
  label: string;
  value: number;
}
