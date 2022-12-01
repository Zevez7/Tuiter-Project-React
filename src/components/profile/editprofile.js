/**
 * @file Edit profile page
 */
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import data from "../../dummyData/profileData.json";

/**
 * Editprofile component to edit user profile
 */
const Editprofile = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      personalWebsite: data.personalWebsite,
      linkedin: data.linkedIn,
      github: data.github,
      instagram: data.instagram,
      company: data.company,
      interest1: data.interest1,
      interest2: data.interest2,
      interest3: data.interest3,
      biography: data.biopgrahy,
    },
  });

  /**
   * OnClick cancel button this function is called
   */
  const cancelBtn = () => {
    navigate("/profile");
  };

  /**
   * OnClick save button this function called
   */
  const onSubmit = (data) => {
    console.log(data);
    return navigate("/profile");
  };

  return (
    <Box>
      <Typography variant="h3">Edit Profile</Typography>
      <form>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box mt={3} width={350}>
            <Controller
              name={"firstName"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="outlined"
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>

          <Box mt={3} width={350}>
            <Controller
              name={"lastName"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="outlined"
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>

          <Box mt={3} width={350}>
            <Controller
              name={"personalWebsite"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="outlined"
                  fullWidth
                  label="Personal Website"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>

          <Box mt={3} width={350}>
            <Controller
              name={"linkedin"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="outlined"
                  fullWidth
                  label="LinkedIn"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>

          <Box mt={3} width={350}>
            <Controller
              name={"github"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="outlined"
                  fullWidth
                  label="Github"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>
          <Box mt={3} width={350}>
            <Controller
              name={"instagram"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="outlined"
                  fullWidth
                  label="Instagram"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>
          <Box mt={3} width={350}>
            <Controller
              name={"company"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="outlined"
                  fullWidth
                  label="Company"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>
          <Box mt={3} width={350}>
            <Controller
              name={"interest1"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="outlined"
                  fullWidth
                  label={`Interest1`}
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>

          <Box mt={3} width={350}>
            <Controller
              name={"interest2"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="outlined"
                  fullWidth
                  label={`Interest2`}
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>
          <Box mt={3} width={350}>
            <Controller
              name={"interest3"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="outlined"
                  fullWidth
                  label={`Interest3`}
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>

          <Box mt={3} width={350}>
            <Controller
              name={"biography"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="outlined"
                  fullWidth
                  label={`Biography`}
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  multiline
                  rows={5}
                  inputProps={{
                    maxLength: 200,
                  }}
                />
              )}
            />
          </Box>
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
          <Button
            variant="outlined"
            sx={{ ml: 2 }}
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Editprofile;
