/**
 * @file Create axios call function to node server
 */
import axios from "axios";
const BASE_URL = "http://localhost:5002";

const AUTH_API = `${BASE_URL}/api/auth`;
const api = axios.create({
  withCredentials: true,
});

/**
 * Sign up user by creating a user with the given username and password
 * @param {string} user user object with username and password
 * @returns user object that was created
 */
export const signup = (user) =>
  api.post(`${AUTH_API}/signup`, user).then((response) => response.data);

/**
 * Find the user's data and store it as a session
 * @returns get the profile
 */
export const profile = () =>
  api.post(`${AUTH_API}/profile`).then((response) => response.data);

/**
 * Remove user profile from session to log use out
 * @param {string} user user objects
 * @returns empty user objects
 */
export const logout = (user) =>
  api.post(`${AUTH_API}/logout`, user).then((response) => response.data);

/**
 * Login user with credentials and storing a session profile.
 * @param {object} credentials object with username and password
 * @returns user object that was found
 */
export const login = (credentials) =>
  api.post(`${AUTH_API}/login`, credentials).then((response) => response.data);
