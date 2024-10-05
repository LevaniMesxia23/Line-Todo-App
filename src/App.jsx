import Signin from "./components/Signin"
import Signup from "./components/Signup";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const MyContext = createContext(null);
function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  });
  const [taskInput, setTaskInput] = useState("");
  const [clickDot, setClickDot] = useState(false)
  return (
    <div>
      <MyContext.Provider value={{tasks,taskInput,setTasks,setTaskInput,clickDot,setClickDot}}>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
       </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App