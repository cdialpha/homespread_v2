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

const getAllOneUsersRecipies = async (key) => {
  const userId = key.queryKey[1];
  console.log(userId);
  const res = await API.get(`/recipies`, {
    headers: {
      "Content-type": "application/json",
    },
    params: {
      "userId": userId,
    },
  });
  console.log("response is... ", res);
  return res;
};

const getOneUserOneRecipie = async (name, recipieId) => {
  const res = await API.get(`/recipies//${name}/${recipieId}`);
  return res.data;
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

const postPhoto = async (s3url, attachment) => {
  const res = await axios.put(s3url, attachment, {
    headers: { "Content-type": "multipart/form-data" },
  });
};

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
