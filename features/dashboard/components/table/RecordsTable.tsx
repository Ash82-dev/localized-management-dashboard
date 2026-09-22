"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

import { useRecords } from "../../hooks/use-records";
import { parseRecordsParams } from "@/lib/parse-records-param";

import TablePagination from "@/components/ui/TablePagination";
import { DataTable } from "./DataTable";
import { getColumns } from "./columns";
import TableActionsRow from "./TableActionsRow";
import RecordFormDialog from "../RecordDialogForm";

function RecordsTable() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<number | undefined>(undefined);
  const { t, i18n } = useTranslation();
  const searchParams = useSearchParams();
  const params = parseRecordsParams(searchParams);
  const { records } = useRecords(params);

  function handleEdit(id: number) {
    setEditingId(id);
    setOpen(true);
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <TableActionsRow />

      <DataTable
        data={records.data}
        columns={getColumns(t, i18n.language, handleEdit)}
      />

      <RecordFormDialog isOpen={isOpen} setOpen={setOpen} id={editingId} />

      <TablePagination
        page={params.page}
        pageCount={records.meta.totalPages}
        pageSize={records.meta.limit}
      />
    </div>
  );
}

export default RecordsTable;
