import React, {useState} from "react";
import TuitStats from "./tuit-stats";
import TuitImage from "./tuit-image";
import TuitVideo from "./tuit-video";
import { useNavigate, Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { AddCommentSharp } from "@mui/icons-material";

const Tuit = ({ tuit, likeTuit, bookmarkTuit, currentUser,index, deleteBookmark }) => {
  const daysOld = (tuit) => {
    const now = new Date();
    const nowMillis = now.getTime();
    const posted = new Date(tuit.postedOn);
    const postedMillis = posted.getTime();
    const oldMillis = nowMillis - postedMillis;
    let old = 0.0;
    const secondsOld = oldMillis / 1000.0;
    const minutesOld = secondsOld / 60.0;
    const hoursOld = minutesOld / 60.0;
    const daysOld = hoursOld / 24.0;
    if (daysOld > 1) {
      old = Math.round(daysOld) + "d";
    } else if (hoursOld > 1) {
      old = Math.round(hoursOld) + "h";
    } else if (minutesOld > 1) {
      old = Math.round(minutesOld) + "m";
    } else if (secondsOld > 1) {
      old = Math.round(secondsOld) + "s";
    }
    return old;
  };

  const [showCommentSection,setCommentSection]= useState(false);
  const [commentCount,setcommentCount]= useState(100);
  const [commentText,setCommentText]= useState('dummy comment');
  const [comments,setComments] = useState([{
    commentedBy: {username: 'dummy username'},
    commentedTuit: 'dummy tuit',
    comment: 'dummy text'
   }]);
  const displayComment = () =>{
    setCommentSection(!showCommentSection);
  }

  const addComment =() =>{
   const comment={
    commentedBy: currentUser.currentUser,
    commentedTuit: tuit,
    comment: commentText
   };
    setComments.push(comment);
    setcommentCount((prevCount)=>prevCount+1);

  }
  return (
    // <li onClick={() => navigate(`/tuit/${tuit._id}`)}
    <li className="p-2 ttr-tuit list-group-item d-flex rounded-0">
      <div className="pe-2">
        {tuit.postedBy && (
          // <img src={`../images/${tuit.postedBy.username}.jpg`}
          //   className="ttr-tuit-avatar-logo rounded-circle" />
          <Avatar sx={{ width: 30, height: 30 }}>
            {tuit.postedBy.username.slice(0, 1)}
          </Avatar>
        )}
      </div>
      <div className="w-100">
        <h2 className="fs-5">
          {tuit.postedBy && tuit.postedBy.username}@
          {tuit.postedBy && tuit.postedBy.username} -
          <span className="ms-1">{daysOld(tuit)}</span>
        </h2>
        {tuit.tuit}
        {tuit.youtube && <TuitVideo tuit={tuit} />}
        {tuit.image && <TuitImage tuit={tuit} />}
        <TuitStats
          tuit={tuit}
          currentUser={currentUser}
          likeTuit={likeTuit}
          bookmarkTuit={bookmarkTuit}
          index={index}
          deleteBookmark={deleteBookmark}
          displayComment={displayComment}
          commentCount={commentCount}
        />
      {showCommentSection &&  <div className="card">
   <div className="card-body">
   {comments.map && comments.map((comment,index) => <>
    <div className="card">
   <div class="card-body">
   <p>{comment.commentedBy.username}: {comment.comment} </p>
  </div>
  </div>
  <br />
  </>)}
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Enter your comment' onChange={(e)=>setCommentText(e.target.value)}></textarea>
    <button type="button" className="btn btn-primary" style={{float:'right'}} onClick={()=>addComment()}>Comment</button>
  </div>
</div>}
      </div>
    </li>
  );
};
export default Tuit;
