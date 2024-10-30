import { useEffect, useState } from "react";
import { Task } from "../types/task.type";
import { TaskContext } from "./TasksContext";
import { getAllTasks } from "../api/tasksAPI";

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  const dataHandler = async () => {
    const taskList = await getAllTasks();
    setTasks(taskList);
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
};
