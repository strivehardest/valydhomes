"use client";

import * as React from "react";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState(
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  React.useEffect(() => {
    if (!theme) return;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="ml-4 px-3 py-2 rounded-md border border-gray-700 bg-gray-900 text-gray-100 hover:bg-gray-800 transition-colors dark:bg-gray-100 dark:text-gray-900 dark:border-gray-300 dark:hover:bg-gray-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
