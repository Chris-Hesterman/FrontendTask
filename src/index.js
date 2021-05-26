import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    font-family: Raleway, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
