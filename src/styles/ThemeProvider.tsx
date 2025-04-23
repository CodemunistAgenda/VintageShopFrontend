// src/styles/ThemeProvider.tsx

import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './globalStyles';

interface ThemeContextType {
  isDark: boolean;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggle: () => {}
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: light)').matches;
    setIsDark(prefersDark);
  }, []);

  const toggle = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      <StyledThemeProvider theme={isDark ? theme.dark : theme.light}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;