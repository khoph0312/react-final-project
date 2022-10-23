import {
  easyQuestions,
  hardQuestions,
  mediumQuestions,
} from "../../data/questions";
import {performServiceCall} from '../../utils/api'

const modes = [
  { questionMode: "easy", questions: easyQuestions },
  { questionMode: "medium", questions: mediumQuestions },
  { questionMode: "hard", questions: hardQuestions },
];

export const modeMultiplier = new Map([
  ['easy', 1],
  ['medium', 2],
  ['hard', 3],
])

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

export const onClickHandler = async (
  mode,
  submittedAnswers,
  setDialogDetail,
  setOpen,
  getResult
) => {
  if (submittedAnswers.length !== 10) {
    setDialogDetail({
      title: "Alert",
      detail: "Please answer all the questions before you submit.",
    });
  } else {
    await updateResult(mode, getResult())
    setDialogDetail({
      title: "Results",
      detail: `Your final score is ${getResult()}`,
    });
  }
  setOpen(true);
};

const updateResult = async (mode, score) => {
  const params = {mode, score: score}
  try {
    await performServiceCall("POST", "score", params);
  } catch (error) {
    alert('Error getting user info: ', error);
    throw error
  }
}