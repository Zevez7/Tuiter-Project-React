import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tuits from "../tuits";
import tuitsArray from "../tuits/tuits-data.json";
import {
  faImagePortrait,
  faImage,
  faFileVideo,
  faBarChart,
  faFaceSmile,
  faCalendar,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="ttr-home">
      <div className="border border-bottom-0">
        <h4 className="fw-bold p-2">Home Screen</h4>
        <div className="d-flex">
          <div className="p-2">
            <img
              className="ttr-width-50px rounded-circle"
              src="../images/nasa-logo.jpg"
              alt="NASA logo"
            />
          </div>
          <div className="p-2 w-100">
            <textarea
              placeholder="What's happening?"
              className="w-100 border-0"
            ></textarea>
            <div className="row">
              <div className="col-10 ttr-font-size-150pc text-primary">
                <FontAwesomeIcon icon={faImagePortrait} className="me-3" />
                <FontAwesomeIcon icon={faFileVideo} className="me-3" />
                <FontAwesomeIcon icon={faBarChart} className="me-3" />
                <FontAwesomeIcon icon={faFaceSmile} className="me-3" />
                <FontAwesomeIcon icon={faCalendar} className="me-3" />
                <FontAwesomeIcon icon={faMapLocation} className="me-3" />
             
        
              </div>
              <div className="col-2">
                <a
                  className={`btn btn-primary rounded-pill fa-pull-right
                                fw-bold ps-4 pe-4`}
                >
                  Tuit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tuits tuits={tuitsArray} />
    </div>
  );
};
export default Home;
