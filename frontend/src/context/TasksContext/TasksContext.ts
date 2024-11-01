import { createContext } from "react";
import { TaskContextType } from "../../types/taskContext.type";

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);
