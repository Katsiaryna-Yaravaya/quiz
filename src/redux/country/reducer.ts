import {QuestionState} from "../../interface/questionState.interface";
import {createReducer} from "@reduxjs/toolkit";
import {
  clearAllAnsweredQuestions,
  deleteData,
  saveCounter,
  saveCountries,
  saveCountriesUserQuestions,
  saveCredentialUser,
  saveCurrentQuestion,
  saveQuestionDataAnswer,
  showGenerateAnswer
} from "./actions";

const INITIAL_STATE: QuestionState = {
  allServerDataCountries: [],
  countriesUserQuestions: [],
  counter: 1,
  currentQuestion: {
    correctAnswer: "",
    flag: "",
    capital: "",
    allAnswers: [],
  },
  questionsResult: [],
  credentialUser: {
    email: "",
    pass: "",
  },
};

export const countryReducer = createReducer(INITIAL_STATE, {

  [saveCountries.type]: (state, action) => {state.allServerDataCountries = action.payload},

  [saveCountriesUserQuestions.type]: (state, action) => {state.countriesUserQuestions = action.payload},

  [saveCounter.type]: (state, action) => {state.counter = action.payload},

  [saveCurrentQuestion.type]: (state, action) => {state.currentQuestion = action.payload},

  [showGenerateAnswer.type]: (state, action) => {state.currentQuestion.allAnswers = action.payload},

  [deleteData.type]: (state) => {
    state.allServerDataCountries = [];
    state.countriesUserQuestions = [];
    state.counter = 1;
    state.currentQuestion = {
      correctAnswer: "",
      flag: "",
      capital: "",
      allAnswers: [],
    };
    state.questionsResult = [];
  },

  [saveQuestionDataAnswer.type]: (state, action) => {state.questionsResult.push(action.payload)},

  [clearAllAnsweredQuestions.type]: (state) => {
    state.allServerDataCountries = [];
    state.countriesUserQuestions = [];
    state.counter = 1;
    state.currentQuestion = {
      correctAnswer: "",
      flag: "",
      capital: "",
      allAnswers: [],
    };
  },

  [saveCredentialUser.type]: (state, action) => {state.credentialUser = {...action.payload}},
})

export default countryReducer;
