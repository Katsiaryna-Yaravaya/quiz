import { createReducer, createSelector } from "@reduxjs/toolkit";
import { QuestionState } from "../../interface/questionState.interface";
import {
  clearAllAnsweredQuestions,
  deleteData,
  deleteResultUserQuestionDataAnswer, deleteUsers,
  deleteUserGames, deleteUserInformation, isMultiPlayer,
  saveCounter,
  saveCountries,
  saveCountriesUserQuestions,
  saveCredentialUser,
  saveCurrentQuestion,
  saveQuestionDataAnswer,
  saveResultUserQuestionDataAnswer,
  saveUserGames, saveUsers,
  showGenerateAnswer, updateUserName,
} from "./actions";

const INITIAL_STATE: QuestionState = {
  allServerDataCountries: [],
  countriesUserQuestions: {},
  questionCounter: 1,
  currentQuestion: {},
  questionsResult: [],
  credentialUser: [],
  userGames: [],
  users: [],
  isTwoPlayers: false,
};

export const countryReducer = createReducer(INITIAL_STATE, {
  [saveCountries.type]: (state, action) => {
    state.allServerDataCountries = action.payload;
  },

  [saveCountriesUserQuestions.type]: (state, action) => {
    state.countriesUserQuestions[action.payload.id] = action.payload.userQuestions;
  },

  [saveCounter.type]: (state, action) => {
    state.questionCounter = action.payload;
  },

  [saveCurrentQuestion.type]: (state, action) => {
    state.currentQuestion[action.payload.id] = action.payload.questions;
  },

  [showGenerateAnswer.type]: (state, action) => {
    state.currentQuestion[action.payload.id].allAnswers = action.payload.allAnswers;
  },

  [deleteData.type]: (state) => ({
    ...INITIAL_STATE,
    credentialUser: state.credentialUser,
  }),

  [saveQuestionDataAnswer.type]: (state, action) => {
    state.questionsResult.push(action.payload);
  },

  [clearAllAnsweredQuestions.type]: (state) => ({
    ...INITIAL_STATE,
    credentialUser: state.credentialUser,
    questionsResult: state.questionsResult,
  }),

  [saveCredentialUser.type]: (state, action) => {
    state.credentialUser.push(action.payload);
  },

  [saveUserGames.type]: (state, action) => {
    state.userGames = action.payload;
  },

  [saveUsers.type]: (state, action) => {
    state.users = action.payload;
  },

  [deleteUsers.type]: (state, action) => {
    const idsArray = action.payload.length ? [...action.payload] : [action.payload];
    idsArray.forEach((id) => {
      state.users = state.users.filter((user) => user.id !== id);
    });
  },

  [saveResultUserQuestionDataAnswer.type]: (state, action) => {
    state.questionsResult = action.payload;
  },

  [deleteResultUserQuestionDataAnswer.type]: (state) => ({
    ...INITIAL_STATE,
    questionsResult: state.questionsResult,
  }),

  [deleteUserGames.type]: (state) => ({
    ...INITIAL_STATE,
    userGames: state.userGames,
  }),

  [deleteUserInformation.type]: () => INITIAL_STATE,

  [isMultiPlayer.type]: (state, action) => {
    state.isTwoPlayers = action.payload;
  },

  [updateUserName.type]: (state, action) => {
    state.users = state.users.map((user) => {
      if (user.email === action.payload.email) {
        user.name = action.payload.name;
      }
      return user;
    });
  },
});

export default countryReducer;
