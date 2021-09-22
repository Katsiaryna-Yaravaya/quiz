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

export const chooseByUserAnswer = answer => ({
  type: types.countriesActionTypes.CHOOSE_BY_USER_ANSWER,
  payload: answer
})

export const savedAllAnswers = answers => ({
  type: types.countriesActionTypes.SAVE_ALL_ANSWERS,
  payload: answers
})

export const savedCorrectAnswers = answers => ({
  type: types.countriesActionTypes.SAVE_CORRECT_ANSWER,
  payload: answers
})

export const savedCorrectNameAnswer = name => ({
  type: types.countriesActionTypes.NAME_QUESTION,
  payload: name
})

export const deleteAllDataIncludeDataAfterResult = () => ({
  type: types.countriesActionTypes.DELETE_DATA_INCLUDE_DATA_AFTER_RESULT
})
