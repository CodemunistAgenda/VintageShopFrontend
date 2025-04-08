"use client";

import React, { useEffect, useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/styles/theme";


export interface ThemeContextProps {
  toggle: () => void;
  isDark: boolean;
}


export const ThemeContext = createContext<ThemeContextProps>({
  toggle: () => {},
  isDark: false,
});

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggle = () => setIsDark((prev) => !prev);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    setMounted(true);
  }, []);


  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ toggle, isDark }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
