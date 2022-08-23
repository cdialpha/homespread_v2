import React from "react";
import FileUpload from "./FileUpload";
import ComingSoon from "../ComingSoon";
import styled from "styled-components";
import tw from "twin.macro";

const View = styled.div`
  ${tw` 
height[1000px]
text-4xl
mt-10
`}
`;

const AddPhotosToProfile = () => {
  return (
    <View>
      Add photos to your profile!
      <FileUpload />
      <ComingSoon />
    </View>
  );
};

export default AddPhotosToProfile;
