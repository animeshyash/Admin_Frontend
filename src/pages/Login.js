import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../context/Context";

const Login = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useContext(AppContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  function handleChange(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const url = "http://localhost:4000/api/v1/user/login";
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
    console.log(responseData);
    sessionStorage.setItem("token", responseData.token);
    setToken(responseData.token);
    sessionStorage.setItem("role", responseData.user.role);
    setUser(responseData.user);
    navigate("/");
    toast.success(
      `Welcome back ${responseData.user.firstName} ${responseData.user.lastName}`
    );
    setData({
      email: "",
      password: "",
    });
  }

  return (
    <div className="flex flex-col py-20 items-center h-[88%] bg-gray-200">
      <h1 className="text-[1.8rem] tracking-wide">Welcome Back!</h1>
      <form className="p-2 flex flex-col w-[30%] gap-4">
        <div className="flex flex-col gap-1">
          <label>
            Email <sup className="text-red-500">*</sup>
          </label>
          <input
            type="email"
            className="text-black pr-11 border border-gray-400 p-3 text-[1.1rem] outline-none rounded-md"
            placeholder="name@example.com"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 relative">
          <label>
            Password <sup className="text-red-500">*</sup>
          </label>
          <input
            type={show ? "text" : "password"}
            className="text-black border border-gray-400 p-3 text-[1.1rem] outline-none rounded-md pr-11"
            placeholder="Password"
            name="password"
            value={data.password}
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
        <button
          onClick={handleSubmit}
          className="mt-3 border-2 text-[1.4rem] py-1 text-center px-3 border-yellow-400 rounded-md bg-yellow-400 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
