/**
 * @file Tuit index
 */
import React, {useState, useEffect} from "react";
import "./tuits.css";
import Tuit from "./tuit";
import * as authService from "../../services/auth-service";
/**
 * Tuits react component
 * @param  {tuits} tuits array of tuit data that will be rendered
 *
 * @param setMyBookmarkedTuits
 * */
const Tuits = ({ tuits = [], setMyBookmarkedTuits }) => {

  const [authprofile, setAuthProfile] = useState({});

  const deleteBookmark =(index) =>{
     const temp= [];
     for(let i=0;i<tuits.length;i++){
       if(i!==index){
         temp.push(tuits[i]);
       }
     }
     setMyBookmarkedTuits(temp);
     }


  useEffect(() => { 

    const fetchProfile = async () => {
      try {
        const user = await authService.profile();
         setAuthProfile(user);
      } catch (e) {
      }
    };
    fetchProfile();
  }, []);


  return (
    <div>

      <ul className="ttr-tuits list-group">
        {tuits.map && tuits.map((tuit,index) => <Tuit key={tuit._id} tuit={tuit} currentUser={authprofile} index={index} deleteBookmark={deleteBookmark}/>)}
      </ul>
    </div>
  );
};

export default Tuits;
