"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

interface ErrorFallbackComponentProps {
  onRetry: () => void;
}

function ErrorFallbackComponent({ onRetry }: ErrorFallbackComponentProps) {
  const { t } = useTranslation();

  return (
    <div className="flex w-full items-center justify-between rounded-sm border border-error bg-error/10 px-4 py-3">
      <div>
        <p className="font-medium text-on-surface">
          {t("common:msg_general_error")}
        </p>
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={onRetry}
        className="text-error"
      >
        {t("common:lbl_retry")}
      </Button>
    </div>
  );
}

export default ErrorFallbackComponent;
