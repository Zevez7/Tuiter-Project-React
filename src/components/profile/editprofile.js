/**
 * @file Edit profile page
 */
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as serviceProfile from "../../services/profiles-service";
import * as authService from "../../services/auth-service";
import EditProfileForm from "./editProfileForm";

/**
 * Editprofile component to edit user profile
 */
const Editprofile = () => {
  // keeping the forms controlled by adding ""
  const [authprofile, setAuthProfile] = useState({});
  const [profileResp, setProfile] = useState({
    firstName: "",
    lastName: "",
    personalWebsite: "",
    linkedIn: "",
    github: "",
    instagram: "",
    company: "",
    interest1: "",
    interest2: "",
    interest3: "",
    biography: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthProfile = async () => {
      try {
        const user = await authService.profile();

        setAuthProfile(user);
      } catch (e) {
        console.log("session profile not found, send to login page");
        // navigate("/profile/login");
      }
    };
    fetchAuthProfile();
  }, [navigate]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const id = authprofile._id.toString();
        const responseProfile = await serviceProfile.findProfileByUserId(id);

        const data = await responseProfile;
        // removing extra data and only keeping some
        const dataFiltered = {
          firstName: data.firstName,
          lastName: data.lastName,
          personalWebsite: data.personalWebsite,
          linkedIn: data.linkedIn,
          github: data.github,
          instagram: data.instagram,
          company: data.company,
          interest1: data.interest1,
          interest2: data.interest2,
          interest3: data.interest3,
          biography: data.biography,
        };
        setProfile(dataFiltered);
      } catch (e) {
        // navigate("/login");
      }
    };
    fetchProfile();
  }, [authprofile]);

  return (
    <Box>
      <Typography variant="h3">Edit Profile</Typography>
      <Box mt={4} />

      <EditProfileForm profileResp={profileResp} authprofile={authprofile} />
    </Box>
  );
};

export default Editprofile;
