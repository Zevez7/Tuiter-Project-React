import React, {useState,useEffect} from "react";
import Bookmark from "../bookmarks/bookmark";
import * as LikeService from '../../services/likes-service';
import * as TuitService from '../../services/tuits-service';
import * as RetuitService from '../../services/retuits-service';
import { AddReactionOutlined } from "@mui/icons-material";
const TuitStats = ({ tuit, currentUser, index, deleteBookmark, displayComment, commentCount, setTuits =()=>{} }) => {
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
   }


  const deleteTheTuit = async ()=>{
    const result= await LikeService.deleteLike(currentUser._id,tuit._id);

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
    const addRetuitHelper = async () =>{
      const retuitCreated = await RetuitService.createRetuit(currentUser._id,tuit._id);
      const createdTuit = await TuitService.createTuitByUserId(currentUser._id, {'tuit': tuit.tuit})
      console.log('retuitCreated: '+JSON.stringify(retuitCreated)+" createdTuit: "+JSON.stringify(createdTuit));
      const alltuit = await TuitService.findAllTuits();
    setTuits(alltuit);
    }
    addRetuitHelper();

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

    const findRetuitCount = async ()=>{

      const retuitData = await RetuitService.findUsersThatRetuitTheTuitByTuidId(tuit._id);
      setReTuitCount(retuitData.length);
    }

    findLikeCountAndIsTuitLiked();

    findRetuitCount();
  }, [])


  return (
    <>
    {JSON.stringify(currentUser)!=='{}'&&
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
  </div>}
  {JSON.stringify(currentUser)=='{}'&&
    <div className="row mt-2">
    <div className="col">
      <i className="far fa-message me-1" ></i>
      {commentCount}
    </div>
    <div className="col">
      <i className="far fa-retweet me-1" ></i>
      {reTuitCount}
    </div>
    {isTuitLiked&& 
    <div className="col">
    <i className='fa fa-heart ' style={{color:'red'}}  ></i>
    {likeCount}
    </div>
}
{!isTuitLiked&&<div className="col">
    <i className='fa fa-heart' ></i>
    {likeCount}
    </div>
}
    <div className="col">
      <i className="far fa-inbox-out"></i>
    </div>
    <div className="col">
    <i className="far fa-bookmark"></i>
    </div>
  </div>}
    
    </>
  );
};
export default TuitStats;
