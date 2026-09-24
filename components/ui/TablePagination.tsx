"use client";

import { useTranslation } from "react-i18next";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateUrl } from "@/features/dashboard/hooks/use-update-url";

interface RecordsPaginationProps {
  page: number;
  pageCount: number;
  pageSize: number;
  pageSizeOptions?: number[];
}

function TablePagination({
  page,
  pageCount,
  pageSize,
  pageSizeOptions = [10, 20, 50],
}: RecordsPaginationProps) {
  const { t } = useTranslation();
  const { updateParams } = useUpdateUrl();

  function handlePageChange(page: number) {
    updateParams({
      page: page > pageCount ? String(pageCount) : String(page),
    });
  }

  function handlePageSizeChange(limit: number) {
    updateParams(
      {
        limit: String(limit),
      },
      true,
    );
  }

  const renderPage = (pageNumber: number) => (
    <PaginationItem key={pageNumber}>
      <PaginationLink
        href="#"
        isActive={pageNumber === page}
        onClick={(event) => {
          event.preventDefault();
          handlePageChange(pageNumber);
        }}
      >
        {pageNumber}
      </PaginationLink>
    </PaginationItem>
  );

  return (
    <div className="flex flex-col-reverse items-center gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
      <div className="flex items-center gap-2">
        <span className="text-sm whitespace-nowrap text-on-surface">
          {t("lbl_rows_per_page")}
        </span>

        <Select
          value={String(pageSize)}
          onValueChange={(value) => {
            handlePageSizeChange(Number(value));
          }}
        >
          <SelectTrigger className="w-20">
            <SelectValue />
          </SelectTrigger>

          <SelectContent alignItemWithTrigger={false}>
            {pageSizeOptions.map((size) => (
              <SelectItem key={size} value={String(size)}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text={t("common:lbl_previous")}
              onClick={(event) => {
                event.preventDefault();

                if (page > 1) {
                  handlePageChange(page - 1);
                }
              }}
            />
          </PaginationItem>

          {pageCount <= 7 ? (
            Array.from({ length: pageCount }, (_, index) =>
              renderPage(index + 1),
            )
          ) : (
            <>
              {renderPage(1)}

              {page > 4 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {Array.from({ length: 3 }, (_, index) => page - 1 + index).map(
                (pageNumber) => {
                  if (pageNumber <= 1 || pageNumber >= pageCount) {
                    return null;
                  }

                  return renderPage(pageNumber);
                },
              )}

              {page < pageCount - 3 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {renderPage(pageCount)}
            </>
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              text={t("common:lbl_next")}
              onClick={(event) => {
                event.preventDefault();
                handlePageChange(page + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default TablePagination;
