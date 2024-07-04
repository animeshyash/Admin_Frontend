import { React, useContext } from "react";
import { AppContext } from "../context/Context";
import { Navigate } from "react-router-dom";

const OpenRoutes = ({ children }) => {
  const { token } = useContext(AppContext);
  console.log(token);

  if (token === undefined) return children;
  else return <Navigate to={"/"} />;
};

export default OpenRoutes;
