import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [userDetails, setUserDetails] = useState([]);
  const [userId, setUserId] = useState();

  const getUser = async () => {
    const response = await fetch("http://localhost:4000/api/v1/user/allUsers");
    const data = await response.json();
    sessionStorage.setItem("users", data.users);
    setUserDetails(data.users);
  };

  const value = {
    token,
    setToken,
    user,
    setUser,
    userDetails,
    setUserDetails,
    getUser,
    userId,
    setUserId,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
