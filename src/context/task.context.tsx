import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ITask } from "../screens/ListView/ListView.types";
import { nanoid } from "nanoid";

interface ITaskContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  tasksFilter: ITask[];
  addTask: (label: string) => void;
  handleDeleteTask: (id: string) => void;
  updateTaskCompletion: (taskId: string, isComplete: boolean) => void;
  Status: JSX.Element;
}

interface IProps {
  children: React.ReactNode;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

const TaskProvider = ({ children }: IProps) => {

  const [tasks, setTasks] = useState<ITask[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [tasksFilter, setTaskFilter] = useState<ITask[]>([])

  useEffect(() => {
    const listTask = tasks.filter((eachtask) => eachtask.label.toLowerCase().includes(searchTerm.toLowerCase()))
    setTaskFilter(listTask)
  }, [searchTerm, tasks])

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

  const Status = useMemo(() => {
    const data = tasks.reduce((previous, item) => {
      if (item.isComplete === true) {
        return { complete: previous.complete + 1, progress: previous.progress }
      }
      else {
        return { complete: previous.complete, progress: previous.progress + 1 }
      }

    }, { complete: 0, progress: 0 })

    return <p>Total:{tasks.length} - Concluidas:{data.complete} - Em Progresso: {data.progress}</p>
  }, [tasks])


const saveTaskLocalStorage = (updatedTasks: ITask[]) => {
  const taskStringify = JSON.stringify(updatedTasks)
  localStorage.setItem("tasks", taskStringify)
}
const addTask = (label: string) => {
  const id = nanoid()
  const currentTask: ITask = { id, label: label, isComplete: false }
  const updatedTasks = [...tasks, currentTask]
  setTasks(updatedTasks)
  saveTaskLocalStorage(updatedTasks)
}
const handleDeleteTask = (id: string) => {
  const updatedList = tasks.filter(task => task.id !== id);
  setTasks(updatedList);
}
const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
  setTasks((tasks) =>
    tasks.map((task) => {
      if (task.id === taskId) return { ...task, isComplete };
      return task;
    })
  );
};

return (
  <TaskContext.Provider
    value={{
      tasks,
      setTasks,
      searchTerm,
      setSearchTerm,
      tasksFilter,
      addTask,
      handleDeleteTask,
      updateTaskCompletion,
      Status
    }}
  >
    {children}
  </TaskContext.Provider>

)

}

const useTask = () => useContext(TaskContext)

export { TaskProvider, useTask }

