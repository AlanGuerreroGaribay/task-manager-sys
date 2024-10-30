import { Task } from "./task.type";

export type TaskContextType = {
  tasks: Task[];
  createNewTask: Task,
};
