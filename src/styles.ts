import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
 box-sizing: border-box;
}
body {
  background:#222;
  color: #fff;
}
body , input {
  font-family: "Inter", sans-serif;   
}

`;
export const AppLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3 rem;
  min-height: 100vh;
`;

export const colors = {
  primary: "#1C5D99",
};
