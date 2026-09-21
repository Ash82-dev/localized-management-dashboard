"use client";

import TablePagination from "@/components/ui/TablePagination";
import { parseRecordsParams } from "@/lib/parseRecordsParam";
import { useSearchParams } from "next/navigation";
import { useRecords } from "../use-records";

function RecordsTable() {
  const searchParams = useSearchParams();
  const { page, limit } = parseRecordsParams(searchParams);
  const { records } = useRecords({ page, limit });

  return (
    <div>
      <TablePagination
        page={page}
        pageCount={records.meta.totalPages}
        pageSize={records.meta.limit}
      />
    </div>
  );
}

export default RecordsTable;
