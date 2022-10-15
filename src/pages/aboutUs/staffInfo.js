import React from "react";
import { Typography, Grid, Avatar } from "@mui/material";
import { employeesInfo } from "../../data/aboutUs";

const StaffInfo = () => {
  const staffListItem = (name, details) => (
    <Grid container justifyContent="center" sx={{ marginBottom: "40px" }}>
      <Grid
        item
        xs={2}
        sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
      >
        <Avatar
          sx={{ width: "100px", height: "100px" }}
          src="https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">{details}</Typography>
      </Grid>
    </Grid>
  );

  return (
    <>
      {employeesInfo.map(({ name, details }) => staffListItem(name, details))}
    </>
  );
};

export default StaffInfo;
