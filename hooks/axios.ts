import axios from "axios";

const backendURL = process.env.NEXT_PUBLIC_Backend_URL;
const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log(error.response?.status);
    if (
      (!originalRequest._retry && error.response?.status === 401) ||
      error.response?.status === 403
    ) {
      originalRequest._retry = true;
      try {
        await axios.get(backendURL + "/renew", {
          withCredentials: true,
        });
        return api(originalRequest);
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
export default api;
