import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("access_token"); // Check if user is logged in

  if (isLoggedIn) {
    // Redirect them to the dashboard or another route if they are already logged in
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }

  return children;
};

export default PublicRoutes;
