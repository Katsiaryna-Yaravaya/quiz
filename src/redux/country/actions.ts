import * as types from './types'

export const saveCountries = countries => ({
  type: types.countriesActionTypes.GET_COUNTRIES,
  payload: countries
})

export const saveCountriesUserQuestions = countriesUserQuestions => ({
  type: types.countriesActionTypes.SAVE_COUNTRIES_USER_QUESTIONS,
  payload: countriesUserQuestions
})

export const saveCounter = counter => ({
  type: types.countriesActionTypes.SAVE_COUNTER,
  payload: counter
})

export const saveCurrentQuestion = currentQuestion => ({
  type: types.countriesActionTypes.SAVE_CURRENT_QUESTION,
  payload: currentQuestion
})

export const showGenerateAnswer = answers => ({
  type: types.countriesActionTypes.SHOW_GENERATE_ANSWERS,
  payload: answers
})

export const deleteData = () => ({
  type: types.countriesActionTypes.DELETE_DATA
})

export const saveQuestionDataAnswer = data => ({
  type: types.countriesActionTypes.SAVE_QUESTION_DATA_ANSWER,
  payload: data
})

export const clearAllAnsweredQuestions = () => ({
  type: types.countriesActionTypes.CLEAR_ALL_ANSWERED_QUESTIONS
})
