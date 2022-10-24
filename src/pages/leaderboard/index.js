import React, { useLayoutEffect, useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { leaderBoardColumn } from "../../data/leaderboard";
import {performServiceCall} from '../../utils/api'
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState()
  const navigate = useNavigate()
  
  const getLeaderboard = async() => {
    try {
      const result = await performServiceCall(navigate, "GET", "leaderboard");
      setLeaderboard(result);
    } catch (error) {
      alert('Error getting leaderboard: ', error);
    }
  }

  useLayoutEffect(() => {
    getLeaderboard()
  }, [])

  const getTableRows = () => {
    const data = leaderboard?.data || []
    return data.map((item, index) => {
      return {...item, id: index  +1}
    })
  }

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
        >{`You are now in Rank ${leaderboard?.rank?.rank}`}</Typography>
        <Grid container justifyContent="center">
          <Box
            sx={{
              width: "450px",
            }}
          >
            <DataGrid
              columns={leaderBoardColumn}
              rows={getTableRows()}
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
