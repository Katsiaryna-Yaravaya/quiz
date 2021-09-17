import * as types from './types'

export const saveCountry = country => ({
    type: types.countryActionTypes.GET_COUNTRY,
    payload: country
})

export const saveGenerateCountryInformation = countryInformation => ({
    type: types.countryActionTypes.SET_GENERATE_COUNTRY_INFORMATION,
    payload: countryInformation
})

export const saveCounter = counter => ({
    type: types.countryActionTypes.SET_COUNTER,
    payload: counter
})

export const getCurrentQuestion = currentQuestion => ({
    type: types.countryActionTypes.GET_CURRENT_QUESTION,
    payload: currentQuestion
})

export const showGenerateAnswer = answers => ({
    type: types.countryActionTypes.GENERATE_ANSWERS,
    payload: answers
})

export const deleteData = () => ({
    type: types.countryActionTypes.DELETE_DATA
})

