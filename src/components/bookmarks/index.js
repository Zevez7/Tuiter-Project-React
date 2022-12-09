import React, { useEffect, useState } from "react";
import Tuits from "../tuits";
import tuitsArray from "../tuits/tuits-data.json";
import * as authService from "../../services/auth-service";
import * as tuitService from "../../services/tuits-service";
import * as UserService from "../../services/users-service";
import * as BookmarkService from '../../services/bookmark-service'
import { useNavigate } from "react-router-dom";
function Bookmarks() {


  const navigate = useNavigate();
  const [myBookmarkedTuits, setMyBookmarkedTuits] = useState([]);
  const [authprofile, setAuthProfile] = useState({});

  useEffect(() => { 
    const fetchProfile = async () => {
      try {
        const user = await authService.profile();
        console.log('current user: '+JSON.stringify(user));
         let tuits = [];
        const bookmarkedTuits=  await  BookmarkService.findTuitsByUser(user._id);

      // let tuits = [];

     //  bookmarkedTuit

    for(let i=0;i<bookmarkedTuits.length;i++){
       const userWhoPostedTheTuit= await UserService.findUserById(bookmarkedTuits[i].bookmarkedTuit.postedBy);
        tuits.push({...bookmarkedTuits[i].bookmarkedTuit, postedBy:{username: userWhoPostedTheTuit.username}});
    }
//console.log('tuits: '+JSON.stringify(tuits));
         setMyBookmarkedTuits(tuits);
         setAuthProfile(user);
      } catch (e) {
        alert("session profile not found, send to login page");
        navigate("/profile/login");
      }
    };
    fetchProfile();
  }, [navigate]);


  return (
    <div>
      <h1>Bookmarks</h1>
      <div className="ttr-home">
        {/*<Tuits tuits={myBookmarkedTuits.filter(tuit => { return tuit.stats.bookmark === true })} />*/}
        <Tuits tuits={myBookmarkedTuits} setMyBookmarkedTuits={setMyBookmarkedTuits} />
      </div>
    </div>
  );
}
export default Bookmarks;