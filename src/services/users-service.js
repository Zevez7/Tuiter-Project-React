/**
 * @file user services test
 */
import axios from "axios";
// change this to point to your server on Heroku

// const BASE_URL = "https://engineer-software-dat-a3.herokuapp.com";
const BASE_URL = "http://localhost:5000";
const USERS_API = `${BASE_URL}/users`;

/**
 * Create a new user
 * @param {user} user user to be created
 * @returns newly created user
 */
export const createUser = (user) =>
  axios.post(`${USERS_API}`, user).then((response) => response.data);

/**
 * Find all users in the database
 * @returns all user as an array
 */
export const findAllUsers = () =>
  axios.get(`${USERS_API}`).then((response) => response.data);

/**
 * Find user by Id
 * @param {string} uid user id
 * @returns user found
 */
export const findUserById = (uid) =>
  axios.get(`${USERS_API}/${uid}`).then((response) => response.data);

/**
 * Delete user by id
 * @param {string} uid user id
 * @returns delete status
 */
export const deleteUser = (uid) =>
  axios.delete(`${USERS_API}/${uid}`).then((response) => response.data);

/**
 * Delete user by username
 * @param  {string} username the name of the user
 * @return delete status
 */
export const deleteUsersByUsername = (username) =>
  axios
    .delete(`${USERS_API}/username/${username}/delete`)
    .then((response) => response.data);
