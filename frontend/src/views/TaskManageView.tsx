import { TaskManager } from "../components/TaskManager/TaskManager";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import React, { SetStateAction } from "react";

const TaskManageView = ({
  value,
  setTaskTitle,
  createTask,
}: {
  value: string;
  setTaskTitle: React.Dispatch<SetStateAction<string>>;
  createTask: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  return (
    <TaskManager>
      <Input value={value} onChange={changeInputHandler} />
      <Button text="Add Task" handler={createTask} />
    </TaskManager>
  );
};

export default TaskManageView;
