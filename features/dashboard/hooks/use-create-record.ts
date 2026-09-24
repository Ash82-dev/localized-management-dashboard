import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRecord as createRecordApi } from "../services";
import { RecordFormData } from "../schema";
import { queryKeys } from "@/constants";

export function useCreateRecord() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (record: RecordFormData) => createRecordApi(record),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getRecords],
      });
    },
  });

  return { createRecord: mutateAsync, isCreating: isPending };
}
