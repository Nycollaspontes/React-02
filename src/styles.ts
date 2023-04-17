import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin:0 auto;
  color:#F0f0f0;
  max-width: 1280px;
}
body {
  background : #222;
}`;
