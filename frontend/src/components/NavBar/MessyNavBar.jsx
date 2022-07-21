const Navbar = () => {
  const { isLoggedIn } = useContext(UserContext);
  const isMobile = useMediaQuery({ maxWidth: deviceSize.tablet });
  console.log(isMobile, isLoggedIn);
  return (
    <Container>
      <Link to="/">
        {" "}
        <LogoContainer src={logo} alt="logo" />{" "}
      </Link>
      {!isMobile && !isLoggedIn && (
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
      )}
      {!isMobile && isLoggedIn && (
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
          </Menu>
        </>
      )}
      {isMobile && !isLoggedIn && (
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
      )}

      {isMobile && isLoggedIn && (
        <Menu right styles={menuStyles}>
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
        </Menu>
      )}
    </Container>
  );
};
