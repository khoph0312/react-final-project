import React, { useEffect, useState } from "react";
import { Typography, Grid, Card } from "@mui/material";
import { cardStyle } from "./styles";
import { useNavigate } from "react-router-dom";
import { performServiceCall } from "../../utils/api";

const Home = () => {
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();
  const NAME = "khoph";

  const getUserInfo = async () => {
    try {
      const result = await performServiceCall("GET", "user");
      console.log(result)
    } catch (error) {
      console.error("Error while getting user info: ", error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const nameView = (
    <Typography
      variant="h3"
      sx={{ paddingLeft: "16px" }}
    >{`Welcome back, ${NAME}`}</Typography>
  );

  const scores = [6, 14, 15];

  const getNumberOfCorrectAnswers = (score, marks) => {
    return score / marks;
  };

  const cards = [
    {
      color:
        "radial-gradient(circle, rgba(121,247,167,1) 0%, rgba(15,222,63,1) 100%)",
      text: "EASY",
      numberOfCorrectAnswers: getNumberOfCorrectAnswers(scores[0] || 0, 1),
      mode: "easy",
    },
    {
      color:
        "radial-gradient(circle, rgba(246,255,136,1) 0%, rgba(242,244,6,1) 100%)",
      text: "MEDIUM",
      numberOfCorrectAnswers: getNumberOfCorrectAnswers(scores[1] || 0, 2),
      mode: "medium",
    },
    {
      color:
        "radial-gradient(circle, rgba(247,121,121,1) 0%, rgba(222,15,15,1) 100%)",
      text: "HARD",
      numberOfCorrectAnswers: getNumberOfCorrectAnswers(scores[2] || 0, 3),
      mode: "hard",
    },
  ];

  const cardView = (
    <Grid
      container
      justifyContent="space-evenly"
      sx={{
        height: "calc(100% - 48px)",
        alignContent: "center",
      }}
    >
      {cards.map(({ color, text, numberOfCorrectAnswers, mode }) => (
        <Grid container item xs={3}>
          <Card
            sx={{ background: color, ...cardStyle }}
            onClick={() => navigate(`/questions/${mode}`)}
          >
            <Typography variant="h3">{text}</Typography>
            <Typography variant="h4">{`Previous result: ${numberOfCorrectAnswers}/10`}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <>
      {nameView}
      {cardView}
    </>
  );
};

export default Home;
