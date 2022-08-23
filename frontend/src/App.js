import React, { useEffect, useState } from "react";
import "./styles/App.css";

// pages
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Mission from "./pages/Mission";
import Chefs from "./pages/Chefs";
import MapPage from "./pages/Map";
import Cart from "./pages/Cart";
import Become from "./pages/Become";
// components
import NavbarTwo from "./components/NavbarTwo";
import Profile from "./pages/Profile";
import Order from "./pages/Order";
import ReviewsInProfile from "./components/profile_components/ReviewsInProfile";
import FollowersInProfile from "./components/profile_components/FollowersInProfile";
import RecipiesInProfile from "./components/profile_components/RecipiesInProfile";
import FAQ from "./pages/FAQ";
import Bio from "./components/profile_components/Bio";
import CurrentOrders from "./components/profile_components/CurrentOrders";
import OrderHistory from "./components/profile_components/OrderHistory";
import Analytics from "./components/profile_components/Analytics";
import Catering from "./components/profile_components/Catering";
import Availability from "./components/profile_components/Availability";
import AddPhotosToProfile from "./components/profile_components/AddPhotosToProfile";
import Purchases from "./pages/Purchases";
import Messages from "./pages/Messages";
import Settings from "./components/profile_components/Settings";
import Blog from "./pages/Blog";
// utilities, tools, features, etc.
import ModalManager from "./ModalManager";
import { useAuth } from "./utils/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./utils/auth";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  const [modalOpen, setModal] = useState(false);
  const [modalPayload, setModalPayload] = useState({});
  const auth = useAuth();
  const queryClient = new QueryClient();

  const openModal = (event) => {
    const {
      target: {
        dataset: { modal, payload },
      },
    } = event;
    if (modal) setModal(modal);
    if (payload) setModalPayload(payload);
  };

  const closeModal = () => {
    setModal("");
  };

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <div onClick={openModal}>
              <NavbarTwo />
              <ModalManager
                closeFn={closeModal}
                modal={modalOpen}
                payload={modalPayload}
              />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="order" element={<Order />}></Route>
                <Route path="mission" element={<Mission />}></Route>
                <Route path="chefs" element={<Chefs />}></Route>
                <Route path="faq" element={<FAQ />}></Route>
                <Route path="become" element={<Become />}></Route>
                <Route path="purchases" element={<Purchases />}></Route>
                <Route path="messages" element={<Messages />}></Route>
                <Route path="blog" element={<Blog />}></Route>
                <Route path="profile/:userId" element={<Profile />}>
                  <Route index element={<Bio />} />
                  <Route path="bio" element={<Bio />} />
                  <Route path="photos" element={<AddPhotosToProfile />} />

                  <Route path="reviews" element={<ReviewsInProfile />} />
                  <Route path="followers" element={<FollowersInProfile />} />

                  <Route path="current-orders" element={<CurrentOrders />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="order-history" element={<OrderHistory />} />

                  <Route path="recipies" element={<RecipiesInProfile />} />
                  <Route path="catering" element={<Catering />} />
                  <Route path="availability" element={<Availability />} />

                  <Route path="settings" element={<Settings />} />
                </Route>
                {/* <Route path="notfound" element={<NotFound />}></Route> */}
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </Provider>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;
