import Signin from "./components/Signin"
import Signup from "./components/Signup";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
       </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App