import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("authToken") !== null;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return <Outlet />;
};

export default AuthGuard;
