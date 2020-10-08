import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    background: #EDF5FC;
    margin-top: 8vh;
  }
`;
