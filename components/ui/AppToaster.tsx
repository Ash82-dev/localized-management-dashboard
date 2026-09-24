"use client";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

function AppToaster() {
  const { theme } = useTheme();

  const toasterTheme =
    theme === "light" || theme === "dark" || theme === "system"
      ? theme
      : "system";

  return <Toaster theme={toasterTheme} richColors />;
}

export default AppToaster;
