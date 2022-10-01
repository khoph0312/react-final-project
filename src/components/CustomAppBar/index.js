import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import Menu from "@mui/icons-material/Menu";

const CustomAddBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar variant="dense">
        <Typography variant="h6">Math Quiz</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAddBar;
