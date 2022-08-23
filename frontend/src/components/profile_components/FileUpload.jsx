import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ImageUploading from "react-images-uploading";
import { FaWindowClose } from "react-icons/fa";
import { BsCameraFill as Camera } from "react-icons/bs";

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
const Thumbnail = styled.img`
  ${tw`
width[80px]
height[100px]
`}
`;

const FileUpload = ({ uploaderType, setImageValues }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 4;
  const onChange = (imageList) => {
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
                {uploaderType !== "profile" ? (
                  <Thumbnail src={image.data_url} alt="" />
                ) : null}
              </Image>
            ))}
          </ImagesContainer>
          {imageList.length < 4 ? (
            <Button type="button" onClick={onImageUpload}>
              <AddPhoto />
            </Button>
          ) : null}
        </FormComponent>
      )}
    </ImageUploading>
  );
};

export default FileUpload;

// When the mode is profile pic uploader, I want to change the max image to 1 and remove the photo button when 1 image is uploaded

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

// Would be best to handle image processing before file upload
// function process() {
//   const file = document.querySelector("#upload").files[0];

//   if (!file) return;

//   const reader = new FileReader();

//   reader.readAsDataURL(file);

//   reader.onload = function (event) {
//     const imgElement = document.createElement("img");
//     imgElement.src = event.target.result;
//     document.querySelector("#input").src = event.target.result;

//     imgElement.onload = function (e) {
//       const canvas = document.createElement("canvas");
//       const MAX_WIDTH = 400;

//       const scaleSize = MAX_WIDTH / e.target.width;
//       canvas.width = MAX_WIDTH;
//       canvas.height = e.target.height * scaleSize;

//       const ctx = canvas.getContext("2d");

//       ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

//       const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg");

//       // you can send srcEncoded to the server
//       document.querySelector("#output").src = srcEncoded;
//     };
//   };
// }
