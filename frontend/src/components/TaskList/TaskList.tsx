import { TaskListItem } from "./TaskListItem";
import { Task } from "../../types/task.type";

export const TaskList = ({ tasksList }: { tasksList: Task[] }) => {
  return (
    <ul>
      {tasksList.map((task: Task) => (
        <li
          key={task.id}
          className="flex justify-between items-center mb-2 p-2 border rounded"
        >
          <TaskListItem
            id={task.id}
            title={task.title || ""}
            status={task.status || "pending"}
          />
        </li>
      ))}
    </ul>
  );
};
