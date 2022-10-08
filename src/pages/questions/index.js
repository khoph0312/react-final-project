import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  DialogTitle,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { questionStyle, selectionStyle, questionPageStyle } from "./styles";
import { selectedQuestions, selectAnswer, onClickHandler } from "./util";
import { Close } from "@mui/icons-material";

const Questions = () => {
  const [submittedAnswers, setSubmittedAnswers] = useState([]);
  const [open, setOpen] = useState(false);
  const [dialogDetail, setDialogDetail] = useState({});
  const { mode } = useParams();
  const navigate = useNavigate();

  const questionsList = selectedQuestions(mode).questions;

  const selectionView = (questionIndex, item, index) => (
    <Grid container item xs={3} justifyContent="center">
      <Card
        sx={{
          ...selectionStyle,
          backgroundColor: submittedAnswers.find(
            ({ answer, questionNumber }) =>
              questionNumber === questionIndex && answer === item
          )
            ? "aquamarine"
            : "white",
        }}
        onClick={() =>
          selectAnswer(
            questionIndex,
            item,
            submittedAnswers,
            setSubmittedAnswers
          )
        }
      >
        <Typography>{`${String.fromCharCode(65 + index)}) ${item}`}</Typography>
      </Card>
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
          <>{selectionView(questionIndex, item, index)}</>
        ))}
      </Grid>
    </Grid>
  );

  const getResult = () => {
    let count = 0;
    submittedAnswers.map(({ questionNumber, answer }) => {
      if (questionsList[questionNumber].correctAnswer === answer) count++;
    });
    return count;
  };

  const onCloseHandler = () => {
    setOpen(false);
    if (submittedAnswers.length === 10) {
      navigate("/home");
    }
  };

  const submitButton = (
    <div style={{ padding: "16px 0" }}>
      <Button
        onClick={() =>
          onClickHandler(submittedAnswers, setDialogDetail, setOpen, getResult)
        }
      >
        Submit Answer
      </Button>
    </div>
  );

  const modalTitle = (title) => (
    <DialogTitle sx={{ display: "flex", flex: 1 }}>
      <Typography
        variant="h4"
        sx={{ display: "flex", flex: 1, justifyContent: "center" }}
      >
        {title}
      </Typography>
      <IconButton aria-label="close" onClick={onCloseHandler}>
        <Close />
      </IconButton>
    </DialogTitle>
  );

  return (
    <>
      <Box sx={questionPageStyle}>
        {questionsList.map(({ question, selections }, index) => (
          <>{questionView(index, question, selections)}</>
        ))}
        {submitButton}
      </Box>
      <Dialog onClose={onCloseHandler} open={open}>
        {modalTitle(dialogDetail.title)}
        <DialogContent sx={{ minWidth: "500px" }}>
          <Typography variant="body1">{dialogDetail.detail}</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Questions;
