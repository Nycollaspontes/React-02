import './ListView.styles'
import { Container, Input, ToDoListContainer } from './ListView.styles';
import Spacer from '../Spacer';
import { Itask } from './ListView.types';
import { useState } from 'react';
import { nanoid } from 'nanoid';



const ListView = () => {
  const [Tasks, SetTasks] = useState<Itask[]>([])
  const [newTaskLabel , setNewTaskLabel] = useState("")


  return (
    <Container>
      <h2>To Do Ada</h2>
      <Spacer height={1} />
      <Input placeholder='Adicione uma tarefa'
      value={newTaskLabel}
       />
      <Spacer height={2}/>
      <ToDoListContainer>
      oi  
      </ToDoListContainer>
    </Container>
  )
}

export default ListView;