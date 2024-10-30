import { Task } from "../../types/task.type";

export const TaskListItem = ({ title, status }: Task) => {
  return (
    <>
      <span
        className={`flex-1 cursor-pointer ${
          status === "completed" ? "line-through text-gray-500" : ""
        }`}
        // onClick={() => toggleTaskStatus(task.id)}
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
