import {createAction} from "@reduxjs/toolkit";

export const saveCountries = createAction('GET_COUNTRIES')
export const saveCountriesUserQuestions = createAction("SAVE_COUNTRIES_USER_QUESTIONS")
export const saveCounter = createAction("SAVE_COUNTER")
export const saveCurrentQuestion = createAction("SAVE_CURRENT_QUESTION")
export const showGenerateAnswer = createAction("SHOW_GENERATE_ANSWERS")
export const deleteData = createAction("DELETE_DATA")
export const saveQuestionDataAnswer = createAction("SAVE_QUESTION_DATA_ANSWER")
export const clearAllAnsweredQuestions = createAction("DELETE_DATA_INCLUDE_AFTER_RESULT")
export const saveCredentialUser = createAction("SAVE_CREDENTIAL_USER")