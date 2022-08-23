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
import { useSelector } from "react-redux";
import { cartTotalSelector } from "../features/cart/cartSelector";
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

const Bubble = styled.div`
  position: absolute;
  top: -40%;
  right: -40%;
  padding: 0 4px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  background-color: black;
  border-radius: 2px;
`;
// animation: ${(p) => (p.change ? styledAnimation : null)} 1s;

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
      <Link to="login">
        <div className="signin" href="#">
          Sign in
        </div>
      </Link>
    </li>
  );
};

const NavItem = (props) => {
  const handleClick = () => {
    if (props.activeDropdown === null) props.setActiveDropdown(props.controls);
    if (props.activeDropdown === props.controls) props.setActiveDropdown(null);
  };
  let expandWidth;
  let shrinkSecondIcon;
  if (props.secondicon) {
    expandWidth = "expand-width";
    shrinkSecondIcon = "shrink-second-icon";
  }

  return (
    <li className="nav-item">
      <a
        href="#"
        className={`icon-button ${expandWidth}`}
        onClick={handleClick}
      >
        {props.icon}
        <span className={shrinkSecondIcon}>{props.secondicon} </span>
      </a>
      {props.children}
    </li>
  );
};

const MainDropdown = React.forwardRef((props, ref) => {
  const auth = useAuth();
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const user = auth.user?.user.username || null;

  return (
    <div className="dropdown" ref={ref}>
      <div className="menu">
        <Link to="/">
          <div className="menu-item">
            <span className="icon-button">
              <FaHome />
            </span>
            Home
          </div>
        </Link>

        <Link to="chefs">
          <div className="menu-item">
            <span className="icon-button">
              <GiChefToque />
            </span>
            Our Chefs
          </div>
        </Link>

        {/* <Link to="story">
          <div className="menu-item">
            <span className="icon-button">
              <FaBookOpen />
            </span>
            OurStory
          </div>
        </Link> */}

        <Link to="mission">
          <div className="menu-item">
            <span className="icon-button">
              <FaGlobe />
            </span>
            Our Mission
          </div>
        </Link>

        <Link to="faq">
          <div className="menu-item">
            <span className="icon-button">
              <FaQuestion />
            </span>
            FAQ
          </div>
        </Link>
        <Link to="blog">
          <div className="menu-item">
            <span className="icon-button">
              <FaRss />
            </span>
            Blog
          </div>
        </Link>

        {user ? null : (
          <Link to="login">
            <div className="menu-item">
              <span className="icon-button">
                <FaKey />
              </span>
              Sign in
            </div>
          </Link>
        )}
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
        <Link to={`profile/${user}`}>
          <div className="menu-item">
            <span className="icon-button">
              <FaUser />
            </span>
            <div className="nav-item-with-subtext">
              <div className="username"> {user} </div>
              <div className="subtext"> View Your Profile</div>
            </div>
          </div>
        </Link>
        <Link to="messages">
          <div className="menu-item">
            <span className="icon-button">
              <TbMessages />
            </span>
            Messages
          </div>
        </Link>
        <Link to="purchases">
          <div className="menu-item">
            <span className="icon-button">
              <FaCreditCard />
            </span>
            Purchases & Reviews
          </div>
        </Link>
        <Link to="become">
          <div className="menu-item">
            <span className="icon-button">
              <AiFillShop />
            </span>
            Sell on Spread
          </div>
        </Link>
        <Link to={`/profile/${user}/settings`}>
          <div className="menu-item">
            <span className="icon-button">
              <FaCog />
            </span>
            Settings
          </div>
        </Link>
        {user ? (
          <div className="menu-item" onClick={handleLogout}>
            <span className="icon-button">
              <FaSignOutAlt />
            </span>
            Sign Out
          </div>
        ) : null}
      </div>
    </div>
  );
});

const NavbarTwo = () => {
  const auth = useAuth();
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const user = auth.user?.user?.username || null;

  const [activeDropdown, setActiveDropdown] = useState(null);

  const profileDropdownRef = useRef(null);
  const mainDropdownRef = useRef(null);

  const closeOpenMenus = (e) => {
    if (
      activeDropdown &&
      !(
        profileDropdownRef.current?.contains(e.target) ||
        mainDropdownRef.current?.contains(e.target)
      )
    ) {
      setActiveDropdown(null);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);

  const total = useSelector(cartTotalSelector);
  // const styledAnimation = keyframes`${animation}`;
  // // import animation from "react-animations/lib/swing";
  // const [change, setChange] = useState(false);

  // useEffect(() => {
  //   if (total !== 0) {
  //     setChange(true);

  //     setTimeout(() => {
  //       setChange(false);
  //     }, 1000);
  //   }
  // }, [total]);

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
            controls="main"
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
              secondicon={<FaAngleDown />}
              setActiveDropdown={setActiveDropdown}
              controls="profile"
              activeDropdown={activeDropdown}
            >
              {activeDropdown === "profile" ? (
                <ProfileDropdown ref={profileDropdownRef} />
              ) : null}
            </NavItem>
          ) : (
            <SigninButton />
          )}
          <div className="nav-item">
            <Link to="cart">
              <div className="icon-button">
                <FaShoppingCart />
                <Bubble>{total}</Bubble>
              </div>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="order">
              <div className="icon-button">
                <FaConciergeBell />
              </div>
            </Link>
          </div>
          <NavItem
            icon={<FaAngleDown />}
            setActiveDropdown={setActiveDropdown}
            controls="main"
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
