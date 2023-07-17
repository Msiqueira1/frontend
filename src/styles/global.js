/* import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  font-family: 'poppins', sans-serif;
}

body {
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  backgound-color: #f2f2f2;
}

/* head {
  width: 150%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  broder-radius: 5px;
  max-width: 2000px;
  margin: 20px auto;
  word-break: break-all;
}
`;

export default Global */

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  font-family: Arial, Helvetica, Sans-serif
}
`;

export default GlobalStyle;