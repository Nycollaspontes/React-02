import './ListView.styles'
import { Container, Input, ToDoListContainer, ToDoListContainerEmpty } from './ListView.styles';
import Spacer from '../Spacer';
import { ITask } from './ListView.types';
import { ChangeEvent, useState, KeyboardEvent, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToDoItem, DeleteButton } from './ListView.styles';
import Checkbox from '../Checkbox/Checkbox';
import Trash from '../../assets/lixeira.png'
import { useTask } from '../../context/task.context';



const ListView = () => {

  const { tasks, setTasks } = useTask()
  const [newTaskLabel, setNewTaskLabel] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleNewTaskLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(event.target.value)
  }
  const saveTaskLocalStorage = (updatedTasks: ITask[]) => {
    const taskStringify = JSON.stringify(updatedTasks)
    localStorage.setItem("tasks", taskStringify)
  }

  const handleDeleteTask = (id: string) => {
    const updatedList = tasks.filter(task => task.id !== id);
    setTasks(updatedList);
  }

  const addTask = (label: string) => {
    const id = nanoid()
    const currentTask: ITask = { id, label: label, isComplete: false }
    const updatedTasks = [...tasks, currentTask]
    setTasks(updatedTasks)
    saveTaskLocalStorage(updatedTasks)
  }

  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const handleTaskCompleteChange = (task: ITask) => (event: ChangeEvent<HTMLInputElement>) => {
    updateTaskCompletion(task.id, event.target.checked);
  };

  const handleNewTaskKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {

    if (event.key === "Enter" && newTaskLabel !== "") {
      addTask(newTaskLabel);
      setNewTaskLabel("");
    }
  };

  useEffect(() => {
    const fetchTasks = () => {
      const taskStringify = localStorage.getItem("tasks")
      if (taskStringify) {
        const taskArray = JSON.parse(taskStringify)
        setTasks(taskArray)
      }
    }
    fetchTasks()

  }, [])

  return (
    <Container>
      <Spacer height={4} />
      <Input
        placeholder="Pesquise a tarefa"
        value={searchTerm}
        onChange={handleSearchTerm}
        onKeyPress={handleNewTaskKeyPress}
      />
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

          {tasks.filter(task => task.label.includes(searchTerm))
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
                <img src={Trash}/>
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