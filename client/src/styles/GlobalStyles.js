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
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    line-height: 1.6;
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.text2};
    font-weight: 600;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  img {
    display: inline-block;
    object-fit: contain;
    border-radius: 1em;
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.primary};
    padding: 0 0 0.2em 0;
    position: relative;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }

    &:active {
      color: ${({ theme }) => theme.primary2};
    }

    &::before {
      background-color: ${({ theme }) => theme.primary};
      bottom: 0;
      content: '';
      display: inline;
      height: 0.13em;
      position: absolute;
      transition: width 0.2s cubic-bezier(0.45,-0.07, 0.82, 0.37);
      width: 0%;
    }

    &:hover::before, &:focus::before {
      width: 100%;
    }
  }
`

export default GlobalStyles
