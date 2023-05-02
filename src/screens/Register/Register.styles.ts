import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterContainer = styled.div`
  width: 50rem;
  height: 30rem;
  display: flex;
`;

export const Half1 = styled.div`
  width: 25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: #1c5d99;
  img {
    width: 10rem;
    height: 10rem;
  }
`;
export const Half2 = styled.div`
  width: 25rem;
  background: #fffdd0;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
`;

export const LabelRegister = styled.label`
  display: block;
  font-size: 16px;
  line-height: 28px;
  padding: 15px 0 5px 0px;
  color: #1c5d99;
`;

export const InputRegister = styled.input`
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 4px;
  padding-left: 15px;
  font-size: 16px;
  color: #484848;
`;

export const ButtonRegister = styled.button`
  border: 0;
  background: white;
  color: #1c5d99;
  font-weight: bold;
  height: 2rem;
  width: 8rem;
  border-radius: 20px;
  margin: auto;
  transition: all 0.5s;
  cursor: pointer;
  margin-top:90px;
  margin-left:120px;

  :hover {
    background: #222222;
  }
`;
