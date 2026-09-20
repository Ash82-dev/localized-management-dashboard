import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecords } from "./services";

export function useRecords() {
  const { data, error } = useSuspenseQuery({
    queryKey: ["records"],
    queryFn: getRecords,
  });

  return { records: data, error };
}
