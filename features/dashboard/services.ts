import { api } from "@/lib/client";
import { RecordsParams, RecordsResponse } from "./types";

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
