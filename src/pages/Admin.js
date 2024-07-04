import React, { useContext, useEffect } from "react";
import User from "../components/User";
import { AppContext } from "../context/Context";

const Admin = () => {
  const { userDetails, getUser } = useContext(AppContext);
  console.log(userDetails);

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {userDetails.length <= 0 ? (
        <div className="h-[88%] flex justify-center items-center">Spinner</div>
      ) : (
        <div className="h-max py-2">
          {userDetails.map((i, k) => (
            <div className="my-2 flex justify-center">
              <User userData={i} key={k} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Admin;
