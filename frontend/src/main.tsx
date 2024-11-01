import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/home/App.tsx";
import "./index.css";
import { TasksContextProvider } from "./context/TasksContext/TasksContextProvider.tsx";
import { ErrorContextProvider } from "./context/ErrorContext/ErrorContexProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorContextProvider>
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </ErrorContextProvider>
  </React.StrictMode>
);
