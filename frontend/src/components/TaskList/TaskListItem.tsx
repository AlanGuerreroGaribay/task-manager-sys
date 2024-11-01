import { useTaskContext } from "../../context/ContextHooks/useTaskContext";
import { Task } from "../../types/task.type";

export const TaskListItem = ({ id, title, status }: Task) => {
  const taskContext = useTaskContext();

  return (
    <>
      <span
        className={`flex-1 cursor-pointer ${
          status === "completed" ? "line-through text-gray-500" : ""
        }`}
        onClick={() =>
          taskContext.toggleTask(
            id || "",
            taskContext.tasks,
            taskContext.setTasks
          )
        }
      >
        {title}
      </span>
      <span
        className={`px-2 py-1 rounded ${
          status === "pending" ? "bg-yellow-500" : "bg-green-500"
        }`}
      >
        {status}
      </span>
    </>
  );
};
