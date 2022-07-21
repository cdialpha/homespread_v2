import React, { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../images/boston_spread_logo_white.png";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import menuStyles from "../styles/menuStyles.js";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "./responsive";
import { FaKey } from "react-icons/fa";
import { UserContext } from "../App";

const Container = styled.div`
  ${tw`
        flex
        pl-10
        pt-4
        border-b-2
        border-gray-200
        border-opacity-50
        items-center
        self-center                
`};
  background-color: rgba(0, 0, 0, 1);
  z-index: 1;
  width: 100vw;
  justify-content: space-between;
`;

const NavItems = styled.ul`
  ${tw`
    flex
    list-none
    w-full
    h-auto
    lg:w-auto
    lg:h-full
    lg:ml-20
    justify-center
    items-center
`}
`;

const NavItem = tw.li`
    pl-4
    mr-10
    mt-5
    mb-5
    items-center
    text-black
    cursor-pointer
    font-medium
    text-lg
    transition-colors
    transition-duration[300ms]
    hover:text-gray-200
`;

const LogoContainer = styled.img`
  ${tw`
    pl-10
    2xl:mt-10
    2xl:mb-10
    lg:mt-5
    lg:mb-5
    md:mt-2
    md:mb-2
`}
`;

const HamburgerForGuest = () => {
  return (
    <Menu right styles={menuStyles}>
      <NavItem>
        <Link to="order"> Order</Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="map"> Map </Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="mission"> Our Mission </Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="blog"> Blog </Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="chefs"> Our Chefs </Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="register"> Register </Link>{" "}
      </NavItem>
      <NavItem>
        <FaKey />
        <Link to="login"> Login </Link>{" "}
      </NavItem>
    </Menu>
  );
};

const HamburgerForLoggedIn = () => {
  return (
    <NavItems>
      <NavItem>
        <Link to="map"> Map </Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="order"> Order</Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="cart"> My Cart </Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="mission"> Our Mission </Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="blog"> Blog </Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="chefs"> Our Chefs </Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="switch"> Switch User </Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="profile"> Profile </Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="logout"> Logout </Link>{" "}
      </NavItem>
    </NavItems>
  );
};

const DesktopForGuest = () => {
  return (
    <>
      <NavItems>
        <NavItem>
          <Link to="order"> Order</Link>{" "}
        </NavItem>
        <NavItem>
          <Link to="map"> Map </Link>{" "}
        </NavItem>
        <NavItem>
          <Link to="mission"> Our Mission </Link>{" "}
        </NavItem>
      </NavItems>
      <NavItems>
        <NavItem>
          <Link to="register"> Register </Link>{" "}
        </NavItem>
        <NavItem>
          <FaKey />
          <Link to="login"> Login </Link>{" "}
        </NavItem>
      </NavItems>
    </>
  );
};

const DesktopForLoggedIn = () => {
  return (
    <>
      <NavItems>
        <NavItem>
          <Link to="map"> Map </Link>{" "}
        </NavItem>
        <NavItem>
          <Link to="order"> Order</Link>{" "}
        </NavItem>
        <NavItem>
          <Link to="cart"> My Cart </Link>{" "}
        </NavItem>
      </NavItems>
      <NavItems>
        <NavItem>
          <Link to="profile"> Profile </Link>{" "}
        </NavItem>
      </NavItems>
      <Menu right styles={menuStyles}>
        <HamburgerForLoggedIn />
      </Menu>
    </>
  );
};

const Navbar = (DesktopForGuest) => {
  const { isLoggedIn } = useContext(UserContext);
  const isMobile = useMediaQuery({ maxWidth: deviceSize.tablet });
  console.log(typeof DesktopForGuest);
  return (
    <>
      <Link to="/">
        {" "}
        <LogoContainer src={logo} alt="logo" />{" "}
      </Link>
      {!isMobile && !isLoggedIn && <DesktopForGuest />}
      {!isMobile && isLoggedIn && <DesktopForLoggedIn />}
      {isMobile && !isLoggedIn && <HamburgerForGuest />}
      {isMobile && isLoggedIn && <HamburgerForLoggedIn />}
    </>
  );
};

export default Navbar;
