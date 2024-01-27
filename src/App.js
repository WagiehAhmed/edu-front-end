import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";

import Main from "./components/main";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contactUs";
import Courses from "./components/courses";

import CustomThemeProvider from "./styles/theme";
import { useMediaQuery, useTheme } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/index";
import Login from "./components/login/index";
import Profile from "./components/profile/index";
import UpdateProfile from "./components/updateProfile";
import CoursePage from "./components/courses/CoursePage";
import CourseLessonPage from "./components/courses/CourseLessonPage";
import AddCoursePage from "./components/courses/AddCoursePage";
import { useState } from "react";

function App() {
  const [mainTitle, setMainTitle] = useState("technological tracks");
  const matches = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route
            path="/"
            element={
              <Main
                matches={matches}
                mainTitle={mainTitle}
                setMainTitle={setMainTitle}
              />
            }
          >
            <Route path="home" element={<Home matches={matches} />} />
            <Route path="contact" element={<Contact matches={matches} />} />
            <Route path="about" element={<About matches={matches} />} />

            <Route path="signup" element={<Signup matches={matches} />} />
            <Route path="login" element={<Login matches={matches} />} />

            <Route
              path="track"
              element={
                <Courses matches={matches} setMainTitle={setMainTitle} />
              }
            />
            <Route
              path="track/:courseId"
              element={<CoursePage matches={matches} />}
            />
            <Route
              path="track/:courseId/:lessonId"
              element={<CourseLessonPage matches={matches} />}
            />









            <Route
              path="CreateCourse"
              element={<AddCoursePage matches={matches} />}
            />

            <Route path="profile" element={<Profile matches={matches} />} />
            <Route
              path="profile/:userId"
              element={<Profile matches={matches} />}
            />
            <Route
              path="updateProfile"
              element={<UpdateProfile matches={matches} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}
// /profile/:id?
{
  /* <Route path="home/:courseId" element={<CoursePage matches={matches}/>}/> */
}

export default App;
