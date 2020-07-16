import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  border: 0;
  outline: 0;
  background: transparent;
}

body {
  padding: 10px;
  background: #f5f5f5;
  min-width: 320px;
}
`;
export default GlobalStyle;
