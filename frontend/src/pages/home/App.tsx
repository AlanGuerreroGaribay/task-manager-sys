import { useEffect, useState } from "react";
import { TASKS_URL } from "../../api/tasksAPI";
import { Task } from "../../types/task.type";
import HomeLayoutView from "../../views/HomeLayoutView";
import TaskListView from "../../views/TaskListView";
import TaskManageView from "../../views/TaskManageView";
import axios from "axios";

function App() {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const getAllTasks = async () => {
    const allTasks = await axios.get(TASKS_URL);
    return setTasks(allTasks.data);
  };

  const addNewTAsk = async (title: string) => {
    const data = {
      title: title,
      status: "pending",
    };

    const newTask = await axios.post(TASKS_URL, data);
    const updatedTasks = [...tasks, newTask.data];

    setTasks(updatedTasks);
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <HomeLayoutView>
      <TaskManageView
        value={taskTitle}
        setTaskTitle={setTaskTitle}
        createTask={() => addNewTAsk(taskTitle)}
      />
      <TaskListView tasksList={tasks} />
    </HomeLayoutView>
  );
}

export default App;
