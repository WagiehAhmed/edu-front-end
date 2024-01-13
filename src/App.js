import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";

import Main from "./components/main";
import Home from "./components/home";
import About from "./components/aboutUs";
import Contact from "./components/contactUs";
import Teachers from "./components/teachers";
import Courses from "./components/courses";

import CustomThemeProvider from "./styles/theme";
import { useMediaQuery, useTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './components/signup/index';
import Login from './components/login/index';

function App() {
  const matches = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main matches={matches}/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="/teachers" element={<Teachers/>}/>
            <Route path="/courses" element={<Courses matches={matches}/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/signup" element={<Signup matches={matches}/>}/>
            <Route path="/login" element={<Login matches={matches}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
