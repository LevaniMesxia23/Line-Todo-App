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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getLightColor, handleAddTask } from "./functions/TaskFunctions";
import "./i18n"
import { useMediaQuery } from "@uidotdev/usehooks";

const queryClient = new QueryClient()

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
  const isDesktop = useMediaQuery(
    "only screen and (min-width : 1024px)"
  );
  const isTablet = useMediaQuery(
    "only screen and (min-width : 768px)"
  );
  const isMobile = useMediaQuery(
    "only screen and (max-width : 768px)"
  )
  const isMedium = useMediaQuery(
    "only screen and (min-width : 540px)"
  )
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [clickDot, setClickDot] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const [searchTodo, setSearchTodo] = useState("");
  const [burgerClicked, setBurgerClicked] = useState(false);

  return (
    <div>
      <QueryClientProvider client={queryClient}>
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
            handleAddTask: () => handleAddTask(taskInput, tasks, setTasks, setTaskInput),
            getLightColor,
            burgerClicked,
            setBurgerClicked,
            isDesktop,
            isTablet,
            isMobile,
            isMedium
          }}
        >
          <RouterProvider router={router}/>
        </MyContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
