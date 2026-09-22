import { useQuery } from "@tanstack/react-query";
import { getRecord } from "../services";

export function useRecord(id?: number, enabled: boolean = false) {
  const { data: record, isLoading } = useQuery({
    queryKey: ["record", id],
    queryFn: () => getRecord(id!),
    enabled: id !== undefined && enabled,
  });

  return { record, isLoading };
}
