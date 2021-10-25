import { saveCounter } from "../../redux/country/actions";

export const nextQuestion = () => (dispatch, getState) => {
  const { data } = getState();
  if (data.questionsResult && data.counter < data.questionsResult.length) {
    dispatch(saveCounter(data.counter + 1));
  }
};

export const previousQuestion = () => (dispatch, getState) => {
  const { data } = getState();
  if (data.questionsResult && data.counter > 1) {
    dispatch(saveCounter(data.counter - 1));
  }
};
