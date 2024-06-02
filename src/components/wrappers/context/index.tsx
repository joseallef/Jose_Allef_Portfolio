'use client';

import { parseCookies, setCookie } from 'nookies';
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

type IContextType = {
  themeApp: string;
  toggleTheme: () => void;
};

export const ThemeApp = createContext<IContextType>({
  themeApp: 'dark',
  toggleTheme: () => { },
});

export function ThemeGlobalApp({ children }: { children: React.ReactNode }) {
  const cookies = parseCookies();
  const [themeApp, setThemeApp] = useState<string>('dark');

  const getThemeDevice = useCallback(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeApp(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      setCookie(null, 'theme', newTheme, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      return newTheme;
    });
  }, []);

  const providers = useMemo(() => ({
    themeApp,
    toggleTheme,
  }), [themeApp, toggleTheme]);

  useEffect(() => {
    const theme = cookies.theme || getThemeDevice();
    setThemeApp(theme);
  }, [cookies.theme, getThemeDevice]);

  return (
    <ThemeApp.Provider value={providers}>
      {children}
    </ThemeApp.Provider>
  );
}
