export interface IRegisterData {
  name: string;
  email: string;
  age: string;
}

export interface IRegisterProps {
  onSubmit: (data: IRegisterData) => void;
}
