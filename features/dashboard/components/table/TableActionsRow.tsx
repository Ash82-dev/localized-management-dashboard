"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

import { useUpdateUrl } from "../../hooks/use-update-url";
import { Status } from "../../types";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import RecordFormDialog from "../RecordDialogForm";

function TableActionsRow() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const { updateParams } = useUpdateUrl();
  const searchParams = useSearchParams();
  const status = searchParams.get("status") ?? "all";

  const statusFilterOptions = [
    { label: t("status_all_label"), value: "all" },
    { label: t("status_active_label"), value: "active" },
    { label: t("status_inactive_label"), value: "inactive" },
  ];

  return (
    <div className="flex items-center justify-between">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const search = String(formData.get("search") ?? "");
          updateParams({ search }, true);
        }}
      >
        <Field orientation="horizontal">
          <Input
            name="search"
            type="search"
            className="rounded-sm"
            placeholder={t("search_by_name")}
          />
          <Button className="cursor-pointer rounded-sm" type="submit">
            {t("common:search_label")}
          </Button>
        </Field>
      </form>

      <div className="flex items-center gap-2">
        <Button
          className="cursor-pointer rounded-sm"
          onClick={() => setOpen(true)}
        >
          {t("create_row_label")}
        </Button>
        <RecordFormDialog isOpen={isOpen} setOpen={setOpen} />

        <Select
          items={statusFilterOptions}
          defaultValue={status}
          onValueChange={(value) => {
            if (value === null) return;
            updateParams({ status: value as Status }, true);
          }}
        >
          <SelectTrigger className="w-30 rounded-sm">
            <SelectValue placeholder={t("filter_placeholder")} />
          </SelectTrigger>
          <SelectContent className="rounded-sm" alignItemWithTrigger={false}>
            <SelectGroup>
              {statusFilterOptions.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default TableActionsRow;
