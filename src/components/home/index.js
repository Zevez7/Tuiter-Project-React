import React from "react";
import Tuits from "../tuits";
import tuitsArray from "../tuits/tuits-data.json";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";

const Home = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      tuit: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
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
              <Controller
                name={"username"}
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
              <div className="col-10 ttr-font-size-150pc text-primary">
                <i className="fas fa-portrait me-3"></i>
                <i className="far fa-gif me-3"></i>
                <i className="far fa-bar-chart me-3"></i>
                <i className="far fa-face-smile me-3"></i>
                <i className="far fa-calendar me-3"></i>
                <i className="far fa-map-location me-3"></i>
              </div>
              <div className="col-2">
                <Button>Tuit</Button>
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
