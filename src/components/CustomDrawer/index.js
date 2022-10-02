import React from "react";
import { List, ListItem, Typography, Drawer } from "@mui/material";
import CustomAddBar from "../CustomAppBar";
import { useNavigate } from "react-router-dom";

const CustomDrawer = () => {
  const DRAWER_WIDTH = 240;
  const navigate = useNavigate();
  const listItems = [
    { text: "Home", link: "home" },
    { text: "Leaderboard", link: "leaderboard" },
    { text: "About Us", link: "about-us" },
    { text: "Contact Us", link: "contact-us" },
  ];

  const logoutButton = (
    // TODO: add logout function
    <ListItem key="logout" onClick={() => {}}>
      <Typography>Logout</Typography>
    </ListItem>
  );

  const drawerList = (
    <div
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        display: "flex",
      }}
    >
      <div>
        <List sx={{ paddingTop: "48px" }}>
          {listItems.map(({ text, link }, index) => (
            <ListItem
              key={`${text}-${index}`}
              onClick={() => navigate(`/${link}`)}
            >
              <Typography>{text}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
      <div>{logoutButton}</div>
    </div>
  );

  return (
    <>
      <CustomAddBar />
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {drawerList}
      </Drawer>
    </>
  );
};

export default CustomDrawer;
