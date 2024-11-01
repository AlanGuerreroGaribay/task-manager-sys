import { useEffect, useState } from "react";
import { Task } from "../../types/task.type";
import { TaskContext } from "./TasksContext";
import { addNewTask, getAllTasks, toggleTask } from "../../api/tasksAPI";

export const TasksContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getAllTasks(tasks, setTasks);
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks: setTasks,
        addNewTask: addNewTask,
        toggleTask: toggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
