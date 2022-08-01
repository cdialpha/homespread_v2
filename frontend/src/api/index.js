import axios from "axios";
import { useAuth } from "../utils/auth";

const API = axios.create({ baseURL: "http://localhost:3002" });

API.interceptors.request.use((req) => {
  //   if (localStorage.getItem("userInfo")) {
  //     req.headers.Authorization = JSON.parse(
  //       localStorage.getItem("userInfo")
  //     ).token;
  req.headers.Authorization =
    "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmUxZTNlZDhkMTc1YmJjNTNlNGYxYjMiLCJpYXQiOjE2NTkyODYxNTQ1MjQsImV4cCI6MTY1OTI4NjI0MDkyNH0.tFaf2jWjbHtv9rIHC_a3DbLp_Z2I6SWbbYNa19KIz2lH-jYomfJp2APG6fA7l6MUF9Ncp1UgKRXcY4_XCxyxyO4ZQV8_evTq84AuwC8_KRFZPKnFPgNf91JQdChO-L67RjAdhGYFyBFilZS5YOynRtienm6kmn95BCgYVUF1_hoHtIBB7sIt_QdJsrvDNPTL9udnmYF_Wj8zhDAsmCReZ-rq2bCWxonqfnOFxtLA8GeZSjv7UW0rv9T4tcNtUMYs3ZFGEJWfQQnqCa6ofPaaqkUrmbvYOJGljUJj3mYn-QdH4D3XSY_CCUDbMjbRKF3Mth6PLAxjz2cH9MjGWnA8fHDwTWRaP4cj8z7rGObZpIuuoOhd_3WwxqzrlGfZvDm0X3agbzZUUL-b186eRzxgnirVcjcZ6Zee9wZz8YD1bOwVj4DDMjBiHtCR3ff1yCPuXfmcj7LDzfDR7GLD0Lg8rbyp68fTcTuOkGjXsTvLkFv1Ro26txDRBjhKaygTKalF4jANS8MQeZ7hjcZXDJ6RKdD0DUVRw6Q3ajVw1IEtuLLTVv9x9AdwVDtB4Rgpa4UCVdAximZnt-zLMIvwDXpzXRRrOj_Qg-npzefQBZdYS0iRKAoZ9-h_f9jGAdPqcyN3YoWW_uucH-991lGtkSfF27wq9OzcWDMvO8KQYik5VTM";

  return req;
});

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

const login = async (formData) => {
  const res = await API.post("/login", formData, config);
  return res.data;
};

const register = async (formData) => {
  const res = await API.post("/register", formData, config);
  return res.data;
};

const getAllUserRecipies = async (name) => {
  const res = await API.get(`/${name}/recipies`);
  return res.data;
};

const getOneUserRecipie = async (name, recipieId) => {
  const res = await API.get(`/recipies//${name}/${recipieId}`);
  return res.data;
};

const addRecipie = async (newRecipie) => {
  const res = await API.post(`/recipies`, newRecipie, config);
  return res.data;
};

const updateRecipie = async (recipieId, updatedRecipie) => {
  const res = await API.patch(`/recipies/${recipieId}`, updatedRecipie, config);
  return res.data;
};

const deleteRecipie = async (recipieId) => {
  const res = await API.delete(`recipies/${recipieId}`, config);
  return res.data;
};

const getS3Url = async () => {
  const res = await API.get("http://localhost:3002/s3url");
  return res.data;
};

const api = {
  login,
  register,
  getAllUserRecipies,
  getOneUserRecipie,
  addRecipie,
  updateRecipie,
  deleteRecipie,
  getS3Url,
};

export default api;
