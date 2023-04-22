import './ListView.styles'
import { Container, Input, ToDoListContainer, ToDoListContainerEmpty } from './ListView.styles';
import Spacer from '../Spacer';
import { Itask } from './ListView.types';
import { ChangeEvent, useState, KeyboardEvent } from 'react';
import { nanoid } from 'nanoid';
import { ToDoItem } from './ListView.styles';
import Checkbox from '../Checkbox/Checkbox';



const ListView = () => {

  const [tasks, setTasks] = useState<Itask[]>([{ id: "1", label: "varrer casa", isComplete: true }])
  const [newTaskLabel, setNewTaskLabel] = useState("")
  console.log(tasks)

  const handleNewTaskLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(event.target.value)
  }

  const addTask = (label: string) => {
    const id = nanoid()
    setTasks((tasks) => [...tasks, { id, label: label, isComplete: false }])
  }

  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const handleTaskCompleteChange = (task: Itask) => (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked)
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
      <Input
        placeholder="Adicione sua tarefa"
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
      />
      <Spacer height={4} />
      {tasks.length > 0 ? (
        <ToDoListContainer >
          {tasks.map((task) => (
            <ToDoItem key={task.id} checked={task.isComplete}>
              <Checkbox
                key={task.id}
                checked={task.isComplete}
                onClick={handleTaskCompleteChange(task)}
              />
              <Spacer width={2} />
              {task.label}
              <Spacer flex={1} />
            </ToDoItem>
          ))}
        </ToDoListContainer>
      ) : (
        <ToDoListContainerEmpty />
      )}


    </Container>
  );
};

export default ListView;