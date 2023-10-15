import axios from "axios";

const API_BASE_URL = `${process.env.REACT_APP_API_URL}`;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export default {
  login: (credentials) => apiClient.post("/auth/login", credentials),
  register: (userData) => apiClient.post("/auth/register", userData),
  getUsers: () => apiClient.get("/users"),
  getUser: (userId) => apiClient.get(`/users/${userId}`),
  updateUser: (userId, data) => apiClient.patch(`/users/${userId}`, data),
  deleteUser: (userId) => apiClient.delete(`/users/${userId}`),
};
