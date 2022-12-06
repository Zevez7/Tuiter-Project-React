/**
 * @file Create axios call function to node server
 */
import axios from "axios";
// change this to point to your server on Heroku

// const BASE_URL = "https://engineer-software-dat-a3.herokuapp.com";
const BASE_URL = "http://localhost:5002";
const USER_API = `${BASE_URL}/users`;

/**
 * Create a new bookmark of a tuit
 * @param {tuit} tuit tuit to be created
 * @returns newly created tuit
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




/*

   app.post(
        "/users/:uid/bookmarks/:tid",
        BookmarkController.bookmarkController.bookmarkATuit
      );
      app.delete(
        "/users/:uid/bookmarks/:tid",
        BookmarkController.bookmarkController.unBookmarkATuit
      );
      app.get(
        "/users/:uid/bookmarks",
        BookmarkController.bookmarkController.findTuitsBookmarkedByAUser
      );
      app.get(
        "/tuits/:tid/bookmarks",
        BookmarkController.bookmarkController.findUsersThatBookmarkedATuit
      );
      app.delete(
        "/users/:uid/bookmarks",
        BookmarkController.bookmarkController.removeTuitsBookmarkedByAUser
      );
      app.delete(
        "/tuits/:tid/bookmarks",
        BookmarkController.bookmarkController.removeUsersWhoBookmarkedATuit
      );

*/