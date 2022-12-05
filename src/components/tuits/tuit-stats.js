import React from "react";
import Bookmark from "../bookmarks/bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
const TuitStats = ({ tuit, likeTuit = () => {}, bookmarkTuit = () => {} }) => {
  let likeValueDisplayLogic;

  if (tuit.stats && tuit.stats.likes) {
    if (tuit.stats.likes > 0) {
      likeValueDisplayLogic = <FavoriteIcon sx={{ color: "red" }} />;
    }
  } else if (tuit.stats && tuit.stats.likes <= 0) {
    likeValueDisplayLogic = <FavoriteIcon sx={{ color: "gray" }} />;
  }

  return (
    <div className="row mt-2">
      <div className="col">
        <i className="far fa-message me-1"></i>
        {tuit.stats && tuit.stats.replies}
      </div>
      <div className="col">
        <i className="far fa-retweet me-1"></i>
        {tuit.stats && tuit.stats.retuits}
      </div>
      <div className="col">
        <span onClick={() => likeTuit(tuit)}>
          {likeValueDisplayLogic}
          {""}

          {tuit.stats && tuit.stats.likes}
        </span>
      </div>
      <div className="col">
        <i className="far fa-inbox-out"></i>
      </div>
      <div className="col">{Bookmark(tuit)}</div>
    </div>
  );
};
export default TuitStats;
