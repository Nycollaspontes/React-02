import styled from "styled-components";

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

export const ToDoItem = styled.div`
  background-color: white;
  padding: 0.5rem 0rem;
  align-items: center;
  font-size: 1.2rem;
`;

export const Input = styled.input`
  background: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
`;
