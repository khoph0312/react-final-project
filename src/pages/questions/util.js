import { easyQuestions, mediumQuestions } from "../../data/questions";

const modes = [
  { questionMode: "easy", questions: easyQuestions },
  { questionMode: "medium", questions: mediumQuestions },
];

export const selectedQuestions = (mode) =>
  modes.find(({ questionMode }) => {
    return mode === questionMode;
  });

export const selectAnswer = (
  questionIndex,
  answer,
  submittedAnswers,
  setSubmittedAnswers
) => {
  let latestAnswers = [];
  if (
    !submittedAnswers.find(
      ({ questionNumber }) => questionNumber === questionIndex
    )
  ) {
    latestAnswers = [
      ...submittedAnswers,
      {
        questionNumber: questionIndex,
        answer,
      },
    ];
  } else {
    const latestList = submittedAnswers.filter(
      ({ questionNumber }) => questionNumber !== questionIndex
    );
    latestAnswers = [
      ...latestList,
      {
        questionNumber: questionIndex,
        answer,
      },
    ];
  }
  setSubmittedAnswers(latestAnswers);
};

export const onClickHandler = (
  submittedAnswers,
  setDialogDetail,
  setOpen,
  getResult
) => {
  // navigate("/home");
  if (submittedAnswers.length !== 10) {
    setDialogDetail({
      title: "Alert",
      detail: "Please answer all the questions before you submit.",
    });
  } else {
    // TODO: pull API call here
    setDialogDetail({
      title: "Results",
      detail: `Your result is ${getResult()}/10`,
    });
  }
  setOpen(true);
};
