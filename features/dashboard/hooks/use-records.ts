import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecords } from "../services";
import { RecordsParams } from "../types";
import { queryKeys } from "@/constants";

export function useRecords(params: RecordsParams) {
  const { data, error } = useSuspenseQuery({
    queryKey: [queryKeys.getRecords, params],
    queryFn: () => getRecords(params),
  });

  return { records: data, error };
}
