import { SetStateAction } from "react";
import { Task } from "./task.type";

export type TaskContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<SetStateAction<Task[]>>;
  addNewTask: (
    title: string,
    tasks: Task[],
    setTasks: React.Dispatch<SetStateAction<Task[]>>,
    setError: React.Dispatch<SetStateAction<string>>
  ) => Promise<void>;
  toggleTask: (
    id: string,
    tasks: Task[],
    setTasks: React.Dispatch<SetStateAction<Task[]>>
  ) => void;
};
