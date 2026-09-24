import { useQuery } from "@tanstack/react-query";
import { getRecord } from "../services";
import { queryKeys } from "@/constants";

export function useRecord(id?: number, enabled: boolean = false) {
  const { data: record, isLoading } = useQuery({
    queryKey: [queryKeys.getRecord, id],
    queryFn: () => getRecord(id!),
    enabled: id !== undefined && enabled,
  });

  return { record, isLoading };
}
