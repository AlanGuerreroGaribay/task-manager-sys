import { TaskList } from "../components/TaskList/TaskList";
import { TaskListTitle } from "../components/TaskList/TaskListTitle";
import { Task } from "../types/task.type";

const TaskListView = ({ tasksList }: { tasksList: Task[] }) => {
  return (
    <>
      <TaskListTitle />
      <TaskList tasksList={tasksList} />
    </>
  );
};

export default TaskListView;
