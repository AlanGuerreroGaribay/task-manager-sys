import { Router } from "express";
import { createTask, getAllTasks } from "../controllers/taskController";

const router = Router();

router.get("/tasks", getAllTasks);
router.post("/tasks", createTask);

export default router;
