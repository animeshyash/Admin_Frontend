import { React, useContext, useState } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const userId = useContext(AppContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    role: "",
  });

  async function handleUpdate(e) {
    e.preventDefault();
    console.log(data);
    const url = `http://localhost:4000/api/v1/user/updateUser/${userId.userId}`;
    const response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (responseData.success === false) {
      toast.error(responseData.message);
      console.log(responseData.error);
      return;
    }
    toast.success(`Data Updated Successfully`);
    setData({ firstName: "", lastName: "", role: "" });
  }

  function handleChange(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="flex p-8 flex-col items-center h-[88%] bg-gray-200">
      <h1 className="text-[1.6rem] tracking-wide opacity-85">Update Details</h1>
      <form className="p-2 flex flex-col gap-2 pt-6 w-[30%]">
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

        <div className="flex flex-col gap-1">
          <label htmlFor="role">
            Select Role: <sup className="text-red-500">*</sup>
          </label>
          <select
            className="text-black pr-11 border border-gray-400 p-3 text-[1.1rem] outline-none rounded-md"
            id="role"
            value={data.role}
            name="role"
            onChange={handleChange}
          >
            <option value="">Select Role: </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          onClick={handleUpdate}
          className="mt-3 border-2 text-[1.4rem] py-1 text-center px-3 border-yellow-400 rounded-md bg-yellow-400"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
