import axios from "axios";
import { store } from "./store";
import { refreshToken } from "./features/auth/authSlice";

const api = axios.create({
  baseURL: "http://localhost:5004",
});

// Request interceptor to include access token in headers
api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const state = store.getState();
      const refresh_token = state.auth.user?.refresh_token;

      if (refresh_token) {
        const response = await store.dispatch(
          refreshToken({ token: refresh_token })
        );
        if (response.payload.accessToken) {
          api.defaults.headers.common.Authorization = `Bearer ${response.payload.accessToken}`;
          originalRequest.headers.Authorization = `Bearer ${response.payload.accessToken}`;
          return api(originalRequest);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
