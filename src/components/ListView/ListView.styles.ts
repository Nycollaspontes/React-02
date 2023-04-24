import styled from "styled-components";
import { CheckboxProps } from "../Checkbox/Checkbox.types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
`;

export const ToDoListContainer = styled.div`
  background: grey;
  border-radius: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  flex-direction: column;
`;

export const ToDoListContainerEmpty = styled.div`
  background-color: grey;
  width: 20rem;
  height: auto;
  display: flex;
  img {
    width: 10rem;
    height: 10rem;
  }
`;

export const ToDoItem = styled.div<CheckboxProps>`
  background-color: grey;
  padding: 0.5rem 0rem;
  align-items: center;
  font-size: 1.2rem;
  color: black;
  display: flex;
  ${(props) => (props.checked ? "text-decoration:line-through" : "")};
  ${(props ) => (props.checked ? "color: red"  :"")};
`;

export const Input = styled.input`
  background: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
`;


export const  DeleteButton = styled.button`
width: 1rem;
height: 1rem;
background: grey;
display: flex;
align-items: center;
justify-content: center;
border: none;
margin-left:3rem;

img{
  width: 2rem;
  height: 2rem;
}
`