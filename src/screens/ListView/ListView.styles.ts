import styled from "styled-components";
import { CheckboxProps } from "../../components/Checkbox/Checkbox.types";

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
  transition: transform 0.3s ease;
  :hover {
    transform: scale(1.2);
  }
`;

export const ToDoListContainerEmpty = styled.div`
  background-color: grey;
  width: 30rem;
  height: auto;
  display: flex;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-content: center;
  justify-content: center;
   svg {
    height: 3rem;
    width: 3rem;
    margin-top:2rem;
   }

   p{
    font-size:1rem;
   }
`


export const StyledToDoItem = styled.div<CheckboxProps>`
  background-color: grey;
  padding: 0.5rem 0rem;
  align-items: center;
  font-size: 1.2rem;
  color: black;
  display: flex;
  ${(props) => (props.checked ? "text-decoration:line-through" : "")};
  ${(props) => (props.checked ? "color:white" : "")};
`;

export const Input = styled.input`
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
  border:none;
  :focus{
    border :2px solid "red";
  }
`;

export const DeleteButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-left: 3rem;

  :hover {
    color:Red;
  }
  
`;
