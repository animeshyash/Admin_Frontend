import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/Context";

const ProtectedRoute = ({ children }) => {
  const userRole = sessionStorage.getItem("role");

  if (userRole === "admin") {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default ProtectedRoute;
