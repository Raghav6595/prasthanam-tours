import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8081"
});

// Automatically attach JWT if available
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("adminToken");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default api;