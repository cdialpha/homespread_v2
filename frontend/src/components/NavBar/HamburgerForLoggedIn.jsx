import React from 'react'
import {Link} from "react-router-dom" 
import {FaKey} from "react-icons/fa"
import menuStyles from "../../styles/menuStyles.js";
import {slide as Menu} from "react-burger-menu"
import styled from "styled-components";
import tw from "twin.macro";

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
`}`;

const NavItem = tw.li`
    pl-4
    mr-10
    mt-5
    mb-5
    items-center
    text-white
    cursor-pointer
    font-medium
    text-lg
    transition-colors
    transition-duration[300ms]
    hover:text-gray-200
`;


const HamburgerForLoggedIn = () => {
    return
    <Menu right styles={menuStyles}>

        <NavItem><Link to="map"> Map </Link> </NavItem>
        <NavItem><Link to="order"> Order</Link> </NavItem>
        <NavItem><Link to="cart"> My Cart </Link> </NavItem>
        
        <NavItem><Link to="mission"> Our Mission </Link> </NavItem>
        <NavItem><Link to="blog"> Blog </Link> </NavItem>
        <NavItem><Link to="chefs"> Our Chefs </Link> </NavItem>
        
        <NavItem><Link to="switch"> Switch User </Link> </NavItem>
        <NavItem><Link to="profile"> Profile </Link> </NavItem>
        <NavItem><Link to="logout"> Logout </Link> </NavItem>

    </Menu>
}; 
 
 export default HamburgerForLoggedIn