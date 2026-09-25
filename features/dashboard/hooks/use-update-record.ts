import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRecord as updateRecordApi } from "../services";
import { RecordFormData } from "../schema";
import { queryKeys } from "@/constants";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export function useUpdateRecord() {
  const { t } = useTranslation();
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

      queryClient.invalidateQueries({
        queryKey: [queryKeys.getChart],
      });

      toast.success(t("common:msg_operation_successful"));
    },
    onError: () => {
      toast.error(t("common:msg_operation_failed"));
    },
  });

  return { updateRecord: mutateAsync, isUpdating: isPending };
}
