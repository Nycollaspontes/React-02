import './ListView.styles'
import { Container, Input, ToDoListContainer } from './ListView.styles';
import Spacer from '../Spacer';
import { Itask } from './ListView.types';
import { ChangeEvent, useState, KeyboardEvent } from 'react';
import { nanoid } from 'nanoid';
import { ToDoItem } from './ListView.styles';
import Checkbox from '../Checkbox/Checkbox';



const ListView = () => {
  const [tasks, setTasks] = useState<Itask[]>([])
  const [newTaskLabel, setNewTaskLabel] = useState("")
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
      <ToDoListContainer>
        {tasks.map((task) => (
          <ToDoItem key={task.id}>
            <Checkbox
              key={task.id}
              checked={task.isComplete}
              onChange={handleTaskCompleteChange(task)}
            />
            <Spacer width={2} />
            {task.label}
            <Spacer flex={1} />
          </ToDoItem>
        ))}
      </ToDoListContainer>
      <Spacer height={4} />
      <Input
        placeholder="Add a task"
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
      />
    </Container>
  );
};

export default ListView;