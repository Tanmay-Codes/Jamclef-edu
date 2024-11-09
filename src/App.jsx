// src/main.jsx
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { lightTheme, darkTheme } from "./theme";

import Layout from "./layout";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import { darkTheme, lightTheme } from "./theme";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CourseDesc from "./pages/CoursesPage/CourseDesc";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./pages/LoginSignup";
import Dashboard from "./pages/Dashboard";
import StudentSection from "./pages/StudentSection";
// import StudentSection from "./pages/StudentSection";

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="about" element={<AboutPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="blogs" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="courses/:id" element={<CourseDesc />} />
          </Route>
          <Route path="login" element={<Signup />} />

          <Route
            path="/edu/"
            element={
              <Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            }
          >
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="students" element={<StudentSection />} />

            {/*
            <Route path="contributors" element={<Contributors />} />
            <Route path="finance" element={<Finance />} />
            <Route path="profile" element={<Profile />} /> */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
