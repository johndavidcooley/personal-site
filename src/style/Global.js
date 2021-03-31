// Node Modules
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  }

  body {
    margin: 0;
  }

  body.prevent-scroll {
    height: 100vh;
    overflow: hidden;
  }

  #gatsby-focus-wrapper {
    min-height: 100vh;
    position: relative;
    padding-bottom: 5rem;
  }

`;

export default GlobalStyle;