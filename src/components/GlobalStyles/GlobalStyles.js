'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* Local globals */

  html {
    --color-primary-5: hsl(190deg, 95%, 5%);
    --color-primary-64: hsl(190deg, 86%, 14%);
    --color-primary-87: hsl(190deg, 11%, 87%);

    --color-accent-one-28: hsl(29deg, 76%, 28%);

    --color-white: hsl(0deg, 0%, 100%);
  }

  body {
    line-height: 1.5;
  }
`;

export default GlobalStyles;
