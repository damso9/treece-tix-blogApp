import React from "react";
import { useAuth } from "./custom-hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useGlobalCustomContext } from "./custom-hooks/context";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useGlobalCustomContext();

  return isLoggedIn ? children : <Navigate to="/" />;
};
