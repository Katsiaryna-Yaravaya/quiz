import { createReducer } from "@reduxjs/toolkit";
import { QuestionState } from "../../interface/questionState.interface";
import {
  clearAllAnsweredQuestions,
  deleteData,
  deleteResultUserQuestionDataAnswer,
  deleteUserGames,
  saveCounter,
  saveCountries,
  saveCountriesUserQuestions,
  saveCredentialUser,
  saveCurrentQuestion,
  saveQuestionDataAnswer,
  saveResultUserQuestionDataAnswer,
  saveUserGames,
  showGenerateAnswer,
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
  userGames: [],
};

export const countryReducer = createReducer(INITIAL_STATE, {

  [saveCountries.type]: (state, action) => {
    state.allServerDataCountries = action.payload;
  },

  [saveCountriesUserQuestions.type]: (state, action) => {
    state.countriesUserQuestions = action.payload;
  },

  [saveCounter.type]: (state, action) => {
    state.counter = action.payload;
  },

  [saveCurrentQuestion.type]: (state, action) => {
    state.currentQuestion = action.payload;
  },

  [showGenerateAnswer.type]: (state, action) => {
    state.currentQuestion.allAnswers = action.payload;
  },

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
    state.userGames = [];
  },

  [saveQuestionDataAnswer.type]: (state, action) => {
    state.questionsResult.push(action.payload);
  },

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
    state.userGames = [];
  },

  [saveCredentialUser.type]: (state, action) => {
    state.credentialUser = { ...action.payload };
  },

  [saveUserGames.type]: (state, action) => {
    state.userGames = action.payload;
  },
  [saveResultUserQuestionDataAnswer.type]: (state, action) => {
    state.questionsResult = action.payload;
  },
  [deleteResultUserQuestionDataAnswer.type]: (state) => {
    state.countriesUserQuestions = [];
    state.allServerDataCountries = [];
    state.counter = 1;
    state.currentQuestion = {
      correctAnswer: "",
      flag: "",
      capital: "",
      allAnswers: [],
    };
    state.credentialUser = {
      email: "",
      pass: "",
    };
    state.userGames = [];
  },
  [deleteUserGames.type]: (state) => {
    state.allServerDataCountries = [];
    state.countriesUserQuestions = [];
    state.counter = 1;
    state.questionsResult = [];
    state.currentQuestion = {
      correctAnswer: "",
      flag: "",
      capital: "",
      allAnswers: [],
    };
    state.credentialUser = {
      email: "",
      pass: "",
    };
  },
});

export default countryReducer;
