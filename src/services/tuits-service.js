/**
 * @file Create axios call function to node server
 */
import axios from "axios";
// change this to point to your server on Heroku

// const BASE_URL = "https://engineer-software-dat-a3.herokuapp.com";
const BASE_URL = "http://localhost:5000";
const TUITS_API = `${BASE_URL}/tuits`;

/**
 * Create a new tuit with a tuit
 * @param {tuit} tuit tuit to be created
 * @returns newly created tuit
 */
export const createTuit = (tuit) =>
  axios.post(`${TUITS_API}`, tuit).then((response) => response.data);
/**
 * Create tuit with a user id in the param of the url
 * @param  {string} uid user id
 * @param  {tuit} tuit tuit to be created
 * return newly created tuit
 */
export const createTuitByUser = (uid, tuit) =>
  axios.post(`${TUITS_API}/${uid}`, tuit).then((response) => response.data);
/**
 * Find all tuits
 * return tuit in array
 */
export const findAllTuits = () =>
  axios.get(TUITS_API).then((response) => response.data);
/**
 * Find tuits by user id
 * @param  {string} uid user id
 */
export const findTuitsByUser = (uid) =>
  axios.get(`${TUITS_API}/users/${uid}`).then((response) => response.data);
/**
 * Find tuit by tuit id
 * @param  {string} tid tuit id
 * return tuit found
 */
export const findTuitById = (tid) =>
  axios.get(`${TUITS_API}/${tid}`).then((response) => response.data);
/**
 * Delete tuit by user id
 * @param  {string} uid user id
 * return delete status
 */
export const deleteTuit = (uid) =>
  axios.delete(`${TUITS_API}/${uid}`).then((response) => response.data);
/**
 * Update tuit by tuit id
 * @param  {string} tid tuit id
 * return updated tuit
 */
export const updateTuit = (tid) =>
  axios.delete(`${TUITS_API}/${tid}`).then((response) => response.data);
