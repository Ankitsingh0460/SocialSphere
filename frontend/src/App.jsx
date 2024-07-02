import { Routes, Route } from "react-router-dom";
import Login from "./scenes/logiinPage/Login";
import Home from "./scenes/homePage/Home";
import Profile from "./scenes/profilePage/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <>
      <Routes>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </ThemeProvider>
      </Routes>
    </>
  );
}

export default App;
