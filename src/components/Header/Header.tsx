import { Container } from "./Header.style"
import logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt="" />
    </Container>
  )
}

export default Header;