import { format as formatGregorian } from "date-fns";
import { format as formatJalali } from "date-fns-jalali";

export function parseIsoDate(value?: string): Date | undefined {
  if (!value) return undefined;

  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? undefined : date;
}

export function formatUtcTime(value?: string): string {
  const date = parseIsoDate(value);

  if (!date) return "";

  return [
    String(date.getUTCHours()).padStart(2, "0"),
    String(date.getUTCMinutes()).padStart(2, "0"),
    String(date.getUTCSeconds()).padStart(2, "0"),
  ].join(":");
}

export function updateUtcDate(
  currentValue: string | undefined,
  selectedDate: Date,
): string {
  const current = parseIsoDate(currentValue) ?? new Date();

  current.setUTCFullYear(
    selectedDate.getUTCFullYear(),
    selectedDate.getUTCMonth(),
    selectedDate.getUTCDate(),
  );

  return current.toISOString();
}

export function updateUtcTime(
  currentValue: string | undefined,
  time: string,
): string {
  const current = parseIsoDate(currentValue) ?? new Date();

  const [hours, minutes, seconds = 0] = time.split(":").map(Number);

  current.setUTCHours(hours, minutes, seconds, current.getUTCMilliseconds());

  return current.toISOString();
}

export function formatLocalizedDate(
  value: string | undefined,
  locale: string,
): string {
  if (!value) return "";

  const date = new Date(value);

  if (locale === "fa") {
    return formatJalali(date, "yyyy/MM/dd");
  }

  return formatGregorian(date, "yyyy/MM/dd");
}
