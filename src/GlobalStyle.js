import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-width: 300;
    font-size: 16px;
    color: #333;
    min-width: 280px;
    padding: 10px 30px 10px 10px;
  }

  @media screen and (min-width: 750px) {
    html {
      display: flex;
      justify-content: center;
    }
    body {
      padding: 36px;
    }
    div {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1400px) {
    html {
      display: block;
    }
  }

  @media print { 
    @page { margin: 0; } 
    body { margin: 1.6cm; } 
  }
`;

export const Colors = {
  white: 'white',
  black: 'black',
  green: 'forestgreen',
};
