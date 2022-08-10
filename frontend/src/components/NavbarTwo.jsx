import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../images/boston_spread_logo_white.png";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "./responsive";
import "../styles/nav.css";
import { CSSTransition } from "react-transition-group";
import { AiOutlineForm, AiFillShop } from "react-icons/ai";
import { GiChefToque } from "react-icons/gi";
import { TbMessages } from "react-icons/tb";
import { useAuth } from "../utils/auth";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import {
  FaKey,
  FaShoppingCart,
  FaUser,
  FaHome,
  FaConciergeBell,
  FaMap,
  FaQuestion,
  FaFontAwesome,
  FaAngleDown,
  FaAngleRight,
  FaAngleLeft,
  FaCog,
  FaBookOpen,
  FaGlobe,
  FaRss,
  FaCreditCard,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
};

const SigninButton = () => {
  return (
    <li>
      <a className="signin" href="#">
        Sign in
      </a>
    </li>
  );
};

const NavItem = (props) => {
  const handleClick = () => {
    if (props.activeDropdown === null) props.setActiveDropdown(props.controlls);
    if (props.activeDropdown === props.controlls) props.setActiveDropdown(null);
  };

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={handleClick}>
        {props.icon}
      </a>
      {props.children}
    </li>
  );
};

function DropdownItem(props) {
  return (
    <a href="#" className="menu-item">
      <span className="icon-button">{props.icon}</span>
      {props.children}
    </a>
  );
}

const MainDropdown = React.forwardRef((props, ref) => {
  const auth = useAuth();
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const user = auth.user?.user.username || null;

  // const [mddIsOpen, setMddIsOpen] = useState(false);

  return (
    <div className="dropdown" ref={ref}>
      <div className="menu">
        <DropdownItem icon={<FaHome />}>Home</DropdownItem>
        <DropdownItem icon={<FaBookOpen />}>Our Story</DropdownItem>
        <DropdownItem icon={<FaGlobe />}>Our Mission</DropdownItem>
        <DropdownItem icon={<GiChefToque />}>Our Chefs</DropdownItem>
        <DropdownItem icon={<FaQuestion />}>FAQ</DropdownItem>
        <DropdownItem icon={<FaRss />}>Blog</DropdownItem>
        {user ? null : <DropdownItem icon={<FaKey />}> Sign In </DropdownItem>}
      </div>
    </div>
  );
});

const ProfileDropdown = React.forwardRef((props, ref) => {
  const auth = useAuth();
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const user = auth.user?.user.username || null;
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div className="dropdown" ref={ref}>
      <div className="menu">
        <DropdownItem icon={<TbMessages />}>Messages</DropdownItem>
        <DropdownItem icon={<FaCreditCard />}>Purchases & Reviews</DropdownItem>
        <DropdownItem icon={<AiFillShop />}>Sell on Spread</DropdownItem>
        <DropdownItem icon={<FaCog />}>Account Settings</DropdownItem>
        {user ? (
          <DropdownItem icon={<FaSignOutAlt />}> Sign Out </DropdownItem>
        ) : null}
      </div>
    </div>
  );
});

const NavbarTwo = () => {
  const auth = useAuth();
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const user = auth.user?.user.username || null;

  const [activeDropdown, setActiveDropdown] = useState(null);

  const profileDropdownRef = useRef(null);
  const mainDropdownRef = useRef(null);

  const closeOpenMenus = (e) => {
    if (
      (profileDropdownRef.current || mainDropdownRef.current) &&
      activeDropdown &&
      (!profileDropdownRef.current?.contains(e.target) ||
        !mainDropdownRef.current?.contains(e.target))
    ) {
      setActiveDropdown(null);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);

  console.log(activeDropdown);

  return (
    <div className="container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>

      {isMobile ? (
        <Navbar>
          <NavItem
            className="main-burger"
            icon={<FaAngleDown />}
            controlls="main"
            setActiveDropdown={setActiveDropdown}
            activeDropdown={activeDropdown}
          >
            {activeDropdown === "main" ? (
              <MainDropdown ref={mainDropdownRef} />
            ) : null}
          </NavItem>
        </Navbar>
      ) : (
        <Navbar>
          {user ? (
            <NavItem
              icon={<FaUser />}
              setActiveDropdown={setActiveDropdown}
              controlls="profile"
              activeDropdown={activeDropdown}
            >
              {activeDropdown === "profile" ? (
                <ProfileDropdown ref={profileDropdownRef} />
              ) : null}
            </NavItem>
          ) : (
            <SigninButton />
          )}
          <NavItem
            icon={<FaAngleDown />}
            setActiveDropdown={setActiveDropdown}
            controlls="main"
            activeDropdown={activeDropdown}
          >
            {activeDropdown === "main" ? (
              <MainDropdown ref={mainDropdownRef} />
            ) : null}
          </NavItem>
        </Navbar>
      )}
    </div>
  );
};

export default NavbarTwo;

// onClick={(e) => closeDropDown(e)}>
// const [open, setOpen] = useState(false);

// const closeDropDown = (e) => {
// setOpen(!open);
// };

{
  /* <Container>
  
  {isMobile ? null : (
    <NavItemsContainer>
      <Tippy content="home">
        <NavItem>
          <Link to="/">
            <FaHome />
          </Link>
        </NavItem>
      </Tippy>
      <Tippy content="order">
        <NavItem>
          <Link to="order">
            <FaConciergeBell />
          </Link>
        </NavItem>
      </Tippy>
      <Tippy content="map">
        <NavItem>
          <Link to="map">
            <FaMap />
          </Link>
        </NavItem>
      </Tippy>
      <Tippy content="cart">
        <NavItem>
          <Link to="cart">
            <FaShoppingCart />
          </Link>
        </NavItem>
      </Tippy>
      {user ? (
        <Tippy content="profile">
          <NavItem>
            <Link to={`profile/${user}`}>
              <FaUser />
            </Link>
          </NavItem>
        </Tippy>
      ) : (
        <>
          <Tippy content="register">
            <NavItem>
              <Link to="register">
                <AiOutlineForm />
              </Link>
            </NavItem>
          </Tippy>
          <Tippy content="login">
            <NavItem>
              <Link to="login">
                <FaKey />
              </Link>
            </NavItem>
          </Tippy>
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
</Container>; */
}
