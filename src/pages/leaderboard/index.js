import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { leaderBoardColumn, topFiveList } from "../../data/leaderboard";

const Leaderboard = () => {
  const rank = 37;
  return (
    <Box sx={{ padding: "32px 128px" }}>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "32px 0",
          borderRadius: "12px",
        }}
      >
        <Typography variant="h3" align="center" sx={{ paddingBottom: "32px" }}>
          Leaderboard
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{ paddingBottom: "60px" }}
        >{`You are now in Rank ${rank}`}</Typography>
        <Grid container justifyContent="center">
          <Box
            sx={{
              width: "450px",
            }}
          >
            <DataGrid
              columns={leaderBoardColumn}
              rows={topFiveList}
              autoHeight
              sx={{ backgroundColor: "cornsilk" }}
              hideFooter
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Leaderboard;
