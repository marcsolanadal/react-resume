import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './GlobalStyle';
import LayoutSelector from './components/LayoutSelector';
import data from './resumeData';

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
