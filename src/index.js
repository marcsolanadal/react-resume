import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import LayoutSelector from './components/LayoutSelector';

import data from './resumeData';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-width: 300;
    font-size: 16px;
    color: #333;
    min-width: 280px;
    padding: 10px 15px 10px 10px;
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
`;


const Portfolio = () => {
  return (
    <>
      <GlobalStyle />
      <LayoutSelector data={data} />
    </>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Portfolio />, rootElement);
