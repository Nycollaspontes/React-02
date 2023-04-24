import { createContext, useContext, useState } from "react";
import { ITask } from "../components/ListView/ListView.types";

interface ITaskContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

interface IProps {
  children: React.ReactNode;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

const TaskProvider = ({children}:IProps) => {

  const [tasks, setTasks] = useState<ITask[]>([])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks
      }}
    >
      {children}
    </TaskContext.Provider>

  )

}

const useTask = () => useContext(TaskContext)

export { TaskProvider, useTask }

