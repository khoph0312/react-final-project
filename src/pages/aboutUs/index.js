import React from "react";
import { Typography, Box } from "@mui/material";
import StaffInfo from "./StaffInfo";

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        padding: "32px",
      }}
    >
      <Typography variant="h3">About Us</Typography>
      <Typography variant="h5" sx={{ marginBottom: "40px" }}>
        These are the team that built up the math quiz websites.
      </Typography>
      <StaffInfo />
    </Box>
  );
};

export default AboutUs;
