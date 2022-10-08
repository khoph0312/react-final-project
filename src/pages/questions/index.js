import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { easyQuestions, mediumQuestions } from "../../data/questions";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { questionStyle, selectionStyle, questionPageStyle } from "./styles";

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

  const selectionView = (item, index) => (
    <Grid container item xs={3} justifyContent="center">
      <Box sx={selectionStyle}>
        <Typography>{`${String.fromCharCode(65 + index)}) ${item}`}</Typography>
      </Box>
    </Grid>
  );

  const questionView = (questionIndex, question, selections) => (
    <Grid container sx={{ width: "69%" }}>
      <Grid item xs={12}>
        <Box sx={questionStyle}>
          <Typography>{`Q${questionIndex + 1}. ${question}`}</Typography>
        </Box>
      </Grid>
      <Grid container item>
        {selections.map((item, index) => (
          <>{selectionView(item, index)}</>
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
    <Box sx={questionPageStyle}>
      {questionsList.map(({ question, selections }, index) => (
        <>{questionView(index, question, selections)}</>
      ))}
      {submitButton}
    </Box>
  );
};

export default Questions;
