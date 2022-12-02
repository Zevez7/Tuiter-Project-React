import axios from "axios";
// const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = "https://engineer-software-dat-a4.herokuapp.com";
const BASE_URL = "http://localhost:5000";

const AUTH_API = `${BASE_URL}/api/auth`;
const api = axios.create({
  withCredentials: true,
});

//Testing
export const signup = (user) =>
  api.post(`${AUTH_API}/signup`, user).then((response) => response.data);

export const profile = () =>
  api.post(`${AUTH_API}/profile`).then((response) => response.data);
export const logout = (user) =>
  api.post(`${AUTH_API}/logout`, user).then((response) => response.data);

export const login = (credentials) =>
  api.post(`${AUTH_API}/login`, credentials).then((response) => response.data);
