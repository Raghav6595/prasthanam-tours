import api from "./api";

const API_URL = "/packages";

export const getPackages = () => api.get(API_URL);

export const getPackageById = (id) => api.get(`${API_URL}/${id}`);

export const createPackage = (pkg) => api.post(API_URL, pkg);

export const updatePackage = (id, pkg) => api.put(`${API_URL}/${id}`, pkg);

export const deletePackage = (id) => api.delete(`${API_URL}/${id}`);