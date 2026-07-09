import axios from "axios";

const API_URL = "http://localhost:8081/packages";

export const getPackages = () => axios.get(API_URL);

export const getPackageById = (id) => axios.get(`${API_URL}/${id}`);

export const createPackage = (pkg) => axios.post(API_URL, pkg);

export const updatePackage = (id, pkg) => axios.put(`${API_URL}/${id}`, pkg);

export const deletePackage = (id) => axios.delete(`${API_URL}/${id}`);
