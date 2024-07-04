import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const User = ({ userData }) => {
  const { getUser, setUserId } = useContext(AppContext);
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    const url = `http://localhost:4000/api/v1/user/deleteUser/${userData._id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    const responeData = await response.json();
    if (responeData.success === true) {
      toast.success(responeData.message);
      getUser();
    } else toast.error(responeData.message);
  };
  return (
    <div className="rounded-md w-[95%] h-max bg-blue-300 border-2 flex justify-between px-4 py-2 border-black ">
      <div className="w-[80%]">
        <p className="text-[1.3rem]">
          {userData.firstName + " " + userData.lastName}
        </p>
        <p className="text-[1rem] opacity-95">{userData.email}</p>
      </div>
      <div className="flex w-[20%] items-center gap-5 justify-center">
        <button
          onClick={() => {
            navigate("/update");
            setUserId(userData._id);
          }}
          className="bg-blue-400 rounded-md w-[50%] h-[70%]"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-400 rounded-md w-[50%] h-[70%]"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default User;
