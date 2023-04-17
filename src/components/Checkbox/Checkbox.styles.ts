import styled from "styled-components";
import { CheckboxProps } from "./Checkbox.types";
import { colors } from "../../styles";

export const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input`
  border: none;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
display : inline-block;
width: 1.5rem;
height: 1.5rem;
background: ${(props) => (props.checked ? colors.primary : "none")};
border: 3px solid ${"green"};
border-radius: 1.5rem;
transition: all 0.2;
`;
