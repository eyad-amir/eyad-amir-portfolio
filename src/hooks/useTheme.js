import { useState } from "react";
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("eyad-theme", next);
    } catch {
      /* Theme still works when storage is blocked. */
    }
  }
  return { theme, toggle };
}
