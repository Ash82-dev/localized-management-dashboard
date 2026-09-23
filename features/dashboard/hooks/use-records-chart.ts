import { useSuspenseQuery } from "@tanstack/react-query";
import { getCategoryCountBarChartData } from "../services";

export function useRecordsChart() {
  const { data } = useSuspenseQuery({
    queryKey: ["records-chart"],
    queryFn: getCategoryCountBarChartData,
  });

  return { recordsChartData: data };
}
