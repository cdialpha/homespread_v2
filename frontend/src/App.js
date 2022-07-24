import React, { createContext, useState, useEffect } from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mission from "./pages/Mission";
import Chefs from "./pages/Chefs";
import MapPage from "./pages/Map";
import axios from "axios";
import ChefProfile from "./pages/Profiles/ChefProfile";
import Order from "./pages/Order";

export const UserContext = createContext(null);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("is logged in?: ", isLoggedIn);
  useEffect(() => {
    const isLoggedIn = async () => {
      let jwtToken = localStorage.getItem("userInfo");
      console.log(jwtToken, typeof jwtToken);
      if (jwtToken === "" || null) {
        localStorage.setItem("userInfo", "");
        jwtToken = "";
        console.log("You have no token!");
      } else {
        jwtToken = JSON.parse(jwtToken);
        if (jwtToken === !null) {
          jwtToken = jwtToken.token;
          console.log("token is: ", jwtToken);
          const config = {
            headers: {
              "Content-type": "application/json",
              Authorization: jwtToken,
            },
          };
          const isAuth = await axios.get(
            "http://localhost:3002/protected",
            config
          );

          console.log(isAuth.data);
        }
      }
    };
    isLoggedIn();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/order" element={<Order />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/profile" element={<ChefProfile />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
};

export default App;
