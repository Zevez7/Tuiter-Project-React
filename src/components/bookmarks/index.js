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

/*

    {bookmarkedTuits.map((tuits, index) => (
    index%2===0
      ? (<div class="row">
      <div class="col-6" ><Bookmark key={'bookmark-'+index} bookmarkTuit={bookmarkedTuits[index]} /></div>
      {index+1<tuitsArray.length?<div class="col-6" ><Bookmark key={'bookmark-'+index+1} bookmarkTuit={bookmarkedTuits[index+1]} /></div>:null}
         </div>)
      : <> <br /> </>
  ))}

*/