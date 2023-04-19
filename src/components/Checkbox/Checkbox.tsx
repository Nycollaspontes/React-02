import { Container, HiddenCheckbox, StyledCheckbox } from "./Checkbox.styles"
import { ComponentCheckboxProps } from "./Checkbox.types"
import { useState } from "react"

export const Checkbox = ({ checked, ...props }: ComponentCheckboxProps) => {
   

  return (
    <Container>
      <HiddenCheckbox {...props} type="checkbox" />
      <StyledCheckbox checked={checked} />
    </Container>
  )
}

export default Checkbox;