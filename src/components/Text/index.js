import React from "react";
import Typography from "@mui/material/Typography";

const Text = ({ variant = "h5", children }) => {
  return <Typography variant={variant}>{children}</Typography>;
};

export default Text;
