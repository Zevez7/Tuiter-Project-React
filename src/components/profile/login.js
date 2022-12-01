import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    return navigate("/profile");
  };

  const { handleSubmit, control } = useForm({});
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
                  id="outlined"
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
                  id="outlined"
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
    </Box>
  );
};

export default Login;
