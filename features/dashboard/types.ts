export interface Record {
  id: number;
  category: string;
  status: "active" | "inactive";
  score: number;
  description: string;
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
  status?: "active" | "inactive";
}

export interface RecordsSummary {
  label: string;
  value: number;
}
