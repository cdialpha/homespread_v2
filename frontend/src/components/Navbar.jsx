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
import { FaKey, FaShoppingCart, FaUser } from "react-icons/fa";
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
    justify-around
    
`}
`;
const NavItemsGroup = styled.ul`
  ${tw`
    flex
    list-none
    justify-around
    items-center
    
    width[auto]
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

const HamburgerForGuest = () => {
  return (
    <Menu right styles={menuStyles}>
      <NavItem>
        <Link to="order"> Order</Link>
      </NavItem>
      <NavItem>
        <Link to="map"> Map </Link>
      </NavItem>
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
        <Link to="register"> Register </Link>
      </NavItem>
      <NavItem>
        <Link to="login"> Login </Link>
      </NavItem>
    </Menu>
  );
};

const HamburgerForLoggedIn = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const user = auth.user;
  console.log("the real user is: ", user);
  return (
    <Menu right styles={menuStyles}>
      <NavItem>
        <Link to="map"> Map </Link>
      </NavItem>
      <NavItem>
        <Link to="order"> Order</Link>
      </NavItem>
      <NavItem>
        <Link to="cart"> My Cart </Link>
      </NavItem>
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
        <Link to="switch"> Switch User </Link>
      </NavItem>
      <NavItem>
        <Link to={`profile/${user}`}> Profile </Link>
      </NavItem>
      <NavItem onClick={auth.logout}>Logout</NavItem>
    </Menu>
  );
};

const DesktopForGuest = () => {
  return (
    <>
      <NavItemsGroup>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="order"> Order</Link>
        </NavItem>
        <NavItem>
          <Link to="map"> Map </Link>
        </NavItem>
        <NavItem>
          <Link to="faq"> FAQ </Link>
        </NavItem>
        <NavItem>
          <Link to="mission"> Our Mission </Link>
        </NavItem>
      </NavItemsGroup>
      <NavItemsGroup>
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
      </NavItemsGroup>
    </>
  );
};

const DesktopForLoggedIn = ({ children }) => {
  const auth = useAuth();
  const user = auth.user;
  return (
    <>
      <NavItemsGroup>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="map"> Map </Link>
        </NavItem>
        <NavItem>
          <Link to="order"> Order</Link>
        </NavItem>
        <NavItem>
          <Link to="faq"> FAQ </Link>
        </NavItem>
      </NavItemsGroup>

      <NavItemsGroup>
        <NavItem>
          <Link to="cart">
            <FaShoppingCart />
          </Link>
        </NavItem>

        <NavItem>
          <Link to={`profile/${user}`}>
            <FaUser />
          </Link>
        </NavItem>
        <HamburgerForLoggedIn className="grouped">
          {children}
        </HamburgerForLoggedIn>
      </NavItemsGroup>
    </>
  );
};

const Navbar = ({ children }) => {
  const auth = useAuth();
  const isMobile = useMediaQuery({ maxWidth: deviceSize.tablet });
  const user = auth.user;
  console.log("current user is: ", user);

  return (
    <Container>
      <Link to="/">
        <LogoContainer src={logo} alt="logo" />
      </Link>
      <NavItemsContainer>
        {!isMobile && !user && <DesktopForGuest>{children}</DesktopForGuest>}
        {!isMobile && user && (
          <DesktopForLoggedIn>{children}</DesktopForLoggedIn>
        )}
        {isMobile && !user && <HamburgerForGuest>{children}</HamburgerForGuest>}
        {isMobile && user && (
          <HamburgerForLoggedIn>{children}</HamburgerForLoggedIn>
        )}
      </NavItemsContainer>
    </Container>
  );
};

export default Navbar;
