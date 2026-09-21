"use client";

import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useRecords } from "../../hooks/use-records";
import TablePagination from "@/components/ui/TablePagination";
import { parseRecordsParams } from "@/lib/parseRecordsParam";
import { DataTable } from "./DataTable";
import { getColumns } from "./columns";
import TableActionsRow from "./TableActionsRow";

function RecordsTable() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const params = parseRecordsParams(searchParams);
  const { records } = useRecords(params);

  return (
    <div className="flex w-full flex-col gap-3">
      <TableActionsRow />

      <DataTable data={records.data} columns={getColumns(t)} />

      <TablePagination
        page={params.page}
        pageCount={records.meta.totalPages}
        pageSize={records.meta.limit}
      />
    </div>
  );
}

export default RecordsTable;
