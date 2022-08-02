import React, { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../images/boston_spread_logo_white.png";
import { Link, useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import menuStyles from "../styles/menuStyles.js";
// import menuStyles from "../styles/menuStyles.css";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "./responsive";
import {
  FaKey,
  FaShoppingCart,
  FaUser,
  FaHome,
  FaConciergeBell,
  FaMap,
  FaQuestion,
  FaFontAwesome,
} from "react-icons/fa";
import { AiOutlineForm } from "react-icons/ai";
import { useAuth } from "../utils/auth";

const Container = styled.div`
  ${tw`
        sticky
        top[0px]
        flex
        justify-around
        align-middle
        w-screen
        border-b-2
        border-gray-200
        border-opacity-50
        items-center       
        flex-shrink-0       
`};
  background-color: rgba(0, 0, 0, 1);
  z-index: 1000;
  width: 100vw;
  min-width: 390px;
`;
const NavItemsContainer = styled.div`
  ${tw`
    flex
    list-none
    justify-around
    items-center
    mr-20
    lg:mr-0
  
`}
`;

const NavItem = styled.li`
  ${tw`
    pl-4
    mr-10
    mt-5
    mb-5
    text-white
    cursor-pointer
    font-medium
    text-lg
    transition-colors
    transition-duration[300ms]
    hover:text-gray-200
    lg:font-size[25px]
    xl:font-size[35px]
    2xl:font-size[40px]
    inline
    
`}
`;
const LogoContainer = styled.img`
  ${tw`
    pl-5
    pt-5
    pb-5
    inline-block
    flex-shrink-0
    `}
`;

const Navbar = ({ children }) => {
  const auth = useAuth();
  const isMobile = useMediaQuery({ maxWidth: deviceSize.tablet });
  const user = auth.user?.user.username || null;
  // console.log("current user from the nav is: ", user);
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <Container>
      <Link to="/">
        <LogoContainer src={logo} alt="logo" />
      </Link>
      {isMobile ? null : (
        <NavItemsContainer>
          <NavItem>
            <Link to="/">
              <FaHome />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="order">
              <FaConciergeBell />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="map">
              <FaMap />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="cart">
              <FaShoppingCart />
            </Link>
          </NavItem>
          {user ? (
            <NavItem>
              <Link to={`profile/${user}`}>
                <FaUser />
              </Link>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <Link to="register">
                  <AiOutlineForm />
                </Link>
              </NavItem>
              <NavItem>
                <Link to="login">
                  <FaKey />
                </Link>
              </NavItem>
            </>
          )}
        </NavItemsContainer>
      )}
      <Menu right styles={menuStyles}>
        <NavItem>
          <Link to="mission"> Our Mission </Link>
        </NavItem>
        <NavItem>
          <Link to="blog"> Blog </Link>
        </NavItem>
        <NavItem>
          <Link to="chefs"> Our Chefs </Link>
        </NavItem>

        <NavItem>
          <Link to="order"> Order</Link>
        </NavItem>
        <NavItem>
          <Link to="map"> Map </Link>
        </NavItem>
        <NavItem>
          <Link to="cart"> My Cart </Link>
        </NavItem>
        <NavItem>
          <Link to={`profile/${user}`}> Profile </Link>
        </NavItem>
        {user ? (
          <>
            <NavItem>
              <Link to="login"> Switch User </Link>
            </NavItem>
            <NavItem onClick={handleLogout}>Logout</NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <Link to="register"></Link>
            </NavItem>
            <NavItem>
              <Link to="login"></Link>
            </NavItem>
          </>
        )}
      </Menu>
    </Container>
  );
};

export default Navbar;
