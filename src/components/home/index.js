import React, { useEffect, useState } from "react";
import Tuits from "../tuits";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import * as authService from "../../services/auth-service";
import * as tuitService from "../../services/tuits-service";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Picker from 'emoji-picker-react';
import DatePicker from "react-datepicker";
const Home = () => {
  const navigate = useNavigate();
  const [authprofile, setAuthProfile] = useState({});
  const [showEmojiBox, setShowEmojiBox] = useState(false);
  const [showDateBox, setShowDateBox] = useState(false);
  const [tuits, setTuits] = useState();
  const [searchParams] = useSearchParams();
  const [tuitObj,setTuitObj] = useState({'tuit': ''});
  const [startDate, setStartDate] = useState(new Date());
  let searchQuery = searchParams.get("q");
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await authService.profile();
        setAuthProfile(user);
        const alltuit = await tuitService.findAllTuits();

        const tempTuits = [];
        if (searchQuery !== null && searchQuery.length > 0) {
          searchQuery = searchQuery.toUpperCase();
          for (let i = 0; i < alltuit.length; i++) {
            const tuit = alltuit[i].tuit.toUpperCase();

            if (tuit.indexOf(searchQuery) !== -1) {
              tempTuits.push(alltuit[i]);
            }
          }
          setTuits(tempTuits);
        } else {
          setTuits(alltuit);
        }
      } catch (e) {
        //   console.log("session profile not found, send to login page");
        //   navigate("/profile/login");
      }
    };
    fetchProfile();
  }, [searchQuery]);

  const fetchAllTuits = async () => {
    try {
      const alltuit = await tuitService.findAllTuits();
      setTuits(alltuit);
    } catch (e) {
      // navigate("/profile/login");
    }
  };
  useEffect(() => {
    fetchAllTuits();
  }, []);

  /*const { handleSubmit, control, reset, getValues, setValue } = useForm({
    defaultValues: {
      tuit: "",
    },
  });
*/
  const onSubmit = async (data) => {
     
    const uid = authprofile._id;

    const tuitCreated = await tuitService.createTuitByUserId(uid, data);
    console.log(tuitCreated);
    const alltuit = await tuitService.findAllTuits();
    setTuits(alltuit);
    setTuitObj({'tuit':''})
  
  };


    
  const onEmojiClick = async (event, emojiObject) => {
    let emoji= await emojiObject.emoji;
    setTuitObj({'tuit':tuitObj.tuit+emoji});
  };



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
            <form>
              <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                {authprofile.username
                  ? `Logged in as ${authprofile.username}`
                  : `Not logged in`}
              </Typography>
               <TextField
                    id="tuit"
                    fullWidth
                    label="Type your tuit here"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={tuitObj.tuit}
                    sx={{ mb: 1, border: "none" }}
                    onChange={(e)=>setTuitObj({'tuit':e.target.value})}
                    value={tuitObj.tuit}
                  />
            </form>
            {showEmojiBox&&<Picker onEmojiClick={onEmojiClick} />}
            {showDateBox&& <DatePicker
      selected={startDate}
      onChange={(date) => setTuitObj({'tuit':tuitObj.tuit+date})}
      inline
    />}
            <div className="row" >
              <div className="col-9 ttr-font-size-150pc text-primary">
                <i className="far fa-face-smile me-3" onClick={()=>{
                  setShowEmojiBox(!showEmojiBox)
                  setShowDateBox(false);
                }}></i>
                <i className="far fa-calendar me-3" onClick={()=>{
                  setShowDateBox(!showDateBox);
                  setShowEmojiBox(false);
                }}></i>
                <i className="far fa-map-location me-3" onClick={()=>{
setShowEmojiBox(false);
setShowDateBox(false);
navigator.geolocation.getCurrentPosition(function(position) {
setTuitObj({'tuit':tuitObj.tuit+' latitute: '+position.coords.latitude+' longitude: '+position.coords.longitude});
});
                }}></i>
              </div>
              <div className="col-3">
                <Button
                  size="large"
                  variant="contained"
                  disabled={!authprofile.username}
                  onClick={()=>onSubmit(tuitObj)}
                >
                  Tuit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tuits tuits={tuits} setTuits={setTuits}/>
    </div>
  );
};
export default Home;
