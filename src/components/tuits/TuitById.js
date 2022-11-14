
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import tuitsArray from "../tuits/tuits-data.json"
import Tuit from "./tuit";
function TuitById () {

    const [tuit,setTuit] = useState({});
    const {tuitId} = useParams();
    
    useEffect(() => {
        setTuit(tuitsArray[tuitId])
    }, [tuit])

    return(<>
       <div>
      <ul className="ttr-tuits list-group">
    <Tuit tuit={tuit} deleteTuit={()=>alert('tuit deleted')}/>
    </ul>
    </div>
    </>);
}

export default TuitById;