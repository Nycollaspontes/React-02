import styled from "styled-components";
import { CheckboxProps } from "./Checkbox.types";
import { colors } from "../../styles";

export const Container = styled.div<CheckboxProps>`
  display: inline-block;
  vertical-align: middle;

  
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;

export const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
})<CheckboxProps>`
  opacity:0;
  border: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  background-color: ${(props) => (props.checked ? colors.primary :"transparent")};
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${(props) => (props.checked ? colors.primary : "none")};
  border: 3px solid ${colors.primary};
  border-radius: 25px;
  transition: all 0.1s;
  z-index: 2;
`;
