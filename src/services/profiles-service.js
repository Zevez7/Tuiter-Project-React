/**
 * @file Create axios call function to node server for profile database
 */
import axios from "axios";
// change this to point to your server on Heroku

// const BASE_URL = "https://engineer-software-dat-a3.herokuapp.com";
const BASE_URL = "http://localhost:5000";
const PROFILE_URL = `${BASE_URL}/profiles`;

/**
 * Create a new tuit with a tuit
 * @param {tuit} tuit tuit to be created
 * @returns newly created tuit
 */
export const createProfile = (profile) =>
  axios.post(`${PROFILE_URL}`, profile).then((response) => response.data);

/**
 * Find the user profile by ID
 * @param {uid} uid user id
 * @returns user profile
 */
export const findProfileByUserId = (uid) =>
  axios.get(`${PROFILE_URL}/${uid}`).then((response) => response.data);
