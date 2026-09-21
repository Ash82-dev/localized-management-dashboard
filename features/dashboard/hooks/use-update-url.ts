"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useUpdateUrl() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateParams(
    updates: Record<string, string | null>,
    resetPage: boolean = false,
  ) {
    const params = new URLSearchParams(searchParams.toString());

    for (const [key, value] of Object.entries(updates)) {
      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    }

    if (resetPage) {
      params.set("page", "1");
    }

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return { updateParams };
}
