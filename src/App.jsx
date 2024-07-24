import Signin from "./Pages/Signin"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./Pages/Signup"
import Home from "./Pages/Home"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
