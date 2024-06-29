import { Routes, Route } from "react-router-dom";
import Login from "./scenes/logiinPage/Login";
import Home from "./scenes/homePage/Home";
import Profile from "./scenes/profilePage/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
