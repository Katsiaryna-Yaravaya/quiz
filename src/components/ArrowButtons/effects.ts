import { saveCounter } from "../../redux/country/actions";

export const nextQuestion = () => (dispatch, getState) => {
  const { data } = getState();
  if (data.questionsResult && data.questionCounter < data.questionsResult.length) {
    dispatch(saveCounter(data.questionCounter + 1));
  }
};

export const previousQuestion = () => (dispatch, getState) => {
  const { data } = getState();
  if (data.questionsResult && data.questionCounter > 1) {
    dispatch(saveCounter(data.questionCounter - 1));
  }
};
