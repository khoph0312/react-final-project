import React from "react";
import { Typography, Box } from "@mui/material";

const NotFoundPage = () => {
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
      <Typography variant="h3">404</Typography>
      <Typography variant="h5">The page entered is not found.</Typography>
    </Box>
  );
};

export default NotFoundPage;
