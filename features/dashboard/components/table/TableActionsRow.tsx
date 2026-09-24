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
    { label: t("lbl_status_all"), value: "all" },
    { label: t("lbl_status_active"), value: "active" },
    { label: t("lbl_status_inactive"), value: "inactive" },
  ];

  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
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
            placeholder={t("lbl_search_name")}
          />
          <Button className="cursor-pointer rounded-sm" type="submit">
            {t("common:lbl_search")}
          </Button>
        </Field>
      </form>

      <div className="flex items-center gap-2">
        <Button
          className="cursor-pointer rounded-sm"
          onClick={() => setOpen(true)}
        >
          {t("lbl_create_row")}
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
          <SelectTrigger className="w-full rounded-sm md:w-30">
            <SelectValue placeholder={t("lbl_filter_status")} />
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
