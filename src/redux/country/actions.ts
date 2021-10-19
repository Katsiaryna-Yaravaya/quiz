import * as types from "./types";
import {Countries, CountryUserQuestion, CredentialUser, CurrentQuestion, QuestionDataAnswer} from "../../interface/index.interface";

export const saveCountries = (payload): { payload: Countries[]; type: string } => ({type: types.countriesActionTypes.GET_COUNTRIES, payload});

export const saveCountriesUserQuestions = (payload): { payload: CountryUserQuestion[]; type: string } => ({type: types.countriesActionTypes.SAVE_COUNTRIES_USER_QUESTIONS, payload});

export const saveCounter = (payload): { payload: number; type: string } => ({type: types.countriesActionTypes.SAVE_COUNTER, payload});

export const saveCurrentQuestion = (payload): { payload: CurrentQuestion; type: string } => ({type: types.countriesActionTypes.SAVE_CURRENT_QUESTION, payload});

export const showGenerateAnswer = (payload): { payload: string[]; type: string } => ({type: types.countriesActionTypes.SHOW_GENERATE_ANSWERS, payload});

export const deleteData = (): { type: string } => ({type: types.countriesActionTypes.DELETE_DATA});

export const saveQuestionDataAnswer = (payload): { payload: QuestionDataAnswer[]; type: string } => ({type: types.countriesActionTypes.SAVE_QUESTION_DATA_ANSWER, payload});

export const clearAllAnsweredQuestions = (): { type: string } => ({type: types.countriesActionTypes.CLEAR_ALL_ANSWERED_QUESTIONS});

export const saveCredentialUser = (payload): {payload: CredentialUser, type: string} => ({type: types.countriesActionTypes.SAVE_CREDENTIAL_USER, payload});