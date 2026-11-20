/* eslint-disable no-unused-vars */
import axios from 'axios';
const apiURL = import.meta.env.VITE_API_URL || "/api/";
const api = axios.create({
    baseURL: "http://localhost:8080/api/v1"
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;