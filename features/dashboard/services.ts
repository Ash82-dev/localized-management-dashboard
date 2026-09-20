import { api } from "@/lib/client";
import { Record, RecordsResponse } from "./types";

export async function getRecords(): Promise<Record[]> {
  const records = await api.get<RecordsResponse>("/records");
  return records.data;
}
