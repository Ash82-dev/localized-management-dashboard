import { Status } from "@/features/dashboard/types";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
const ALLOWED_LIMITS = [10, 20, 50];
const ALLOWED_STATUSES = ["active", "inactive"];

export interface RecordsParams {
  page: number;
  limit: number | "all";
  search?: string;
  status?: Status;
}

export function parseRecordsParams(
  searchParams: URLSearchParams,
): RecordsParams {
  const pageValue = Number(searchParams.get("page"));
  const limitValue = searchParams.get("limit");
  const searchValue = searchParams.get("search");
  const statusValue = searchParams.get("status");

  const page =
    Number.isInteger(pageValue) && pageValue > 0 ? pageValue : DEFAULT_PAGE;

  let limit: number | "all" = DEFAULT_LIMIT;

  if (limitValue === "all") {
    limit = "all";
  } else {
    const numericLimit = Number(limitValue);

    if (
      Number.isInteger(numericLimit) &&
      ALLOWED_LIMITS.includes(numericLimit)
    ) {
      limit = numericLimit;
    }
  }

  const params: RecordsParams = {
    page,
    limit,
  };

  if (searchValue) {
    params.search = searchValue;
  }

  if (statusValue && ALLOWED_STATUSES.includes(statusValue as Status)) {
    params.status = statusValue as Status;
  }

  return params;
}
