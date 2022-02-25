import React, { useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import PropTypes from 'prop-types';

export const StateModal = React.createContext({
  toggleModal: () => {},
});

export const ThemeApp = React.createContext();

// eslint-disable-next-line react/prop-types
export function ThemeGlobalApp({ children }) {
  const cookies = parseCookies();
  const [themeApp, setThemeApp] = useState('dark');

  const [currentTheme, setCurrentTheme] = useState(() => {
    if (cookies.theme) {
      return cookies.theme;
    }
    return themeApp;
  });

  function toggleTheme() {
    if (cookies.theme) {
      setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
      setThemeApp(currentTheme);
    }
    setCookie(null, 'theme', currentTheme, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    return (
      currentTheme
    );
  }

  React.useEffect(() => {
    toggleTheme();
  }, []);

  return (
    <ThemeApp.Provider
      value={{
        themeApp, setThemeApp, toggleTheme, currentTheme, setCurrentTheme,
      }}
    >
      {children}
    </ThemeApp.Provider>
  );
}

ThemeGlobalApp.defaultProps = {
  children: PropTypes.node,
};

ThemeGlobalApp.prototype = {
  children: PropTypes.node,
};
