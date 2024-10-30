import { Request, Response } from "express";
import { getTasks, addTask } from "../services/taskService";

export const getAllTasks = (req: Request, res: Response) => {
  res.status(200).json(getTasks());
};

export const createTask = (req: Request, res: Response) => {
  const { title, status } = req.body;

  try {
    if (!title || !status) {
      res.status(400).json({ error: "Title and status are required" });
      return;
    }

    const newTask = addTask(title, status);
    res.status(201).json(newTask);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
    }
  }
};
