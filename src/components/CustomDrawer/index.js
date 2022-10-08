import React from "react";
import { List, ListItem, Typography, Drawer } from "@mui/material";
import CustomAddBar from "../CustomAppBar";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HomeRounded,
  Leaderboard,
  InfoRounded,
  ContactSupportRounded,
  LogoutRounded,
} from "@mui/icons-material";

const CustomDrawer = () => {
  const DRAWER_WIDTH = 240;
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const listItems = [
    { text: "Home", link: "home", Icon: HomeRounded },
    { text: "Leaderboard", link: "leaderboard", Icon: Leaderboard },
    { text: "About Us", link: "about-us", Icon: InfoRounded },
    { text: "Contact Us", link: "contact-us", Icon: ContactSupportRounded },
  ];

  const logoutButton = (
    // TODO: add logout function
    <ListItem
      key="logout"
      onClick={() => {}}
      sx={{ margin: "16px 0", cursor: "pointer" }}
    >
      <LogoutRounded sx={{ marginRight: "16px" }} />
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
          {listItems.map(({ text, link, Icon }, index) => (
            <ListItem
              key={`${text}-${index}`}
              onClick={() => navigate(`/${link}`)}
              sx={{
                margin: "16px 0",
                cursor: "pointer",
                backgroundColor:
                  currentPath === `/${link}` ? "darkgrey" : "white",
                borderRadius: "0 16px 16px 0",
              }}
            >
              <Icon sx={{ marginRight: "16px" }} />
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
