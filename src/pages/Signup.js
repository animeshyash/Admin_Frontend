import React, { useState, useContext } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../context/Context";

const Signup = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useContext(AppContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const url = "http://localhost:4000/api/v1/user/signup";
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (responseData.success === false) {
      toast.error(responseData.message);
      return;
    }
    sessionStorage.setItem("token", responseData.token);
    setToken(responseData.token);
    sessionStorage.setItem("role", responseData.user.role);
    setUser(responseData.user);
    navigate("/");
    navigate("/");
    toast.success(
      `Welcome ${responseData.user.firstName} ${responseData.user.lastName}`
    );
    setData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }

  const [show, setShow] = useState(false);
  return (
    <div className="flex p-8 flex-col items-center h-[88%] bg-gray-200">
      <h1 className="text-[1.8rem] tracking-wide">Welcome!</h1>
      <form className="p-2 flex flex-col gap-2 pt-2 w-[30%]">
        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label>
              First Name <sup className="text-red-500">*</sup>
            </label>
            <input
              type="text"
              required
              className="text-black pr-11 border border-gray-400 p-3 text-[1.1rem] outline-none rounded-md"
              placeholder="First Name"
              value={data.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              Last Name <sup className="text-red-500">*</sup>
            </label>
            <input
              required
              type="text"
              className="text-black pr-11 border border-gray-400 p-3 text-[1.1rem] outline-none rounded-md"
              placeholder="Last Name"
              value={data.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email and Contact */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-1">
            <label>
              Email <sup className="text-red-500">*</sup>
            </label>
            <input
              required
              type="email"
              className="text-black pr-11 border border-gray-400 p-3 text-[1.1rem] outline-none rounded-md"
              placeholder="name@example.com"
              value={data.email}
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-1 relative">
            <label>
              Password <sup className="text-red-500">*</sup>
            </label>
            <input
              required
              type={show ? "text" : "password"}
              className="text-black border border-gray-400 p-3 text-[1.1rem] outline-none rounded-md pr-11"
              placeholder="Password"
              value={data.password}
              name="password"
              onChange={handleChange}
            />
            <span
              className="absolute right-4 top-11 cursor-pointer"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? (
                <AiOutlineEyeInvisible fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} />
              )}
            </span>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-3 border-2 text-[1.4rem] py-1 text-center px-3 border-yellow-400 rounded-md bg-yellow-400"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
