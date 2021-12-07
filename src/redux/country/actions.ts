import { createAction } from "@reduxjs/toolkit";
import {
  AnswersUser,
  Countries,
  CredentialUser, CurrentQuestionIdUser,
  QuestionDataAnswer, SaveUserQuestionsInterface, ShowResultUserInterface,
  UserName,
} from "../../interface/index.interface";

export const saveCountries = createAction<Countries[]>("[api] GET_COUNTRIES");
export const saveCountriesUserQuestions = createAction<SaveUserQuestionsInterface>("[Quiz] SAVE_COUNTRIES_USER_QUESTIONS");
export const saveCounter = createAction<number>("[ArrowButtons] SAVE_COUNTER");
export const saveCurrentQuestion = createAction<CurrentQuestionIdUser>("[Quiz] SAVE_CURRENT_QUESTION");
export const showGenerateAnswer = createAction<AnswersUser>("[Quiz] SHOW_GENERATE_ANSWERS");
export const deleteData = createAction("[Results] DELETE_DATA");
export const saveQuestionDataAnswer = createAction<QuestionDataAnswer[]>("[Answers] SAVE_QUESTION_DATA_ANSWER");
export const saveResultUserQuestionDataAnswer = createAction<QuestionDataAnswer[]>("[GamesUser] SAVE_RESULT_USER_QUESTION_DATA_ANSWER");
export const deleteResultUserQuestionDataAnswer = createAction("[GamesUser] DELETE_RESULT_USER_QUESTION_DATA_ANSWER");
export const clearAllAnsweredQuestions = createAction("[Results] DELETE_DATA_INCLUDE_AFTER_RESULT");
export const saveCredentialUser = createAction<CredentialUser>("[api] SAVE_CREDENTIAL_USER");
export const saveUserGames = createAction<QuestionDataAnswer[][]>("[ShowResultsUsers] SAVE_USER_GAMES");
export const saveUsers = createAction<ShowResultUserInterface[]>("[ShowResultsUsers] SAVE_USERS");
export const deleteUserGames = createAction("[ShowResultsUsers] DELETE_USER_GAMES");
export const deleteUserInformation = createAction("[Header] DELETE_USER_INFORMATION");
export const deleteUsers = createAction<number | number[]>("[Dropdown] DELETE_USER");
export const isMultiPlayer = createAction<boolean>("[MainGame] IS_MULTI_PLAYER");
export const updateUserName = createAction<UserName>("[ShowResultsUsers] UPDATE_USER_NAME");
