import {
  faHeart,
  faInbox,
  faMessage,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TuitStats = ({ tuit, likeTuit = () => {} }) => {
  return (
    <div className="row mt-2">
      <div className="col">
        <FontAwesomeIcon icon={faMessage} className="me-1" />
        {tuit.stats && tuit.stats.replies}
      </div>
      <div className="col">
        <FontAwesomeIcon icon={faRetweet} className="me-1" />
        {tuit.stats && tuit.stats.retuits}
      </div>
      <div className="col">
        <span onClick={() => likeTuit(tuit)}>
          {tuit.stats && tuit.stats.likes && tuit.stats.likes > 0 && (
            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
          )}
          {tuit.stats && tuit.stats.likes && tuit.stats.likes <= 0 && (
            <FontAwesomeIcon icon={faHeart} className="me-1" />
          )}
          {tuit.stats && tuit.stats.likes}
        </span>
      </div>
      <div className="col">
        <FontAwesomeIcon icon={faInbox} className="me-1" />
      </div>
    </div>
  );
};
export default TuitStats;
