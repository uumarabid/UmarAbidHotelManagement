import React, { useState, useEffect, createContext } from "react";
import Login from "../pages/login";

// https://gist.github.com/sineto/52d6a4f634cb51c2a6e6013dc64be47b

const UserContext = createContext();

export const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return {};
  }
  return JSON.parse(user);
};

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let cuser = isAuthenticated();
      if (cuser === null) {
        localStorage.setItem("user", "");
        cuser = "";
      }

      setCurrentUser(cuser);
    };

    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>{currentUser?.token ? children : <Login />}</UserContext.Provider>
  );
};

export default UserContext;
