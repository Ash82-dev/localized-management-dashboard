export interface Record {
  id: number;
  category: string;
  status: "active" | "inactive";
  score: number;
  description: string;
}

export interface RecordsResponse {
  data: Record[];
}

export interface RecordsSummary {
  label: string;
  value: number;
}
