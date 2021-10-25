import {
  saveCounter,
  saveCountriesUserQuestions,
  saveCurrentQuestion,
  showGenerateAnswer,
} from "../../redux/country/actions";

import { generateIndexCountry } from "../../core/utils";

import {
  GENERATE_NUMBER_INDEX_INCORRECT_ANSWER_COUNTRY,
  GENERATE_NUMBER_INDEX_QUESTION_COUNTRY,
} from "../../constants/general.constants";
import { Countries } from "../../interface/countries.interface";

export const generateCountriesUserQuestions = () => (dispatch, getState) => {
  const { data } = getState();
  const generatedUserQuestionCountries: Countries[] = generateIndexCountry(
    data.allServerDataCountries,
    GENERATE_NUMBER_INDEX_QUESTION_COUNTRY,
  );
  dispatch(saveCountriesUserQuestions(generatedUserQuestionCountries));
};

export const choseCurrentQuestion = () => (dispatch, getState) => {
  const { data } = getState();
  const currentUserQuestion: Countries = data.countriesUserQuestions[data.counter - 1];
  if (currentUserQuestion) {
    const { name, capital, flag } = currentUserQuestion;
    dispatch(saveCurrentQuestion({ correctAnswer: name, capital, flag }));
  }
};

export const answerOptions = () => (dispatch, getState) => {
  const { data } = getState();
  const generatedIncorrectAnswers: Countries[] = generateIndexCountry(
    data.allServerDataCountries,
    GENERATE_NUMBER_INDEX_INCORRECT_ANSWER_COUNTRY,
    data.currentQuestion.correctAnswer,
  );

  const generateAnswers: string[] = generatedIncorrectAnswers
    .map((item) => item.name)
    .concat(data.currentQuestion.correctAnswer)
    .sort(() => 0.5 - Math.random());
  dispatch(showGenerateAnswer(generateAnswers));
};
