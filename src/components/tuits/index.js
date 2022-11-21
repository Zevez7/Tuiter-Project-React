/**
 * @file Tuit index
 */
import React from "react";
import "./tuits.css";
import Tuit from "./tuit";
/**
 * Tuits react component
 * @param  {tuits} tuits array of tuit data that will be rendered
 *
 * */
const Tuits = ({ tuits = [] }) => {
  return (
    <div>
      <ul className="ttr-tuits list-group">
        {tuits.map && tuits.map((tuit) => <Tuit key={tuit._id} tuit={tuit} />)}
      </ul>
    </div>
  );
};

export default Tuits;
