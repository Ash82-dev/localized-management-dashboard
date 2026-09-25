import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRecord as createRecordApi } from "../services";
import { RecordFormData } from "../schema";
import { queryKeys } from "@/constants";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export function useCreateRecord() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (record: RecordFormData) => createRecordApi(record),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getRecords],
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

  return { createRecord: mutateAsync, isCreating: isPending };
}
