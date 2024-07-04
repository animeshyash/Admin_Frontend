import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import OpenRoute from "./components/OpenRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { AppContext } from "./context/Context";
import Update from "./pages/Update";

const App = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update"
          element={
            <ProtectedRoute>
              <Update />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
