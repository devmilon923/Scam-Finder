import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const controller = new AbortController();
const backendURL = process.env.NEXT_PUBLIC_Backend_URL;
const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});
const AUTH_FLAG_KEY = "logged_in";

export function setAuthFlag() {
  try {
    localStorage.setItem(AUTH_FLAG_KEY, "1");
  } catch {}
}

export function clearAuthFlag() {
  try {
    localStorage.removeItem(AUTH_FLAG_KEY);
  } catch {}
}

export function hasAuthFlag(): boolean {
  try {
    return localStorage.getItem(AUTH_FLAG_KEY) === "1";
  } catch {
    return false;
  }
}
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log(error.response?.status);
    if (
      !originalRequest._retry &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      originalRequest._retry = true;
      const authState = hasAuthFlag();
      console.log(authState);
      if (!authState) return controller;

      try {
        const result = await axios.get(backendURL + "/renew", {
          withCredentials: true,
        });
        if (result.status === 200) {
          setAuthFlag();
          return api(originalRequest);
        }
      } catch (error) {
        console.log(error);
        clearAuthFlag();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export function useProfile() {
  const GET_PROFILE = `
  query {
    user {
      id
      name
      email
      role
      oauthid
      createdAt
    }
  }
`;
  const authState = hasAuthFlag();
  return useQuery({
    queryKey: ["profile"],
    enabled: typeof window !== undefined && authState,
    queryFn: async () => {
      const result = await api.post(backendURL + "/gq", {
        query: GET_PROFILE,
      });

      return result.data;
    },
  });
}

export default api;
