"use client";

import { TFunction } from "i18next";
import { createColumnHelper } from "@tanstack/react-table";

import { type DataTableFeatures } from "./DataTableFeatures";
import { Record } from "../../types";
import { formatLocalizedDate } from "@/lib/date-time";
import { SquarePenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const columnHelper = createColumnHelper<DataTableFeatures, Record>();

export function getColumns(
  t: TFunction,
  locale: string,
  onEdit: (id: number) => void,
) {
  return columnHelper.columns([
    columnHelper.accessor("id", {
      header: t("lbl_id"),
    }),
    columnHelper.accessor("name", {
      header: t("lbl_name"),
    }),
    columnHelper.accessor("status", {
      header: t("lbl_status"),
    }),
    columnHelper.accessor("category", {
      header: t("lbl_category"),
    }),
    columnHelper.accessor("score", {
      header: t("lbl_score"),
    }),
    columnHelper.accessor("createdAt", {
      header: t("lbl_createdAt"),
      cell: ({ row }) => {
        const createAt = String(row.getValue("createdAt"));
        return <div>{formatLocalizedDate(createAt, locale)}</div>;
      },
    }),
    columnHelper.accessor("description", {
      header: t("lbl_description"),
    }),
    columnHelper.display({
      id: "actions",
      cell: ({ row }) => {
        return (
          <Button
            variant="link"
            className="cursor-pointer"
            onClick={() => onEdit(row.original.id ?? 0)}
          >
            <SquarePenIcon className="h-4 w-4" />
          </Button>
        );
      },
    }),
  ]);
}
