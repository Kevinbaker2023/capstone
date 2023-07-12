import { Route, Routes } from "react-router-dom"
import ExerciseList from "./views/ExcerciseList/ExerciseList"
import Home from "./views/Home/Home"
import Schedule from "./views/Schedule/Schedule"
import SignIn from "./views/SignIn/SignIn"
import SignUp  from "./views/SignUp/SignUp"
import Services from "./views/Services/Services"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/exercise" element={<ExerciseList/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/schedule" element={<Schedule/>} />
      </Routes>
    </>
  )
}

export default App
