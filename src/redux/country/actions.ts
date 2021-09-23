import * as types from './types'

export const saveCountries = countries => ({
  type: types.countriesActionTypes.GET_COUNTRIES,
  payload: countries
})

export const saveGenerateCountriesInformation = countriesInformation => ({
  type: types.countriesActionTypes.SET_GENERATE_COUNTRIES_INFORMATION,
  payload: countriesInformation
})

export const saveCounter = counter => ({
  type: types.countriesActionTypes.SET_COUNTER,
  payload: counter
})

export const getCurrentQuestion = currentQuestion => ({
  type: types.countriesActionTypes.GET_CURRENT_QUESTION,
  payload: currentQuestion
})

export const showGenerateAnswer = answers => ({
  type: types.countriesActionTypes.GENERATE_ANSWERS,
  payload: answers
})

export const deleteData = () => ({
  type: types.countriesActionTypes.DELETE_DATA
})

export const saveQuestionDataAnswer = data => ({
  type: types.countriesActionTypes.SAVE_QUESTION_DATA_ANSWER,
  payload: data
})

export const deleteDataIncludeAfterResult = () => ({
  type: types.countriesActionTypes.DELETE_DATA_INCLUDE_AFTER_RESULT
})
