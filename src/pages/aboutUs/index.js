import React from "react";
import { Typography, Box } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        padding: "16px",
      }}
    >
      <Typography variant="h3">About Us</Typography>
      <Typography variant="h5">
        These are the team that built up the math quiz websites.
      </Typography>
    </Box>
  );
};

export default AboutUs;
