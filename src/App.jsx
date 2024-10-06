import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Important from "./pages/Important";
import TodoApp from "./components/TodoApp";
import ResultsPage from "./pages/ResultsPage";
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
  const [clickImportance, setClickImportance] = useState(false);
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
          clickImportance,
          setClickImportance,
        }}
      >

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/important" element={<Important />} />
            <Route path="/rame" element={<TodoApp />} />
            <Route path="/resultspage" element={<ResultsPage />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
