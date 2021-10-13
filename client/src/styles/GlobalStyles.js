import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    box-shadow: none;
    background-color: inherit;
    color: inherit;
    font-family: inherit;
    box-sizing: border-box;
  }

  html {
    scroll-behaviour: smooth;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Montserrat, sans-serif;
    font-weight: 500;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyles
