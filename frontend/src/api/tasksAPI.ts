import axios from "axios";

export const TASKS_URL = "http://localhost:3000/api/tasks";

export const createNewTask = async (title: string) => {
  const data = {
    title: title,
    status: "pending",
  };

  const cachedData = JSON.parse(localStorage.getItem("tasks") || "[]");

  // console.log(validation);

  // if (validation.length !== 0) {
  //   console.log("entra");
  //   return cachedData;
  // }

  const newTask = await axios.post(TASKS_URL, data);
  await cachedData.push(newTask.data);

  localStorage.setItem("tasks", JSON.stringify(cachedData));

  return newTask;
};

export const getAllTasks = async () => {
  const cachedData = await JSON.parse(localStorage.getItem("tasks") || "[]");

  if (cachedData.length === 0) {
    const allTasks = await axios.get(TASKS_URL);
    return allTasks.data;
  }

  console.log(cachedData);
  return cachedData;
};
