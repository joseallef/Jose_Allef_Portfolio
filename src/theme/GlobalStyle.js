import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * { 
    box-sizing: border-box;
  }
    
  html,
  body {
    margin: 0;
    padding: 0;
  }
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
