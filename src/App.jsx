import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import {  RouterProvider } from "react-router-dom";
import Important from "./pages/Important";
import ResultsPage from "./pages/ResultsPage";
import Layout from "./layouts/Layout";
import UserLayout from "./layouts/UserLayout";
import { createBrowserRouter } from "react-router-dom";
export const MyContext = createContext(null);
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Important",
        element: <Important />,
      },
      {
        path: "/resultspage",
        element: <ResultsPage />,
      }
    ],
  },
  {
    element: <UserLayout />,
    children: [
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskInput, setTaskInput] = useState("");
  const [clickDot, setClickDot] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const [searchTodo, setSearchTodo] = useState("");

  const getLightColor = () => {
    const r = Math.floor(Math.random() * 156) + 100;
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;
    return `rgb(${r}, ${g}, ${b})`;
  };
  const handleAddTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        text: taskInput,
        completed: false,
        isImportance: false,
        color: getLightColor(),
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
      console.log(taskInput);
    }
  };

  return (
    <div>
      <MyContext.Provider
        value={{
          tasks,
          taskInput,
          setTasks,
          setTaskInput,
          clickDot,
          setClickDot,
          searchClick,
          setSearchClick,
          searchTodo,
          setSearchTodo,
          handleAddTask,
          getLightColor,
        }}
      >
        <RouterProvider router={router}/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
