const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
const ALLOWED_LIMITS = [10, 20, 50];

export interface RecordsParams {
  page: number;
  limit: number | "all";
}

export function parseRecordsParams(
  searchParams: URLSearchParams,
): RecordsParams {
  const pageValue = Number(searchParams.get("page"));
  const limitValue = searchParams.get("limit");

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

  return {
    page,
    limit,
  };
}
