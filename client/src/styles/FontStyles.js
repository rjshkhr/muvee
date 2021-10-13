import { createGlobalStyle } from 'styled-components'

import MontserratMedium from '../assets/fonts/montserrat/Montserrat-Medium.woff2'
import MontserratMediumItalic from '../assets/fonts/montserrat/Montserrat-MediumItalic.woff2'
import MontserratSemiBold from '../assets/fonts/montserrat/Montserrat-SemiBold.woff2'
import MontserratSemiBoldItalic from '../assets/fonts/montserrat/Montserrat-SemiBoldItalic.woff2'

const FontStyles = createGlobalStyle`
  @font-face {
      font-family: "Montserrat";
      font-weight: 500;
      font-style: normal;
      src: url(${MontserratMedium}) format("woff2");
  }

  @font-face {
      font-family: "Montserrat";
      font-weight: 500;
      font-style: italic;
      src: url(${MontserratMediumItalic}) format("woff2");
  }

  @font-face {
      font-family: "Montserrat";
      font-weight: 600;
      font-style: normal;
      src: url(${MontserratSemiBold}) format("woff2");
  }

  @font-face {
      font-family: "Montserrat";
      font-weight: 600;
      font-style: italic;
      src: url(${MontserratSemiBoldItalic}) format("woff2");
  }
`

export default FontStyles
