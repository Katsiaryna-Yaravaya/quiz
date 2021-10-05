import * as types from './types'
import {Countries, CountryUserQuestion, CurrentQuestion, QuestionDataAnswer} from '../../interface/index.interface'

export const saveCountries = (countries): {payload: Countries[], type: string} => ({
  type: types.countriesActionTypes.GET_COUNTRIES,
  payload: countries
})

export const saveCountriesUserQuestions = (countriesUserQuestions): {payload: CountryUserQuestion[], type: string} => ({
  type: types.countriesActionTypes.SAVE_COUNTRIES_USER_QUESTIONS,
  payload: countriesUserQuestions
})

export const saveCounter = (counter): {payload: number, type: string} => ({
  type: types.countriesActionTypes.SAVE_COUNTER,
  payload: counter
})

export const saveCurrentQuestion = (currentQuestion): {payload: CurrentQuestion, type: string} => ({
  type: types.countriesActionTypes.SAVE_CURRENT_QUESTION,
  payload: currentQuestion
})

export const showGenerateAnswer = (answers): {payload: string[], type: string} => ({
  type: types.countriesActionTypes.SHOW_GENERATE_ANSWERS,
  payload: answers
})

export const deleteData = (): {type: string} => ({
  type: types.countriesActionTypes.DELETE_DATA
})

export const saveQuestionDataAnswer = (data): {payload: QuestionDataAnswer[], type: string} => ({
  type: types.countriesActionTypes.SAVE_QUESTION_DATA_ANSWER,
  payload: data
})

export const clearAllAnsweredQuestions = (): {type: string} => ({
  type: types.countriesActionTypes.CLEAR_ALL_ANSWERED_QUESTIONS
})

export const saveCredentials = ( credentials ) => ({
  type: types.countriesActionTypes.GET_CREDENTIALS,
  payload: credentials
})

export const saveCredentialUser = ( credentialUser ) => ({
  type: types.countriesActionTypes.SAVE_CREDENTIAL_USER,
  payload: credentialUser
})