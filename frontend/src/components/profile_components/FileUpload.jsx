import React, { Component, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ImageUploading from "react-images-uploading";
import { FaWindowClose } from "react-icons/fa";
import { BsCameraFill as Camera } from "react-icons/bs";
import { decode as base64_decode, encode as base64_encode } from "base-64";

const Input = styled.input`
  ${tw`ml-10
  mb-2`};
`;

// const UploadImageWrapper ?

const AddPhoto = styled(Camera)`
  ${tw`
  text-gray-400
  position[absolute]
  height[50px]
  width[50px]  
  border-radius[10px]
  padding[5px]
  border-2
  border-gray-300
  bg-white
  cursor-pointer
`}
  &:hover {
    transform: scale(0.9);
  }
`;
const ImagesContainer = styled.div`
  ${tw`
  flex
  mb-5
  align-middle
  `}
`;

const FormComponent = styled.div`
  ${tw`
  flex
  height[120px]
  align-middle
  ml-10
  `}
`;

const Image = styled.div`
  ${tw`
flex
  align-self[center]
  width[100px]
height[100px]
`};
`;

const Button = styled.button`
  ${tw`
  height[40px]
ml-5
  `};
`;

const FileUpload = ({ setImageValues }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 4;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    setImageValues(imageList);
  };
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
      acceptType={["jpg", "jpeg", "png", "svg"]}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <FormComponent>
          <ImagesContainer>
            {imageList.map((image, index) => (
              <Image key={index}>
                <FaWindowClose
                  type="button"
                  onClick={() => onImageRemove(index)}
                  style={{
                    "position": "relative",
                    "top": "10px",
                    "left": "70px",
                  }}
                />
                <img src={image.data_url} alt="" width="80" />
              </Image>
            ))}
          </ImagesContainer>
          {imageList.length < 4 ? (
            <Button onClick={onImageUpload}>
              <AddPhoto />
            </Button>
          ) : null}
        </FormComponent>
      )}
    </ImageUploading>
  );
};

export default FileUpload;

// From Ben Awad 2017
// formatFilename = filename => {
//   const date = moment().format("YYYYMMDD");
//   const randomString = Math.random()
//     .toString(36)
//     .substring(2, 7);
//   const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
//   const newFilename = `images/${date}-${randomString}-${cleanFileName}`;
//   return newFilename.substring(0, 60);
// };
