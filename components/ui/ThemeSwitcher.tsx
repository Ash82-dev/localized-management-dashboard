"use client";

import { Moon as MoonIcon, Sun as SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  function handleToggleTheme() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  return (
    <button onClick={handleToggleTheme} className="cursor-pointer">
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ThemeSwitcher;
