import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink } from "react-router-dom";

const Bio = () => {
  return (
    <Grid container columnSpacing={1} rowSpacing={3}>
      <Grid item xs={12} sm={6} sx={{ alignItems: "center" }}>
        <Box align="center">
          <AccountCircleIcon sx={{ fontSize: "9em" }} />
        </Box>
        <Stack direction="column" align="center">
          <Typography variant="h6">John Smith</Typography>
          <Typography>JohnSmith@beach.com</Typography>
          <Typography>
            <a href="https://github.com/">Personal Website</a>
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
        <Box>
          <Box my={2}>
            <Stack direction="column">
              <Typography variant="h7">Software Developer</Typography>
              <Typography variant="h7">Healthcare</Typography>
              <Typography variant="h7">Machine Learning</Typography>
            </Stack>{" "}
            <Typography variant="body2" sx={{ color: "gray" }}>
              Interests
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="h6">Microsoft</Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Company
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Stack direction="row">
          <Box mx={1}>
            <LinkedInIcon sx={{ fontSize: "4em", color: "#0072b1" }} />
          </Box>
          <Box mx={1}>
            <GitHubIcon sx={{ fontSize: "4em", color: "#6e5494" }} />
          </Box>
          <Box mx={1}>
            <InstagramIcon sx={{ fontSize: "4em", color: "#E1306C" }} />
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box>
          <Typography variant="body2">
            Lionel Andrés Messi, is an Argentine professional footballer who
            plays as a forward for Ligue 1 club Paris Saint-Germain and captains
            the Argentina national team{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
          <Button
            component={RouterLink}
            to="likedhistory"
            variant="outlined"
            sx={{ ml: 1 }}
            size="small"
          >
            Liked History
          </Button>
          <Button
            component={RouterLink}
            to="editprofile"
            variant="outlined"
            sx={{ ml: 1 }}
            size="small"
          >
            Edit Profile
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default Bio;
