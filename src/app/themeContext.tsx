"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const themePresets = [
  { name: "Indigo", primary: "#6366f1", text: "#22223b" },
  { name: "Blue", primary: "#2563eb", text: "#1e293b" },
  { name: "Emerald", primary: "#10b981", text: "#064e3b" },
  { name: "Rose", primary: "#f43f5e", text: "#831843" },
  { name: "Amber", primary: "#f59e42", text: "#78350f" },
  { name: "Slate", primary: "#64748b", text: "#0f172a" },
];

const ThemeContext = createContext({
  theme: themePresets[0],
  setTheme: (t: typeof themePresets[0]) => {},
  themePresets,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState(themePresets[0]);
  // Forcing rerender on theme change
  const [, forceUpdate] = useState(0);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("admin_theme");
      if (stored) {
        const found = themePresets.find(t => t.name === stored);
        if (found) setThemeState(found);
      }
    }
  }, []);

  // Save to localStorage and update CSS vars on change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("admin_theme", theme.name);
      document.documentElement.style.setProperty('--primary', theme.primary);
      document.documentElement.style.setProperty('--text', theme.text);
    }
  }, [theme]);

  // Custom setTheme to force rerender
  const setTheme = (t: typeof themePresets[0]) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem("admin_theme", t.name);
    }
    setThemeState(t);
    forceUpdate(n => n + 1);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themePresets }}>
      {children}
    </ThemeContext.Provider>
  );
}
