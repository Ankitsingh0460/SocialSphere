import { Routes, Route } from "react-router-dom";
import Login from "./scenes/logiinPage/Login";
import Home from "./scenes/homePage/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
