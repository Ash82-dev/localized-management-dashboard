import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRecord as updateRecordApi } from "../services";
import { RecordFormData } from "../schema";
import { queryKeys } from "@/constants";

export function useUpdateRecord() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: ({ id, record }: { id: number; record: RecordFormData }) =>
      updateRecordApi(id, record),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getRecords],
      });

      queryClient.invalidateQueries({
        queryKey: [queryKeys.getRecord, id],
      });
    },
  });

  return { updateRecord: mutateAsync, isUpdating: isPending };
}
