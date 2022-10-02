import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { easyQuestions, mediumQuestions } from "../../data/questions";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components";

const Questions = () => {
  const { mode } = useParams();
  const navigate = useNavigate();

  const modes = [
    { questionMode: "easy", questions: easyQuestions },
    { questionMode: "medium", questions: mediumQuestions },
  ];

  const selectedQuestions = modes.find(({ questionMode }) => {
    return mode === questionMode;
  });

  const questionsList = selectedQuestions.questions;

  const selectionView = (item) => (
    <Grid container item xs={3} justifyContent="center">
      <Box
        sx={{
          backgroundColor: "white",
          width: "90%",
          height: "40px",
          display: "flex",
          borderRadius: "16px",
          borderStyle: "solid",
          borderWidth: "1px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>{`${item}`}</Typography>
      </Box>
    </Grid>
  );

  const questionView = (index, question, selections) => (
    <Grid container sx={{ width: "69%" }}>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%",
            height: "150px",
            margin: "16px 0 8px",
            display: "flex",
            borderRadius: "16px",
            padding: "8px",
            borderStyle: "solid",
            borderWidth: "1px",
          }}
        >
          <Typography>{`Q${index + 1}. ${question}`}</Typography>
        </Box>
      </Grid>
      <Grid container item>
        {selections.map((item) => (
          <>{selectionView(item)}</>
        ))}
      </Grid>
    </Grid>
  );

  const submitButton = (
    // TODO: change to API call when it is done
    <div style={{ padding: "16px 0" }}>
      <Button
        onClick={() => {
          navigate("/home");
        }}
      >
        Submit Answer
      </Button>
    </div>
  );

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {questionsList.map(({ question, selections }, index) => (
        <>{questionView(index, question, selections)}</>
      ))}
      {submitButton}
    </Box>
  );
};

export default Questions;
