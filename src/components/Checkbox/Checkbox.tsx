import { Container, HiddenCheckbox, StyledCheckbox } from "./Checkbox.styles"
import { ComponentCheckboxProps } from "./Checkbox.types"

export const Checkbox = ({ checked, ...props }: ComponentCheckboxProps) => {
  return (
    <Container checked={checked} >
      <HiddenCheckbox {...props} type="checkbox"  />
      <StyledCheckbox checked={checked}  />
    </Container>
  )
}

export default Checkbox;