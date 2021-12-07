import {
  saveCountriesUserQuestions,
  saveCurrentQuestion,
  showGenerateAnswer,
} from "../../redux/country/actions";

import { generateCountries } from "../../core/utils";

import {
  GENERATE_NUMBER_INDEX_INCORRECT_ANSWER_COUNTRY,
  GENERATE_NUMBER_INDEX_QUESTION_COUNTRY,
} from "../../constants/general.constants";
import { Countries } from "../../interface/countries.interface";

export const generateCountriesUserQuestions = (id) => (dispatch, getState) => {
  const { data } = getState();
  const generatedUserQuestionCountries: Countries[] = generateCountries(
    data.allServerDataCountries,
    GENERATE_NUMBER_INDEX_QUESTION_COUNTRY,
  );
  dispatch(saveCountriesUserQuestions({ id, userQuestions: generatedUserQuestionCountries }));
};

export const choseCurrentQuestion = (id) => (dispatch, getState) => {
  const { data } = getState();
  const currentUserQuestion: Countries = data.countriesUserQuestions[id][data.questionCounter - 1];
  if (currentUserQuestion) {
    const { name, capital, flag } = currentUserQuestion;
    dispatch(saveCurrentQuestion({ id, questions: { correctAnswer: name, capital, flag } }));
  }
};

export const answerOptions = (id) => (dispatch, getState) => {
  const { data } = getState();
  const generatedIncorrectAnswers: Countries[] = generateCountries(
    data.allServerDataCountries,
    GENERATE_NUMBER_INDEX_INCORRECT_ANSWER_COUNTRY,
    data.currentQuestion[id].correctAnswer,
  );

  const generateAnswers: string[] = generatedIncorrectAnswers
    .map((item) => item.name)
    .concat(data.currentQuestion[id].correctAnswer)
    .sort(() => 0.5 - Math.random());
  dispatch(showGenerateAnswer({ id, allAnswers: generateAnswers }));
};
