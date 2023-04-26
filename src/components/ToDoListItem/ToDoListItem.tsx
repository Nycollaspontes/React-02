import { ChangeEvent } from "react";


import { ITask } from "../../screens/ListView/ListView.types";
import { StyledToDoItem } from "../../screens/ListView/ListView.styles";
import Checkbox from "../Checkbox/Checkbox";
import Spacer from "../Spacer";

interface ITodoListItem {
  eachTask: ITask;
  handleTaskCompleteChange: (
    (event: ChangeEvent<HTMLInputElement>, task: ITask) => void)
}

const TodoListItem = ({
  eachTask,
  handleTaskCompleteChange,
}: ITodoListItem) => {
  return (
    <StyledToDoItem key={eachTask.id} checked={eachTask.isComplete}>
      <Checkbox
        key={eachTask.id}
        checked={eachTask.isComplete}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleTaskCompleteChange(event, eachTask)
        }
      />
      <Spacer width={2} />
      {eachTask.label}
      <Spacer flex={1} />
    </StyledToDoItem>
  );
};

export default TodoListItem;