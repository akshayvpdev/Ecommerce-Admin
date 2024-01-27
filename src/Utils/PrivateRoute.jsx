import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export { PrivateRoute };
function PrivateRoute({ children }) {
  const { user } = useAuth()
  if (user === null || user === false) {
    // return <Navigate to="/login" />;
    return children;
  } else {

    return children;
  }
}
