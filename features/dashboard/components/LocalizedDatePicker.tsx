"use client";

import { useTranslation } from "react-i18next";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  formatLocalizedDate,
  formatUtcTime,
  parseIsoDate,
  updateUtcDate,
  updateUtcTime,
} from "@/lib/date-time";
import { PersianCalendar } from "../../../components/ui/PersianCalendar";

type LocalizedDateTimePickerProps = {
  value?: string;
  onChange: (value: string) => void;
};

export function LocalizedDateTimePicker({
  value,
  onChange,
}: LocalizedDateTimePickerProps) {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const date = parseIsoDate(value);
  const time = formatUtcTime(value);

  return (
    <div className="flex w-full min-w-0 gap-2">
      <Popover>
        <PopoverTrigger
          className="min-w-0 flex-1"
          render={
            <Button
              type="button"
              variant="outline"
              className="w-full justify-start"
            >
              {date
                ? formatLocalizedDate(value, language)
                : t("lbl_select_date")}
              <CalendarIcon className="ms-auto" />
            </Button>
          }
        />

        <PopoverContent side="top" className="w-auto p-0">
          {language === "en" ? (
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                if (!selectedDate) return;
                onChange(updateUtcDate(value, selectedDate));
              }}
              timeZone="UTC"
            />
          ) : (
            <PersianCalendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                if (!selectedDate) return;
                onChange(updateUtcDate(value, selectedDate));
              }}
              timeZone="UTC"
            />
          )}
        </PopoverContent>
      </Popover>

      <Input
        type="time"
        step="1"
        value={time}
        className="w-fit shrink-0 appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        onChange={(event) => {
          onChange(updateUtcTime(value, event.target.value));
        }}
      />
    </div>
  );
}
