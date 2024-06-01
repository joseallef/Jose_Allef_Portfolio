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
  const initialTheme = cookies.theme || 'dark';
  const [themeApp, setThemeApp] = useState<string>(initialTheme);

  const toggleTheme = useCallback(() => {
    const newTheme = themeApp === 'dark' ? 'light' : 'dark';
    setThemeApp(newTheme);
    setCookie(null, 'theme', newTheme, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  }, [themeApp]);

  const providers = useMemo(() => ({
    themeApp,
    toggleTheme,
  }), [themeApp, toggleTheme]);

  useEffect(() => {
    if (!cookies.theme) {
      const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setThemeApp(preferredTheme);
      setCookie(null, 'theme', preferredTheme, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    } else {
      console.log("Theme", cookies.theme)
      setThemeApp(cookies.theme);
    }
  }, []);

  return (
    <ThemeApp.Provider value={providers}>
      {children}
    </ThemeApp.Provider>
  );
}
