import './ListView.styles'
import { Container, Input, ToDoListContainer } from './ListView.styles';
import Spacer from '../Spacer';
import { Itask } from './ListView.types';
import { useState } from 'react';



const ListView = () => {
  const [Tasks, SetTasks] = useState<Itask[]>([])
  const [newTaskLabel , setNewTaskLabel] = useState("")


  return (
    <Container>
      <Spacer height={1} />
      <Input />
      <Spacer height={2}/>
      <ToDoListContainer>
      oi  
      </ToDoListContainer>
    </Container>
  )
}

export default ListView;