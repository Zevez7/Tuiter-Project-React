/**
 * @file Edit profile page
 */
import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import * as serviceProfile from "../../services/profiles-service";

const EdiitProfileForm = ({ profileResp, authprofile }) => {
  const navigate = useNavigate();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: useMemo(() => {
      return profileResp;
    }, [profileResp]),
  });

  useEffect(() => {
    reset(profileResp);
  }, [profileResp, reset]);

  /**
   * OnClick cancel button this function is called
   */
  const cancelBtn = () => {
    navigate("/profile");
  };

  /**
   * Submit the data to update the profile for the user
   * @param {object} data the data object to be submitted for update
   * @returns navigate to the profile page
   */
  const onSubmit = (data) => {
    console.log("data", data);
    serviceProfile.updateProfileByUserId(authprofile._id, data);
    return navigate("/profile");
  };

  return (
    <div>
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
              name={"linkedIn"}
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
          {/* <Box m={4}>
            <Button
              sx={{ width: 350 }}
              variant="contained"
              component="label"
              disabled
            >
              Upload Profile Image
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Box> */}
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
    </div>
  );
};

export default EdiitProfileForm;
