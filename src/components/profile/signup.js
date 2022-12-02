import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/auth-service";

const Signup = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      password: "",
      username: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    authService
      .signup(data)
      .then((user) => {
        console.log(user);
        // navigate("/profile");
      })
      .catch((e) => console.log(e));
  };
  return (
    <Box>
      <Typography variant="h3">Signup</Typography>

      <form>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt={5}
        >
          <Box mt={3} width={350}>
            <Controller
              name={"username"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="username1"
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>

          <Box mt={3} width={350}>
            <Controller
              name={"password"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="password1"
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>

          <Box textAlign="center" mt={4}>
            <Button
              variant="outlined"
              sx={{ ml: 2 }}
              onClick={handleSubmit(onSubmit)}
            >
              Signup
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Signup;
