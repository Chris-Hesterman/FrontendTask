import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    align-items: center;
    background-color: #efefef;
    display: flex;
    font-family: Raleway, sans-serif;
    height: 100vh;
    justify-content: center;
    margin: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
