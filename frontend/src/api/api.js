import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3002" });

API.interceptors.request.use((req) => {
  let token = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")).token
    : null;
  req.headers.Authorization = token;
  return req;
});

const login = async (formData) => {
  const config = {
    headers: { "Content-type": "application/json" },
  };
  const res = await API.post("/login", formData, config);
  return res.data;
};

const register = async (formData) => {
  const config = {
    headers: { "Content-type": "application/json" },
  };
  const res = await API.post("/register", formData, config);
  return res.data;
};

const changeRole = async (username) => {
  console.log(username);
  const config = {
    headers: { "Content-type": "application/json" },
  };
  const payload = JSON.stringify({ "username": username });
  const { data } = await API.patch("/become", payload, config);
  return data;
};

const updateProfile = async (userId, profileUpdates) => {
  const config = {
    headers: { "Content-type": "application/json" },
  };
  const res = await API.patch(`users/${userId}`, profileUpdates, config);
  return res.data;
};

const getAllRecipies = async (pageNumber) => {
  const res = await API.get(`/recipies?limit=25&page=${pageNumber}`);
  return res.data;
};

const getChefs = async () => {
  const res = await API.get("/users");
  return res.data;
};

const getAllOneUsersRecipies = async (chefId) => {
  console.log("fetching recipies...");
  const res = await API.get(`/recipies/:${chefId}`);
  console.log("response", res);
  return res.data.getRecipies;
};

const getOneUserOneRecipie = async (name, recipieId) => {
  const res = await API.get(`/recipies/${name}/${recipieId}`);
  return res.data.getRecipies;
};

const addRecipie = async (chefId, newRecipie) => {
  const config = {
    headers: { "Content-type": "application/json" },
  };
  console.log(newRecipie);
  const res = await API.post(`/recipies/:${chefId}`, newRecipie, config);
  return res.data;
};

const updateRecipie = async (recipieId, updatedRecipie) => {
  const config = {
    headers: { "Content-type": "application/json" },
  };
  const res = await API.patch(`/recipies/${recipieId}`, updatedRecipie, config);
  console.log(res);
  return res.data;
};

const deleteRecipie = async (recipieId) => {
  const config = {
    headers: { "Content-type": "application/json" },
  };
  const res = await API.delete(`recipies/${recipieId}`, config);
  return res.data;
};

const getS3Url = async () => {
  const res = await API.get("/s3url");
  return res.data;
};

const postPhoto = async (S3SignedUrl, image) => {
  console.log("signed url", S3SignedUrl, "image:", image?.file.type);
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
  getAllRecipies,
  getChefs,
  getAllOneUsersRecipies,
  getOneUserOneRecipie,
  addRecipie,
  updateRecipie,
  deleteRecipie,
  getS3Url,
  postPhoto,
  changeRole,
  updateProfile,
};

export default api;
