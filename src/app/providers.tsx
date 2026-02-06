"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState, createContext, useContext } from "react";
import { FontSizeProvider } from "./fontSizeContext";
import { ThemeProvider } from "./themeContext";

type FontType = 'prompt' | 'sarabun';
interface FontContextProps {
  font: FontType;
  setFont: (font: FontType) => void;
}
const FontContext = createContext<FontContextProps | undefined>(undefined);
export function useFont() {
  const ctx = useContext(FontContext);
  if (!ctx) throw new Error('useFont must be used within FontProvider');
  return ctx;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [font, setFont] = useState<FontType>('prompt');
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <FontContext.Provider value={{ font, setFont }}>
          <FontSizeProvider>
            <div className={font === 'prompt' ? 'font-prompt' : 'font-sarabun'}>
              {children}
            </div>
          </FontSizeProvider>
        </FontContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}