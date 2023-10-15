// src/utils/auth.js
import { useState, useEffect } from "react";

// Simulate a basic authentication state
const isAuthenticatedInitially = true;

// Function to check if the user is authenticated
const CheckAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    isAuthenticatedInitially
  );

  useEffect(() => {
    // Simulate an authentication check with a timeout
    // In a real app, you would check cookies, tokens, or make an API call
    const timer = setTimeout(() => {
      setIsAuthenticated(true); // Set to true to simulate an authenticated user
    }, 2000); // Simulate a 2-second authentication process

    return () => clearTimeout(timer);
  }, []);

  return isAuthenticated;
};

export default CheckAuthentication;
