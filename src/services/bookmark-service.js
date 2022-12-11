/**
 * @file Create axios call function to node server
 */
import axios from "axios";

const BASE_URL = "http://localhost:5000";
const USER_API = `${BASE_URL}/users`;

/**
 * Create a new bookmark of a tuit
 * @returns newly created tuit
 * @param uid
 * @param tid
 */
export const createBookmark = (uid,tid) =>
  axios.post(`${USER_API}/${uid}/bookmarks/${tid}`).then((response) => response.data);
/**
 * Find bookmark by user id
 * @param  {string} uid user id
 */
export const findTuitsByUser = (uid) =>
  axios.get(`${USER_API}/${uid}/bookmarks`).then((response) => response.data);

  /**
   * Find bookmark by user id
   * @param  {string} uid user id
   * @param tid
   */
export const findBookmarkByUserAndTuit = (uid,tid) =>
axios.get(`${USER_API}/${uid}/bookmarks/${tid}`).then((response) => response.data);
/**
 * Delete bookmark by user id
 * @param  {string} uid user id
 * @param  {string} tid tuit id
 * return delete status
 */
export const deleteBookmark = (uid,tid) =>
  axios.delete(`${USER_API}/${uid}/bookmarks/${tid}`).then((response) => response.data);
