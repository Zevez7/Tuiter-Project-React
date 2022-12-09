import React, { useEffect, useState } from "react";
import Tuits from "../tuits";
import tuitsArray from "../tuits/tuits-data.json";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import * as authService from "../../services/auth-service";
import * as tuitService from "../../services/tuits-service";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate();
  const [authprofile, setAuthProfile] = useState({});
  const [tuits, setTuits] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  let searchQuery=searchParams.get('q');
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await authService.profile();
        setAuthProfile(user);
        const alltuit = await tuitService.findAllTuits();
        
        const tempTuits=[];
if(searchQuery!==null && searchQuery.length>0 ){
  searchQuery=searchQuery.toUpperCase();
        for(let i=0;i<alltuit.length;i++){

          const tuit=alltuit[i].tuit.toUpperCase();

          if(tuit.indexOf(searchQuery)!==-1){
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

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      tuit: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    const uid = authprofile._id;

    const tuitCreated = await tuitService.createTuitByUser(uid, data);
    console.log(tuitCreated);
    const alltuit = await tuitService.findAllTuits();
    setTuits(alltuit);
    reset();
  };

  console.log(authprofile);
  console.log(tuits);

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

              <Controller
                name={"tuit"}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="tuit"
                    fullWidth
                    label="Type your tuit here"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    multiline
                    rows={4}
                    sx={{ mb: 1, border: "none" }}
                  />
                )}
              />
            </form>
            <div className="row">
              <div className="col-9 ttr-font-size-150pc text-primary">
                <i className="fas fa-portrait me-3"></i>
                <i className="far fa-gif me-3"></i>
                <i className="far fa-bar-chart me-3"></i>
                <i className="far fa-face-smile me-3"></i>
                <i className="far fa-calendar me-3"></i>
                <i className="far fa-map-location me-3"></i>
              </div>
              <div className="col-3">
                <Button
                  size="large"
                  variant="contained"
                  disabled={!authprofile.username}
                  onClick={handleSubmit(onSubmit)}
                >
                  Tuit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tuits tuits={tuits} />
    </div>
  );
};
export default Home;
