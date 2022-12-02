import { Box, Typography } from "@mui/material";
import React from "react";

import Tuits from "../tuits";
import tuitsArray from "../tuits/tuits-data.json";
import Bio from "./bio";

const Profile = () => {
  return (
    <Box>
      <Bio />
      <Tuits tuits={tuitsArray} />
    </Box>
  );
};
export default Profile;
