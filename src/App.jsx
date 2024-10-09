import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Important from "./pages/Important";
import ResultsPage from "./pages/ResultsPage";
import { Navigate } from "react-router-dom";
export const MyContext = createContext(null);
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/myday" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/important" element={<Important />} />
            <Route path="/resultspage" element={<ResultsPage />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
