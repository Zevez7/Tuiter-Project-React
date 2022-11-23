import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const Editprofile = () => {
  const data = {
    userId: 123455,
    profileImage:
      "www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png",
    personalWebsite: "www.wikipedia.org/portal/wikipedia.org",
    linkedIn: "www.linkedIn.com",
    github: "www.github.com",
    instagram: "www.instagram.com",
    company: "Microsoft",
    interests: ["Software Developer", "Healthcare", "Machine Learning"],
    friends: ["12434234", "123123123", "234234234"],
  };

  return (
    <Box>
      <Typography variant="h3">Edit Profile</Typography>

      <Box>
        <TextField
          id="standard-basic"
          label="Personal Website"
          variant="standard"
          defaultValue={data.personalWebsite}
        />
      </Box>

      <Box>
        <TextField
          id="standard-basic"
          label="LinkedIn"
          variant="standard"
          defaultValue={data.linkedIn}
        />
      </Box>
      <Box>
        <TextField
          id="standard-basic"
          label="Github"
          variant="standard"
          defaultValue={data.github}
        />
      </Box>
      <Box>
        <TextField
          id="standard-basic"
          label="Instagram"
          variant="standard"
          defaultValue={data.instagram}
        />
      </Box>
      <Box>
        <TextField
          id="standard-basic"
          label="Company"
          variant="standard"
          defaultValue={data.company}
        />
      </Box>
      {data.interests.map((item, key) => {
        return (
          <Box>
            <TextField
              id="standard-basic"
              label={`interest ${key + 1}`}
              variant="standard"
              defaultValue={item}
            />
          </Box>
        );
      })}
      <Box>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </Box>
  );
};

export default Editprofile;
