import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import get from 'lodash/get';
import { ThemeApp } from '../components/wrappers/context';

export const GlobalStyle = createGlobalStyle`
 * { 
    box-sizing: border-box;
    ${({ currentTheme }) => (currentTheme === 'light' ? 'color: black!important;' : '')}
  }
  html,
  body {
    margin: 0;
    padding: 0;
    transition: .5s;
    background: ${({ theme, currentTheme }) => get(theme, `colors.modes.${currentTheme}.background`)};
  }
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    z-index: 2;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

// #242540 blue
// #292c35 dark-light
// #f2f2f2

export function ToggleTheme() {
  const { themeApp } = useContext(ThemeApp);
  return (
    <GlobalStyle
      currentTheme={themeApp}
    />
  );
}
