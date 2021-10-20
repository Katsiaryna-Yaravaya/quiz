import {QuestionState} from "../../interface/questionState.interface";
import {createReducer} from "@reduxjs/toolkit";
import {
  clearAllAnsweredQuestions,
  deleteData,
  saveCounter,
  saveCountries,
  saveCountriesUserQuestions, saveCredentialUser,
  saveCurrentQuestion, saveQuestionDataAnswer,
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
// @ts-ignore
  [saveCountries]: (state, action) => {
    state.allServerDataCountries = action.payload
  },
// @ts-ignore
  [saveCountriesUserQuestions]: (state, action) => {
    state.countriesUserQuestions = action.payload;
  },
// @ts-ignore
  [saveCounter]: (state, action) => {
    state.counter = action.payload
  },
// @ts-ignore
  [saveCurrentQuestion]: (state, action) => {
    console.log(action.payload)

    state.currentQuestion = action.payload
  },
// @ts-ignore
  [showGenerateAnswer]: (state, action) => {
    console.log(action.payload)
    console.log(action)
    // state.currentQuestion.allAnswers.push(action.payload)
  },
// @ts-ignore
  [deleteData]: (state, action) => {
  },
// @ts-ignore
  [saveQuestionDataAnswer]: (state, action) => {
    state.questionsResult.push(action.payload)
  },
// @ts-ignore
  [clearAllAnsweredQuestions]: (state, action) => {
  },
// @ts-ignore
  [saveCredentialUser]: (state, action) => {
    state.credentialUser = {...action.payload}
  },
})


export default countryReducer;
