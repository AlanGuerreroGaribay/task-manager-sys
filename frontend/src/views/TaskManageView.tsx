import { TaskManager } from "../components/TaskManager/TaskManager";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { useTaskContext } from "../context/ContextHooks/useTaskContext";
import { useState } from "react";
import { useErrorContext } from "../context/ContextHooks/useErrorContext";

const TaskManageView = () => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const error = useErrorContext();
  const taskContext = useTaskContext();

  return (
    <TaskManager>
      <Input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
      <Button
        text="Add Task"
        handler={() =>
          taskContext.addNewTask(
            taskTitle,
            taskContext.tasks,
            taskContext.setTasks,
            error.setError
          )
        }
      />
    </TaskManager>
  );
};

export default TaskManageView;
