import { Container } from "./Header.style"
import logo from '../../assets/logo.svg'
import Spacer from "../Spacer";

export const Header = () => {
  return (
    <>
    <Spacer height={2}/>
    <Container>
      <img src={logo} alt="" />
    </Container>
    </>
  )
}

export default Header;