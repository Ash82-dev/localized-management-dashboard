import { useSuspenseQuery } from "@tanstack/react-query";
import { getCategoryCountBarChartData } from "../services";
import { queryKeys } from "@/constants";

export function useRecordsChart() {
  const { data } = useSuspenseQuery({
    queryKey: [queryKeys.getChart],
    queryFn: getCategoryCountBarChartData,
  });

  return { recordsChartData: data };
}
