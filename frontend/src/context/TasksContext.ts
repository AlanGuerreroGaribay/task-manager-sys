import { createContext } from "react";
import { Task } from "../types/task.type";

export const TaskContext = createContext<Task[] | undefined>(undefined);
