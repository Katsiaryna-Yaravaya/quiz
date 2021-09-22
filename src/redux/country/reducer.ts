import * as types from './types'
import { CountryState } from '../../interface/countryState.interface'

const INITIAL_STATE: CountryState = {
  countries: [],
  generateCountriesInformation: [],
  counter: 1,
  currentQuestion: {
    name: '',
    flag: '',
    capital: '',
    allAnswers: []
  },
  allDataAfterResult: []
}

const countryReducer = (state = INITIAL_STATE, action): CountryState => {
  switch (action.type) {
    case types.countriesActionTypes.GET_COUNTRIES:
      return {
        ...state,
        countries: [...action.payload]
      }
    case types.countriesActionTypes.SET_GENERATE_COUNTRIES_INFORMATION:
      return {
        ...state,
        generateCountriesInformation: [...action.payload]
      }
    case types.countriesActionTypes.SET_COUNTER:
      return {
        ...state,
        counter: action.payload
      }
    case types.countriesActionTypes.GET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: { ...action.payload }
      }
    case types.countriesActionTypes.GENERATE_ANSWERS:
      return {
        ...state,
        currentQuestion: {
          ...state.currentQuestion,
          allAnswers: [...action.payload]
        }
      }
    case types.countriesActionTypes.SAVE_QUESTION_DATA_ANSWER:
      return {
        ...state,
        allDataAfterResult: [...state.allDataAfterResult , action.payload]
      }

    default:
      return state
  }
}

export default countryReducer
