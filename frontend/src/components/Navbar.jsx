import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../images/boston_spread_logo_white.png"
import {Link} from "react-router-dom" 
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

const NavItems = tw.ul`
    list-none
    w-full
    h-auto
    lg:w-auto
    lg:h-full
    flex
    lg:ml-20
    justify-center
    items-center
    
`;
const NavItem = tw.li`
    pl-4
    mr-10
    flex
    items-center
    min-h-full
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
`}    
    height:
`
; 

const Navbar = () => { 
    // const isMobile = useMediaQuery({maxWidth: deviceSize.mobile });

    return (
        <Container> 
            <Link to="/"> 
            <LogoContainer src={logo} alt="logo"/>
            </Link>
            <NavItems>
              <NavItem>
                Our Mission         
              </NavItem>
              <NavItem>
                Our Chefs
              </NavItem>
              <NavItem>
                Become a Caterer
              </NavItem>
              <NavItem>
                Place an Order
              </NavItem>
            </NavItems>
            <NavItems>
              <NavItem><Link to="register"> Register </Link> </NavItem>
              <NavItem><Link to="login"> Login </Link> </NavItem>  
            </NavItems> 
        </Container>
    );
}

export default Navbar;