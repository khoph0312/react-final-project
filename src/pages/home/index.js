import React from "react";
import { HomeContainer } from "./styles";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import Menu from "@mui/icons-material/Menu";

const Home = () => {
  const tabBar = (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  );

  return <HomeContainer maxWidth={false}>{tabBar}</HomeContainer>;
};

export default Home;
