import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Tuits from "../tuits";
import tuitsArray from "../tuits/tuits-data.json";
import Bio from "./bio";

import * as authService from "../../services/auth-service";
import * as serviceProfile from "../../services/profiles-service";
import * as serviceUser from "../../services/users-service";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";

const Placeholder = (
  <Stack spacing={1}>
    {/* For variant="text", adjust the height via font-size */}
    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

    {/* For other variants, adjust the size with `width` and `height` */}
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rectangular" width={210} height={60} />
    <Skeleton variant="rounded" width={210} height={60} />
  </Stack>
);

/**
 * Profile component with Bio and Tuit component
 */
const Profile = () => {
  const navigate = useNavigate();
  const [authprofile, setAuthProfile] = useState({});
  const [profileResp, setProfile] = useState({});
  const [userResp, setUser] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await authService.profile();
        setAuthProfile(user);
      } catch (e) {
        console.log("session profile not found, send to login page");
        // navigate("/profile/login");
      }
    };
    fetchProfile();
  }, [navigate]);

  console.log("authprofile", authprofile);

  const logout = () => {
    authService.logout().then(() => navigate("/login"));
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const id = authprofile._id.toString();
        console.log("id", id);
        const responseProfile = await serviceProfile.findProfileByUserId(id);

        console.log("responseProfile", responseProfile);
        setProfile(responseProfile[0]);
      } catch (e) {
        // navigate("/login");
      }
    };
    fetchProfile();
  }, [authprofile]);

  console.log("profileResp", profileResp);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const id = authprofile._id.toString();

        let responseUser = await serviceUser.findUserById(id);
        setUser(responseUser);
      } catch (e) {
        // navigate("/login");
      }
    };
    fetchUser();
  }, [authprofile]);

  return (
    <Box>
      <Typography variant="h3">Profile</Typography>
      <Box mt={4} />
      {userResp && profileResp ? (
        <Bio profile={profileResp} user={userResp} />
      ) : (
        Placeholder
      )}

      <Tuits tuits={tuitsArray} />
    </Box>
  );
};
export default Profile;
