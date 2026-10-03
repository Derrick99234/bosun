"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type ThemeMode = "light" | "dark";

const storageKey = "theme";

function getSystemTheme(): ThemeMode {
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
    ? "dark"
    : "light";
}

function getInitialTheme(): ThemeMode {
  const stored = window.localStorage.getItem(storageKey);
  if (stored === "light" || stored === "dark") return stored;
  return getSystemTheme();
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  window.localStorage.setItem(storageKey, theme);
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const initial = getInitialTheme();
    applyTheme(initial);
    setTheme(initial);
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-slate-900 shadow-sm transition dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
      >
        <span className="h-5 w-5" />
      </button>
    );
  }

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => {
        applyTheme(nextTheme);
        setTheme(nextTheme);
      }}
      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? (
        <FiSun className="h-5 w-5" />
      ) : (
        <FiMoon className="h-5 w-5" />
      )}
    </button>
  );
}

