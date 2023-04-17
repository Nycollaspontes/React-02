import { ComponentProps } from "react";
import { StyledComponent } from "styled-components";

export type CheckboxProps = {
  checked: boolean;
};

export type ComponentCheckboxProps = ComponentProps<StyledComponent<"input", {}>>
