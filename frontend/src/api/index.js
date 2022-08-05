import axios from "axios";
import { useAuth } from "../utils/auth";

const API = axios.create({ baseURL: "http://localhost:3002" });

API.interceptors.request.use((req) => {
  let token = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")).token
    : null;
  req.headers.Authorization = token;
  return req;
});

const postNoAuthConfig = {
  headers: {
    "Content-type": "application/json",
  },
};
const postAuthConfig = {
  headers: {
    "Content-type": "application/json",
  },
};
const login = async (formData) => {
  const res = await API.post("/login", formData, postNoAuthConfig);
  console.log(res);
  return res.data;
};
const register = async (formData) => {
  const res = await API.post("/register", formData, postNoAuthConfig);
  return res.data;
};

const getAllOneUsersRecipies = async (userId) => {
  const res = await API.get(`/recipies/?userId=${userId}`);
  return res.data.getRecipies;
};

const getOneUserOneRecipie = async (name, recipieId) => {
  const res = await API.get(`/recipies//${name}/${recipieId}`);
  return res.data.getRecipies;
};

const addRecipie = async (newRecipie) => {
  console.log(newRecipie);
  const res = await API.post(`/recipies`, newRecipie, postAuthConfig);
  return res.data;
};

const updateRecipie = async (recipieId, updatedRecipie) => {
  const res = await API.patch(
    `/recipies/${recipieId}`,
    updatedRecipie,
    postAuthConfig
  );
  return res.data;
};

const deleteRecipie = async (recipieId) => {
  const res = await API.delete(`recipies/${recipieId}`, postAuthConfig);
  return res.data;
};

const getS3Url = async () => {
  const res = await API.get("/s3url");
  return res.data;
};

const postPhoto = async (S3SignedUrl, image) => {
  console.log(S3SignedUrl, image.file.type);
  const config = {
    headers: { "Content-type": image.file.type },
  };
  const res = await axios.put(S3SignedUrl, image.file, config);
  return res.data;
};

// Theoretically could add a upload progress bar which would be cool.
// From Academind 2018 https://www.youtube.com/watch?v=XeiOnkEI7XI&t=235s
// {
//   onUploadProgress: progressEvent => {
//     console.log(progressEvent.loaded / progressEvent.total)
//   }

// From Ben Awad 2017
// uploadToS3 = async (file, signedRequest) => {
//   const options = {
//     headers: {
//       "Content-Type": file.type
//     }
//   };
//   await axios.put(signedRequest, file, options);
// };

const api = {
  login,
  register,
  getAllOneUsersRecipies,
  getOneUserOneRecipie,
  addRecipie,
  updateRecipie,
  deleteRecipie,
  getS3Url,
  postPhoto,
};

export default api;
