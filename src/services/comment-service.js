/**
 * @file Create axios call function to node server
 */
import axios from "axios";

const BASE_URL = "http://localhost:5002";
const USER_API = `${BASE_URL}/users`;
const COMMENT_API = `${BASE_URL}/comments`;
const TUIT_API = `${BASE_URL}/tuits`;

/**
 * Create a new like of a tuit
 * @returns newly created tuit
 * @param comment
 */
export const createComment = (comment) =>{
    console.log('comment in api: '+JSON.stringify(comment))
    return   axios.post(`${COMMENT_API}`, comment).then((response) => response.data);
}

/**
 * Find users that like the tuit by id
 * @param tid
 */
export const findUsersThatCommentTheTuitByTuidId = (tid) =>
  axios.get(`${TUIT_API}/${tid}/comments`).then((response) => response.data);

/**
 * Delete like by user id
 * @param  {string} uid user id
 * @param  {string} tid tuit id
 * return delete status
 */
export const deleteComment = (uid,tid) =>
  axios.delete(`${USER_API}/${uid}/comments/${tid}`).then((response) => response.data);

  /*

 app.post("/users/:uid/likes/:tid", LikeController.likeController.likeATuit);
            app.delete("/users/:uid/likes/:tid", LikeController.likeController.dislikeATuit);   
            app.get("/users/:uid/likes", LikeController.likeController.findTuitsLikedByAUser); 
            app.get("/tuits/:tid/likes", LikeController.likeController.findUsersThatLikedATuid);

  */
