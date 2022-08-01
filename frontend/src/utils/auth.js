import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import api from "../api/index";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const [user, setUser] = useState(userInfoFromStorage);

  const login = async (values) => {
    const { data } = await api.login(values);
    // console.log("user object from database after login", data);
    localStorage.setItem("userInfo", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userInfo");
  };

  const register = async (values) => {
    try {
      const { data } = await api.register(values);
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
