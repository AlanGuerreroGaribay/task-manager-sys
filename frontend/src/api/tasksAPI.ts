import axios from "axios";
import { SetStateAction } from "react";
import { Task } from "../types/task.type";

export const TASKS_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const addNewTask = async (
  title: string,
  tasks: Task[],
  setTasks: React.Dispatch<SetStateAction<Task[]>>,
  setError: React.Dispatch<SetStateAction<string>>
) => {
  const data = {
    title: title,
    status: "pending",
  };

  if (!title) {
    setError("The title of the task is empty");
  }

  const newTask = await axios.post(`${TASKS_URL}/tasks`, data);
  const updatedTasks = [...tasks, newTask.data];

  setTasks(updatedTasks);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

export const toggleTask = (
  id: string,
  tasks: Task[],
  setTasks: React.Dispatch<SetStateAction<Task[]>>
) => {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === "pending" ? "completed" : "pending",
          }
        : task
    )
  );
};

export const getAllTasks = async (
  tasks: Task[],
  setTasks: React.Dispatch<SetStateAction<Task[]>>
) => {
  const cachedData = JSON.parse(localStorage.getItem("tasks") || "[]");
  console.log(cachedData);

  if (cachedData.length < 1) {
    const allTasks = await axios.get(`${TASKS_URL}/tasks`);
    await setTasks(allTasks.data);
    await localStorage.setItem("tasks", JSON.stringify(tasks));
    return;
  }

  if (tasks.length === 0) {
    setTasks(cachedData);
  }
};
