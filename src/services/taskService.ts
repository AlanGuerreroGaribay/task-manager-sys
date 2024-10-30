import { Task } from "../models/Task";
import { v4 as uuidv4 } from "uuid";

const tasks: Task[] = [];

export const getTasks = (): Task[] => tasks;

export const addTask = (
  title: string,
  status: "pending" | "completed"
): Task => {
  const newTask: Task = { id: uuidv4(), title, status };
  tasks.push(newTask);
  return newTask;
};
