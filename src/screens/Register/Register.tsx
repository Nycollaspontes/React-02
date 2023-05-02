import { useState } from "react";
import { ButtonRegister, Container, Half1, Half2, InputRegister, LabelRegister, RegisterContainer } from "./Register.styles";
import { IRegisterData, IRegisterProps } from "./Register.types";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import logo from '../../assets/logo.svg'

const Register: React.FC<IRegisterProps> = ({ onSubmit }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState<IRegisterData>({
    name: "",
    email: "",
    age: "",
  })
  const validateName = (name: string): string | undefined => {
    if (name.trim().length < 3) {
      return 'O campo deve ter no mínimo 03 caracteres';
    }
  };

  const validateEmail = (email: string): string | undefined => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return 'O e-mail precisa ser válido';
    }
  };

  const validateAge = (age: string): number | string | undefined => {
    const ageNumber = Number(age);
    if (isNaN(ageNumber) || ageNumber < 18) {
      return 'Você precisa ter mais de 18 anos para entrar';
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("entrou")
    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const ageError = validateAge(formData.age)

    const toastPosition = toast.POSITION.TOP_RIGHT

    if (nameError) {
      toast.error(nameError, { position: toastPosition });
      return
    }

    if (emailError) {
      toast.error(emailError, { position: toastPosition });
      return
    }

    if (ageError) {
      toast.error(ageError, { position: toastPosition });
      return
    }
    console.log(formData)
    navigate("/listview")

  }



  return (
    <Container>
      <RegisterContainer>
        <Half1 >
          <img src={logo} alt="" />
        </Half1>
        <Half2>
          <form onSubmit={handleSubmit}>
            <LabelRegister >Nome:</LabelRegister>
            <InputRegister type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Informe seu nome" />
            <LabelRegister  >Email:</LabelRegister>
            <InputRegister type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Informe seu email" />
            <LabelRegister >Idade:</LabelRegister>
            <InputRegister type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Informe sua idade permitido a partir dos 18" />
            <ButtonRegister type='submit'>Registrar-se</ButtonRegister>
          </form>
        </Half2>
      </RegisterContainer>
      <ToastContainer />
    </Container>
  )
}

export default Register;



