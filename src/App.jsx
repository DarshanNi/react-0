
import { Route,Routes } from "react-router-dom";
import Now from "./component/Now"
import Home from "./component/Home";
import Login from "./component/Login";

function App(){
  const num = 10;
  console.log(num)

  return (
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/now" element={<Now/>} />

    </Routes>

  );
}

export default App;