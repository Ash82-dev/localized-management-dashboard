import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecords } from "../services";
import { RecordsParams } from "../types";

export function useRecords(params: RecordsParams) {
  const { data, error } = useSuspenseQuery({
    queryKey: ["records", params],
    queryFn: () => getRecords(params),
  });

  return { records: data, error };
}
