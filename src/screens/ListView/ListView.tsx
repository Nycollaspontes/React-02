import './ListView.styles'
import { Container, Input, ToDoListContainer, ToDoListContainerEmpty } from './ListView.styles';
import { ITask } from './ListView.types';
import { ChangeEvent, useState, KeyboardEvent } from 'react';
import { ToDoItem, DeleteButton } from './ListView.styles';

import Trash from '../../assets/lixeira.png'
import { useTask } from '../../context/task.context';
import Checkbox from '../../components/Checkbox/Checkbox';
import Spacer from '../../components/Spacer';
import SearchTerm from '../../components/SearchTerm/SearchTerm';



const ListView = () => {

  const { tasks, tasksFilter, addTask, handleDeleteTask, updateTaskCompletion,Status } = useTask();
  const [newTaskLabel, setNewTaskLabel] = useState("")

  const handleNewTaskLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(event.target.value)
  }


  const handleTaskCompleteChange = (task: ITask) => (event: ChangeEvent<HTMLInputElement>) => {
    updateTaskCompletion(task.id, event.target.checked);
  };

  const handleNewTaskKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {

    if (event.key === "Enter" && newTaskLabel !== "") {
      addTask(newTaskLabel);
      setNewTaskLabel("");
    }
  };



  return (
    <Container>
      <Spacer height={4} />
      <SearchTerm />
     {Status}
      <Spacer height={4} />
      <Input
        placeholder="Adicione sua tarefa"
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
      />
      <Spacer height={4} />
      {tasks.length > 0 ? (
        <ToDoListContainer >
          {tasksFilter
            .map((task) => (
              <ToDoItem key={task.id} checked={task.isComplete}>
                <Checkbox
                  key={task.id}
                  checked={task.isComplete}
                  onClick={handleTaskCompleteChange(task)}
                />
                <Spacer width={2} />
                {task.label}
                <Spacer flex={1} />
                <DeleteButton onClick={() => handleDeleteTask(task.id)}>
                  <img src={Trash} />
                </DeleteButton>
              </ToDoItem>
            ))}
        </ToDoListContainer>
      ) : (
        <ToDoListContainerEmpty>
          <h2>A lista de tarefas esta vazia.</h2>
          <img src={Trash} alt="" />
        </ToDoListContainerEmpty>
      )}


    </Container>
  );
};

export default ListView;