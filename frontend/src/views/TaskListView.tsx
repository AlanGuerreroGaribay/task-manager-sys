import { TaskList } from "../components/TaskList/TaskList";
import { TaskListTitle } from "../components/TaskList/TaskListTitle";
import { useTaskContext } from "../context/ContextHooks/useTaskContext";

const TaskListView = () => {
  const taskContext = useTaskContext();
  return (
    <>
      <TaskListTitle />
      <TaskList tasksList={taskContext.tasks} />
    </>
  );
};

export default TaskListView;
