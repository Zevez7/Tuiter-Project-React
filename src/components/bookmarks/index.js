import React, {useState, useEffect} from "react";
import tuitsArray from "../tuits/tuits-data.json"
import Bookmark from "./bookmark";
import Tuits from '../tuits';

function Bookmarks () {

  const [bookmarkedTuits, setBookmarkedTuits]= useState([]);

useEffect(() => {
  //fetch Tuits from an api
  setBookmarkedTuits([...tuitsArray,...tuitsArray]);
  console.log('I am here');
}, []);

  return(
    <>
    <Tuits tuits={bookmarkedTuits} />
    </>

  );
}
export default Bookmarks;
