/**
 * @file Edit profile page
 */
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

/**
 * Ediprofile component to edit user profile
 */
const Editprofile = () => {
  const navigate = useNavigate();

  const data = {
    userId: 123455,
    profileImage:
      "www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png",
    personalWebsite: "www.wikipedia.org",
    linkedIn: "www.linkedIn.com",
    github: "www.github.com",
    instagram: "www.instagram.com",
    company: "Microsoft",
    interests: ["Software Developer", "Healthcare", "Machine Learning"],
    friends: ["12434234", "123123123", "234234234"],
  };

  /**
   * OnClick cancel button this function is called
   */
  const cancelBtn = () => {
    navigate("/profile");
  };

  /**
   * OnClick save button this function called
   */
  const saveBtn = () => {
    navigate("/profile");
  };
  return (
    <Box>
      <Typography variant="h3">Edit Profile</Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box mt={3} width={350}>
          <TextField
            id="outlined"
            fullWidth
            label="Personal Website"
            variant="outlined"
            defaultValue={data.personalWebsite}
          />
        </Box>

        <Box mt={3} width={350}>
          <TextField
            id="outlined"
            fullWidth
            label="LinkedIn"
            variant="outlined"
            defaultValue={data.linkedIn}
          />
        </Box>
        <Box mt={3} width={350}>
          <TextField
            id="outlined"
            fullWidth
            label="Github"
            variant="outlined"
            defaultValue={data.github}
          />
        </Box>
        <Box mt={3} width={350}>
          <TextField
            id="outlined"
            fullWidth
            label="Instagram"
            variant="outlined"
            defaultValue={data.instagram}
          />
        </Box>
        <Box mt={3} width={350}>
          <TextField
            id="outlined"
            fullWidth
            label="Company"
            variant="outlined"
            defaultValue={data.company}
          />
        </Box>
        {data.interests.map((item, key) => {
          return (
            <Box mt={3} width={350}>
              <TextField
                id="outlined"
                fullWidth
                label={`interest ${key + 1}`}
                variant="outlined"
                defaultValue={item}
              />
            </Box>
          );
        })}
        <Box m={4}>
          <Button
            sx={{ width: 350 }}
            variant="contained"
            component="label"
            disabled
          >
            Upload Profile Image
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Box>
      </Box>
      <Box textAlign="center" mt={4}>
        <Button variant="outlined" sx={{ ml: 2 }} onClick={cancelBtn}>
          Cancel
        </Button>
        <Button variant="outlined" sx={{ ml: 2 }} onClick={saveBtn}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default Editprofile;
