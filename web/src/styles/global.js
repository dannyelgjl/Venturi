import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #191920 url(${background}) no-repeat center top;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
    color: #333;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
