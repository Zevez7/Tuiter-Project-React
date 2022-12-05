import React from "react";
import Tuits from "../tuits";
import tuitsArray from "../tuits/tuits-data.json";

function Bookmarks() {
  return (
    <div>
      <h1>Bookmarks</h1>
      <div className="ttr-home">
        <Tuits tuits={tuitsArray.filter(tuit => { return tuit.stats.bookmark === true })} />
      </div>
    </div>
  );
}
export default Bookmarks;