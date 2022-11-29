/**
 * @file Create axios call function to node server for profile database
 */
import axios from "axios";
import { getUserProfile } from "./features/profileSlice";
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
 * @param {string} uid user id
 * @returns user profile
 */
export const findProfileByUserId = (uid) => async (dispatch) => {
  const response = await axios.get(`${PROFILE_URL}/${uid}`);
  dispatch(getUserProfile(response.data));
};
/**
 * Update user profile by user id
 * @param {string} uid user id
 * @param {profile} profile profile to update
 * @returns updated user profile
 */
export const updateProfileByUserId = (uid, profile) =>
  axios.put(`${PROFILE_URL}/${uid}`, profile).then((response) => response.data);
