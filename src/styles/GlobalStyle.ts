import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
    }
    
  body {
      font-family: Helvetica, system-ui, sans-serif;      
      margin: 0;
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
