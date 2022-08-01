import React, { useEffect, useState } from "react";
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

import ChefProfile from "./pages/ChefProfile";
import Order from "./pages/Order";
import ReviewsInProfile from "./components/profile_components/ReviewsInProfile";
import FollowersInProfile from "./components/profile_components/FollowersInProfile";
import RecipiesInProfile from "./components/profile_components/RecipiesInProfile";
import FAQ from "./pages/FAQ";
import { useAuth } from "./utils/auth";
import ModalManager from "./ModalManager";
import Bio from "./components/profile_components/Bio";

const App = () => {
  const [modalOpen, setModal] = useState(false);
  const auth = useAuth();

  const openModal = (event) => {
    const {
      target: {
        dataset: { modal },
      },
    } = event;
    if (modal) setModal(modal);
  };

  const closeModal = () => {
    setModal("");
  };

  return (
    <div onClick={openModal}>
      <Navbar />
      <ModalManager closeFn={closeModal} modal={modalOpen} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="order" element={<Order />}></Route>
        <Route path="mission" element={<Mission />}></Route>
        <Route path="chefs" element={<Chefs />}></Route>
        <Route path="faq" element={<FAQ />}></Route>
        <Route path="profile/:userId" element={<ChefProfile />}>
          <Route path="reviews" element={<ReviewsInProfile />} />
          <Route path="followers" element={<FollowersInProfile />} />
          <Route path="recipies" element={<RecipiesInProfile />} />
          <Route path="bio" element={<Bio />} />
        </Route>
        {/* <Route path="map" element={<MapPage />}></Route> */}
        {/* <Route path="unath" element={<Unauth />}></Route>
        <Route path="notfound" element={<NotFound />}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
