/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { ToggleTheme } from '../src/theme/GlobalStyle';
import theme from '../src/theme';
import { ThemeGlobalApp } from '../src/components/wrappers/context';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portifólio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;1,400;1,700&family=Inconsolata&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <ThemeGlobalApp>
          <ToggleTheme />
          <Component {...pageProps} />
        </ThemeGlobalApp>
      </ThemeProvider>
    </>
  );
}
