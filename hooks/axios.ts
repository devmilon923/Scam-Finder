import axios from "axios";

const backendURL = process.env.NEXT_PUBLIC_Backend_URL;
const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("Error from interceptors", error);
  },
);
export default api;
