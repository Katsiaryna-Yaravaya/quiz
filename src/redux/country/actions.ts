import {createAction} from "@reduxjs/toolkit";
import {
  Countries,
  CredentialUser,
  CurrentQuestion,
  QuestionDataAnswer
} from "../../interface/index.interface";


export const saveCountries = createAction<Countries[]>('[api] GET_COUNTRIES')
export const saveCountriesUserQuestions = createAction<Countries[]>("[Quiz] SAVE_COUNTRIES_USER_QUESTIONS")
export const saveCounter = createAction<number>("[ArrowButtons] SAVE_COUNTER")
export const saveCurrentQuestion = createAction<CurrentQuestion>("[Quiz] SAVE_CURRENT_QUESTION")
export const showGenerateAnswer = createAction<string[]>("[Quiz] SHOW_GENERATE_ANSWERS")
export const deleteData = createAction("[Results] DELETE_DATA")
export const saveQuestionDataAnswer = createAction<QuestionDataAnswer[]>("[Answers] SAVE_QUESTION_DATA_ANSWER")
export const clearAllAnsweredQuestions = createAction("[Results] DELETE_DATA_INCLUDE_AFTER_RESULT")
export const saveCredentialUser = createAction<CredentialUser>("[api] SAVE_CREDENTIAL_USER")