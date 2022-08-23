import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import api from "../api/api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const [user, setUser] = useState(userInfoFromStorage);
  console.log(user);

  const login = async (values) => {
    const data = await api.login(values);
    const { token, user, success } = data;
    const userInfo = { token, user };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setUser(userInfo);
    console.log("user info: ", userInfo);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userInfo");
  };

  const register = async (values) => {
    try {
      const data = await api.register(values);
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
