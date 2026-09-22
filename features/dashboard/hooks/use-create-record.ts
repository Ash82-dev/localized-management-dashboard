import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRecord as createRecordApi } from "../services";
import { RecordFormData } from "../schema";

export function useCreateRecord() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["create-record"],
    mutationFn: (record: RecordFormData) => createRecordApi(record),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["records"],
      });
    },
  });

  return { createRecord: mutateAsync, isCreating: isPending };
}
