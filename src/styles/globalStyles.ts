// src/styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, p, figure, blockquote, dl, dd {
    margin: 0;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.text};
  }

  img {
    max-width: 100%;
    display: block;
  }

  input, button, textarea, select {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.space[4]};
  }

  .section {
    padding: ${({ theme }) => theme.space[12]} 0;
  }
`;

export default GlobalStyle;