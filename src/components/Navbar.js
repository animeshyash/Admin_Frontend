import React from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const role = sessionStorage.getItem("role");
  return (
    <div className="flex justify-between items-center h-[12%] bg-gray-700">
      <div className="w-[70%] flex items-center">
        <h1
          className="text-[1.8rem] text-white mx-5 w-max font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          SAMPLE WEBSITE
        </h1>
      </div>
      {token === null ? (
        <div className="flex justify-center gap-4 text-[1.3rem] w-[30%]">
          <NavLink
            className="border-2 text-center border-yellow-400 py-1 px-3 w-1/3 rounded-md bg-yellow-400"
            to={"/login"}
          >
            Login
          </NavLink>
          <NavLink
            className="border-2 w-1/3 text-center py-1 px-3 border-yellow-400 rounded-md bg-yellow-400"
            to={"/signup"}
          >
            Sign up
          </NavLink>
        </div>
      ) : (
        <div className="flex justify-center gap-4 text-[1.3rem] w-[30%]">
          {role === "admin" ? (
            <button
              className="border-2 text-center border-yellow-400 py-1 px-3 w-1/3 rounded-md bg-yellow-400"
              onClick={() => {
                navigate("/admin");
              }}
            >
              Admin
            </button>
          ) : (
            <NavLink
              className="border-2 text-center border-yellow-400 py-1 px-3 w-1/3 rounded-md bg-yellow-400"
              to={"/"}
            >
              Home
            </NavLink>
          )}
          <button
            className="border-2 w-1/3 text-center py-1 px-3 border-yellow-400 rounded-md bg-yellow-400"
            onClick={() => {
              sessionStorage.clear();
              navigate("/");
              toast.success("Logged Out Successfully");
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
