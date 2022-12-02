import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/auth-service";
import Signup from "./signup";

const Login = () => {
  const navigate = useNavigate();
  // const [loginUser, setLoginUser] = useState({});

  // const login = () => {
  //   console.log(loginUser);
  //   return authService
  //     .login(loginUser)
  //     .then((user) => {
  //       console.log(user);
  //       navigate("/profile");
  //     })
  //     .catch((e) => alert(e));
  // };
  const onSubmit = (data) => {
    console.log(data);

    authService
      .login(data)
      .then((user) => {
        console.log(user);
        navigate("/profile");
      })
      .catch((e) => console.log(e));
  };

  const { handleSubmit, control } = useForm({
    defaultValues: {
      password: "",
      username: "",
    },
  });
  return (
    <Box>
      <Typography variant="h3">Login</Typography>

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
                  id="username"
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
                  id="password"
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
              Login
            </Button>
          </Box>
        </Box>
      </form>

      <Signup />
    </Box>
  );
};

export default Login;
