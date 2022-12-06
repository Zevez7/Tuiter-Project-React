import React, {useState,useEffect} from "react";
import Bookmark from "../bookmarks/bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
const TuitStats = ({ tuit, bookmarkTuit = () => {}, currentUser, index, deleteBookmark }) => {
  let likeValueDisplayLogic;

  if (tuit.stats && tuit.stats.likes) {
    if (tuit.stats.likes > 0) {
      likeValueDisplayLogic = <FavoriteIcon sx={{ color: "red" }} />;
    }
  } else if (tuit.stats && tuit.stats.likes <= 0) {
    likeValueDisplayLogic = <FavoriteIcon sx={{ color: "gray" }} />;
  }

  const [isTuitLiked, setIsTuitLiked] = useState(false);

  const likeTuit = () => {

    setIsTuitLiked(!isTuitLiked);
  }

  useEffect(() => {
    

  }, [])


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
      {isTuitLiked&& 
      <div className="col">
      <i className='fa fa-heart ' style={{color:'red'}} onClick={()=>likeTuit()} ></i>
        {tuit.stats && tuit.stats.retuits}
      </div>
}
{!isTuitLiked&&<div className="col">
      <i className='fa fa-heart' onClick={()=>likeTuit()}></i>
        {tuit.stats && tuit.stats.retuits}
      </div>
}
      <div className="col">
        <i className="far fa-inbox-out"></i>
      </div>
      <div className="col">{Bookmark(tuit,currentUser,index,deleteBookmark)}</div>
    </div>
  );
};
export default TuitStats;
