import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Tuits from "../tuits";
import tuitsArray from "../tuits/tuits-data.json";
import Bio from "./bio";
import * as serviceProfile from "../../services/profiles-service";
import * as serviceUser from "../../services/users-service";
import Skeleton from "@mui/material/Skeleton";

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

const Profile = () => {
  const [profileResp, setProfile] = useState({});
  const [userResp, setUser] = useState({});
  const id = "638455ffaccc421bd3564540";
  // const id = "63858a9f383a79229b9a7501";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const responseProfile = await serviceProfile.findProfileByUserId(id);

        setProfile(responseProfile[0]);
      } catch (e) {
        // navigate("/login");
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let responseUser = await serviceUser.findUserById(id);
        setUser(responseUser);
      } catch (e) {
        // navigate("/login");
      }
    };
    fetchUser();
  }, []);
  console.log(userResp);
  console.log(profileResp);

  return (
    <Box>
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
