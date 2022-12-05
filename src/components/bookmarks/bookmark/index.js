import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
const Bookmark = ({bookmarkTuit}) => {
    const navigate = useNavigate();

    function openTuit(){
        navigate('../tuit/1'); 
    }
  return(
      <>
    <div class="card" onClick={()=>openTuit()}>
    <div class="card-body">
      <p class="card-text">hello world</p>
      <img src="https://www.w3schools.com/bootstrap/newyork.jpg" class="img-rounded" alt="Cinque Terre" width="100" height="100"  style={{height: "15vw", width : "100%", objectFit: "cover"}}/> 
    </div>
  </div>

  </>
  );
}
export default Bookmark;