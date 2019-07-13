// @flow

// #region imports
import { createGlobalStyle } from 'styled-components'
// #endregion

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
