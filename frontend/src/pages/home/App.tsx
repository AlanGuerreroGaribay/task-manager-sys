import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import HomeLayoutView from "../../views/HomeLayoutView";
import TaskListView from "../../views/TaskListView";
import TaskManageView from "../../views/TaskManageView";

function App() {
  return (
    <HomeLayoutView>
      <ErrorAlert />
      <TaskManageView />
      <TaskListView />
    </HomeLayoutView>
  );
}

export default App;
