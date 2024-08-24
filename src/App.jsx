// src/main.jsx
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
// import { lightTheme, darkTheme } from "./theme";

import Layout from "./layout";
import Clients from "./pages/Clients";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              // <PublicRoute>
              // <LoginSignup />
              <LandingPage />
              // </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            }
          >
            <Route path="dashboard" element={<Projects />} />

            <Route path="timesheet" element={<Clients />} />

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
