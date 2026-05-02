"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-300 bg-white/70 text-lg transition hover:border-zinc-500 dark:border-zinc-700 dark:bg-white/5 dark:hover:border-teal-300"
      onClick={toggleTheme}
      type="button"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span aria-hidden="true">{isDark ? "☾" : "☼"}</span>
    </button>
  );
}
