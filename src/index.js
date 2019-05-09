import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './GlobalStyle';
import data from './resumeData';

import { ResumePage } from './components/pages/ResumePage';

const Portfolio = () => {
  return (
    <>
      <GlobalStyle />
      <ResumePage {...data} />
    </>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Portfolio />, rootElement);
