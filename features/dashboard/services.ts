import { api } from "@/lib/client";
import {
  Record,
  RecordsChartResponse,
  RecordsParams,
  RecordsResponse,
} from "./types";
import { RecordFormData } from "./schema";

export async function getRecords({
  page = 1,
  limit = 10,
  search,
  status,
}: RecordsParams): Promise<RecordsResponse> {
  return await api.get<RecordsResponse>("/records", {
    params: {
      page,
      limit,
      search,
      status,
    },
  });
}

export async function getRecord(id: number): Promise<Record> {
  return await api.get<Record>(`/records/${id}`);
}

export async function createRecord(record: RecordFormData) {
  await api.post<Record>("/records", record);
}

export async function updateRecord(id: number, record: RecordFormData) {
  await api.patch<Record>(`/records/${id}`, record);
}

export async function getCategoryCountBarChartData(): Promise<RecordsChartResponse> {
  return await api.get<RecordsChartResponse>("/charts/categories");
}
