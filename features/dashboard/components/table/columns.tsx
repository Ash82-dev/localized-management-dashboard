"use client";

import { createColumnHelper } from "@tanstack/react-table";

import { type DataTableFeatures } from "./DataTableFeatures";
import { Record } from "../../types";
import { TFunction } from "i18next";

const columnHelper = createColumnHelper<DataTableFeatures, Record>();

// export const columns = columnHelper.columns([
//   columnHelper.accessor("id", {
//     header: "Id",
//   }),
//   columnHelper.accessor("name", {
//     header: "Name",
//   }),
//   columnHelper.accessor("status", {
//     header: "Status",
//   }),
//   columnHelper.accessor("score", {
//     header: "Score",
//   }),
//   columnHelper.accessor("description", {
//     header: "Description",
//   }),
// ]);

export function getColumns(t: TFunction) {
  return columnHelper.columns([
    columnHelper.accessor("id", {
      header: t("id_column_label"),
    }),
    columnHelper.accessor("name", {
      header: t("name_column_label"),
    }),
    columnHelper.accessor("status", {
      header: t("status_column_label"),
    }),
    columnHelper.accessor("score", {
      header: t("score_column_label"),
    }),
    columnHelper.accessor("description", {
      header: t("description_column_label"),
    }),
  ]);
}
