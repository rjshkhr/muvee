import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    background-color: inherit;
    border: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
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
