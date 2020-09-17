import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: #3A3A3A;
    background: #f5f5f5;
  }

  body, input, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 10px 20px;
  }

  button {
    cursor: pointer;
  }

`