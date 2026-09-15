
import { Route,Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Course from "./component/Course";
import Signup from "./component/Signup";

function App(){
  const num = 10;
  console.log(num)

  return (
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Course/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />

    </Routes>

  );
}

export default App;