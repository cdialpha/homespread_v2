import React, { createContext, useContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const login = async (values) => {
    // values that get passed in are username and password from login form
    setUser(user);
    const { username, password } = values;
    const config = { headers: { "Content-type": "application/json" } };
    const { data } = await axios.post(
      "http://localhost:3002/login",
      {
        username,
        password,
      },
      config
    );
    console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
    setUser(data.user.username);
  };

  const logout = () => {
    // const navigate = useNavigate();
    // navigate("/");
    setUser(null);
    localStorage.removeItem("userInfo");
  };

  const register = async (values) => {
    const { username, password } = values;
    const config = { headers: { "Content-type": "application/json" } };
    try {
      const { data } = await axios.post(
        "http://localhost:3002/register",
        {
          username,
          password,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUser({ userId: data.user._id, userName: data.user.username });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  const checkLoggedIn = async () => {
    // Use this function to determine if the user's token is valid
    // Check Local Storage for Token
    let jwtToken = "";
    let _user = "";
    let userInfo = localStorage.getItem("userInfo");
    // If there is nothing in localstorage, then user is not loggedin / auth
    if (userInfo === "" || null) {
      localStorage.setItem("userInfo", "");
      console.log("You have no token!");
      setUser(null);
    }
    //Otherwise we want to validate the token that's there.
    else {
      userInfo = JSON.parse(userInfo);
      jwtToken = userInfo.token;
      _user = userInfo.user;
      console.log("your token is: ", jwtToken);
      // Make API call to backend / passport
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: jwtToken,
        },
      };
      try {
        const validateAuth = await axios.get(
          "http://localhost:3002/protected",
          config
        );
        // if ValidateAuth returns true, then setstate user to user from local storage.
        // theres never a case where you have the JWT and not the username.

        if (validateAuth.data.success === true) {
          setUser({ userId: _user._id, userName: _user.username });
        } else {
          console.log("Please log in!");
          setUser(null);
        }
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getS3URL = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const geturl = await axios.get("http://localhost:3002/s3url", config);
      return geturl;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, checkLoggedIn, getS3URL }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
