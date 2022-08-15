import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useAuth } from "../../utils/auth";
import api from "../../api/api";

const Container = styled.div`
  ${tw`
flex
flex-col
justify-center
pb-20
`}
`;

const ButtonCall = styled.div`
  ${tw`
align-self[center]
`}
`;
const Button = styled.button`
  ${tw`
bg-gray-300
width[200px]
align-self[center]
hover:bg-gray-400
mt-5
`}
`;

const ChangeRole = () => {
  const auth = useAuth();
  let userContext = auth.user;
  const username = userContext.user.username;
  let role = userContext.user.role;
  const [displayRole, setDisplayRole] = useState(role);
  //   console.log(
  //     "Before",
  //     userContext,
  //     displayRole,
  //     localStorage.getItem("userInfo")
  //   );

  const changeRole = async (username) => {
    const data = await api.changeRole(username);

    // set new role in Auth context
    userContext.user = data.user;
    auth.setUser(userContext);
    setDisplayRole(data.user.role);
    // Update info in local Storage, so that role persists after login
    let userFromLocalStorage = localStorage.getItem("userInfo");
    userFromLocalStorage = JSON.parse(userFromLocalStorage);
    userFromLocalStorage.user = data.user;
    userFromLocalStorage = JSON.stringify(userFromLocalStorage);
    localStorage.setItem("userInfo", userFromLocalStorage);

    // console.log("After", auth.user, displayRole, userFromLocalStorage);
  };

  return (
    <Container>
      {role === "chef" ? (
        <>
          <ButtonCall>
            {`You currently have ${displayRole} permissions`}
          </ButtonCall>
          <ButtonCall> Are you sure you want to revert?</ButtonCall>
          <Button onClick={changeRole}> Become a basic user </Button>
        </>
      ) : (
        <>
          <ButtonCall>
            {`You currently have ${displayRole} permissions`}
          </ButtonCall>
          <Button onClick={changeRole}> Become a Chef! </Button>
        </>
      )}
    </Container>
  );
};

export default ChangeRole;
