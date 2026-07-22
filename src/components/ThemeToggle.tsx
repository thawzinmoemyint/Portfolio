"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

// The current theme lives on <html data-theme>, applied before paint by the
// inline script in the root layout. We treat that attribute as an external
// store so the toggle stays in sync (including across tabs) without a
// setState-in-effect round trip.
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

// Matches the <html data-theme="dark"> default rendered on the server.
function getServerSnapshot(): Theme {
  return "dark";
}

function setTheme(next: Theme) {
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // ignore storage errors (private mode, etc.)
  }
  listeners.forEach((l) => l());
}

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-flex items-center justify-center rounded-md p-2 text-muted transition-colors hover:text-foreground ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
