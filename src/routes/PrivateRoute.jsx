// src/routes/PrivateRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("access_token"); // Check if user is logged in

  if (!isLoggedIn) {
    // Redirect them to the login page if not logged in
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
