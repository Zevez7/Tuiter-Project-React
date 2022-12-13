/**
 * @file Create axios call function to node server
 */
import axios from "axios";

const BASE_URL = "http://localhost:5000";
const USER_API = `${BASE_URL}/users`;
const TUIT_API = `${BASE_URL}/tuits`;

/**
 * Create a new retuit of a tuit
 * @returns newly created tuit
 * @param uid
 * @param tid
 */
export const createRetuit = (uid,tid) =>
  axios.post(`${USER_API}/${uid}/retuits/${tid}`).then((response) => response.data);
/**
 * Find users that retuit the tuit by id
 * @param tid
 */
export const findUsersThatRetuitTheTuitByTuidId = (tid) =>
  axios.get(`${TUIT_API}/${tid}/retuits`).then((response) => response.data);
