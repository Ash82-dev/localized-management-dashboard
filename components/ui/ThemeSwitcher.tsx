"use client";

import { Moon as MoonIcon, Sun as SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button onClick={handleToggleTheme} className="cursor-pointer">
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="block dark:hidden" />
    </button>
  );
}

export default ThemeSwitcher;
