import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink } from "react-router-dom";

const Bio = (props) => {
  console.log(props.profile);
  return (
    <>
      <Grid container columnSpacing={1} rowSpacing={3}>
        <Grid item xs={12} sm={6} sx={{ alignItems: "center" }}>
          <Box align="center">
            <AccountCircleIcon sx={{ fontSize: "9em" }} />
          </Box>
          <Stack direction="column" align="center">
            <Typography variant="h6">
              {/* {props.userResp.firstName} Smith */}
            </Typography>
            <Typography>{props.user.email && props.user.email}</Typography>
            <Typography>
              {props.profile.personWebsite && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={props.profile.personWebsite}
                >
                  Personal Website
                </a>
              )}
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box>
            <Box mb={1} mt={3}>
              <Stack direction="column">
                {props.profile.interest1 ||
                props.profile.interest2 ||
                props.profile.interest3
                  ? ""
                  : "Your interest right here"}
                {props.profile.interest1 && (
                  <Typography variant="h6">
                    {props.profile.interest1}
                  </Typography>
                )}
                {props.profile.interest2 && (
                  <Typography variant="h6">
                    {props.profile.interest2}
                  </Typography>
                )}
                {props.profile.interest3 && (
                  <Typography variant="h6">
                    {props.profile.interest3}
                  </Typography>
                )}
              </Stack>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Interests
              </Typography>
            </Box>
            <Box my={2}>
              {props.profile.company ? (
                <Typography variant="h6"> {props.profile.company} </Typography>
              ) : (
                "A place for your company"
              )}
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
              <IconButton
                size="small"
                target="_blank"
                disabled={!props.profile.linkedIn}
                href={`http://${props.profile.linkedIn}`}
              >
                <LinkedInIcon sx={{ fontSize: "4em", color: "#0072b1" }} />
              </IconButton>
            </Box>
            <Box mx={1}>
              <IconButton
                size="small"
                target="_blank"
                disabled={!props.profile.github}
                href={`http://${props.profile.github}`}
              >
                <GitHubIcon sx={{ fontSize: "4em", color: "#6e5494" }} />
              </IconButton>
            </Box>
            <Box mx={1}>
              <IconButton
                size="small"
                target="_blank"
                disabled={!props.profile.instagram}
                href={`http://${props.profile.instagram}`}
              >
                <InstagramIcon sx={{ fontSize: "4em", color: "#E1306C" }} />
              </IconButton>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="body2">
              {props.profile.biography
                ? props.profile.biography
                : "Your short biography here!"}
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
    </>
  );
};

export default Bio;
