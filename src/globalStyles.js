import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }
`;
