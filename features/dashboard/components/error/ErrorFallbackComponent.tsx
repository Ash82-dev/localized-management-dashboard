"use client";

import { Button } from "@/components/ui/button";
import { useErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";

function ErrorFallbackComponent() {
  const { t } = useTranslation();
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className="flex w-full items-center justify-between rounded-sm border border-error bg-error/10 px-4 py-3">
      <div>
        <p className="font-medium text-on-surface">
          {t("common:msg_general_error")}
        </p>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={resetBoundary}
        className="text-error"
      >
        {t("common:lbl_retry")}
      </Button>
    </div>
  );
}

export default ErrorFallbackComponent;
