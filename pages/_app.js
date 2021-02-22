import { ThemeProvider } from 'styled-components';
import {GlobalStyle} from '../src/theme/GlobalStyle';
import theme from './../src/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
