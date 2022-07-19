import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../images/boston_spread_logo_white.png"
import {Link} from "react-router-dom" 
import {slide as Menu} from "react-burger-menu"
import menuStyles from "../styles/menuStyles.js";
import {useMediaQuery} from "react-responsive"
import {deviceSize} from "./responsive"
import {FaKey} from "react-icons/fa"

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
    background-color: rgba(0,0,0,1);
    z-index: 1;
    width:100vw;
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

const LogoContainer = styled.img`
${tw`
    pl-10
    2xl:mt-10
    2xl:mb-10
    lg:mt-5
    lg:mb-5
    md:mt-2
    md:mb-2
`}`; 

const coreNavItems = ( 
    <NavItems/> 
)

const fullNavItems = (
<NavItems>
  <NavItem><Link to="mission">Our Mission </Link> </NavItem>
  <NavItem><Link to="brick">Brick & Mortars </Link> </NavItem>
  <NavItem><Link to="chefs">Our Chefs</Link> </NavItem>
  <NavItem><Link to="register"> Register </Link> </NavItem>
  <NavItem><FaKey/><Link to="login"> Login </Link> </NavItem>    
</NavItems>); 

const Navbar = () => { 
    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile});
    const isTablet = useMediaQuery({maxWidth: deviceSize.tablet});
    return (
        <Container> 
            <Link to="/"> <LogoContainer src={logo} alt="logo"/> </Link>
            {isMobile && 
                <Menu right styles={menuStyles}>{fullNavItems} </Menu> }
            {/* {isTablet && coreNavItems} */}
            {!isMobile && fullNavItems} 
        </Container> ) 
}

export default Navbar;