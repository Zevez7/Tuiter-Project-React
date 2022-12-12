import React, {useState,useEffect} from "react";
import Bookmark from "../bookmarks/bookmark";
import * as LikeService from '../../services/likes-service';
import { AddReactionOutlined } from "@mui/icons-material";
const TuitStats = ({ tuit, currentUser, index, deleteBookmark, displayComment, commentCount }) => {
  // let likeValueDisplayLogic;

  if (tuit.stats && tuit.stats.likes) {
    if (tuit.stats.likes > 0) {
      // likeValueDisplayLogic = <FavoriteIcon sx={{ color: "red" }} />;
    }
  } else if (tuit.stats && tuit.stats.likes <= 0) {
    // likeValueDisplayLogic = <FavoriteIcon sx={{ color: "gray" }} />;
  }

  const [isTuitLiked, setIsTuitLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [reTuitCount, setReTuitCount] = useState(0);


  const likeTheTuit = async ()=>{
    const result= await LikeService.createLike(currentUser._id,tuit._id);
    console.log('after like creation: '+JSON.stringify(result));
   }


  const deleteTheTuit = async ()=>{
    const result= await LikeService.deleteLike(currentUser._id,tuit._id);
    console.log('after delete creation: '+JSON.stringify(result));

   }

  const likeTuit = () => {

  if(!isTuitLiked){
    likeTheTuit();
    setIsTuitLiked(true);
    setLikeCount((prevCount)=>prevCount+1);
  }else {
    deleteTheTuit()
    setIsTuitLiked(false);
    setLikeCount((prevCount)=>prevCount-1);
  }
  
  }
  const addRetuit =()=> {
    setReTuitCount((prevCount)=>prevCount+1);

  }

  useEffect(() => {

   const findLikeCountAndIsTuitLiked = async () =>{

    const likedData= await LikeService.findUsersThatLikeTheTuitByTuidId(tuit._id);
    setLikeCount(likedData.length);
    for(let i=0;i<likedData.length;i++){
      if(likedData[i].likedBy._id===currentUser._id){
        setIsTuitLiked(true);
        break;
      }
    }
    }

    findLikeCountAndIsTuitLiked();
  }, [])


  return (
    <div className="row mt-2">

      <div className="col">
        <i className="far fa-message me-1" onClick={()=>displayComment()}></i>
        {commentCount}
      </div>
      <div className="col">
        <i className="far fa-retweet me-1" onClick={()=>addRetuit()}></i>
        {reTuitCount}
      </div>
      {isTuitLiked&& 
      <div className="col">
      <i className='fa fa-heart ' style={{color:'red'}} onClick={()=>likeTuit()} ></i>
      {likeCount}
      </div>
}
{!isTuitLiked&&<div className="col">
      <i className='fa fa-heart' onClick={()=>likeTuit()}></i>
      {likeCount}
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
