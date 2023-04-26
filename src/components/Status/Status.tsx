import { useMemo } from "react";
import { useTask } from "../../context/task.context"


export const Status = () => {
  const { tasks } = useTask() 

  const handleStatus = () => {
    let complete = 0;
    let inProgress = 0;

    tasks.forEach(item => {
      if (item.isComplete === true) {
        complete++;
      }
      else {
        inProgress++;
      }
    })
    return { complete, inProgress };

  }

  const Status = useMemo(() => {
    return <p>Total:{tasks.length} - Concluidas:{handleStatus().complete} - Em Progresso: {handleStatus().inProgress}</p>
  } ,[])

  return (
    <h1>{Status}</h1>
  )
}
