// src/components/AuthGuard.js
import React, { useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

const AuthGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Replace this with your authentication logic, e.g., checking for cookies
    const isAuthenticated = false;

    if (!isAuthenticated && location.pathname !== "/register") {
      // If the user is not authenticated (no cookie), navigate to the login page
      navigate("/login");
      // return;
    }
  }, [navigate, location]);

  // Render the child routes (protected routes) using the <Outlet> component
  return <Outlet />;
};

export default AuthGuard;
