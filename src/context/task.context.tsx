import { createContext, useContext, useState } from "react";
import { ITask } from "../screens/ListView/ListView.types";

interface ITaskContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

interface IProps {
  children: React.ReactNode;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

const TaskProvider = ({ children }: IProps) => {

  const [tasks, setTasks] = useState<ITask[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </TaskContext.Provider>

  )

}

const useTask = () => useContext(TaskContext)

export { TaskProvider, useTask }

