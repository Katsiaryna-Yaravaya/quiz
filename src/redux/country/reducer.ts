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
  showAllDataAfterResult: {
    chooseByUser: [],
    allSavedAnswer: [],
    correctAnswer: [],
    nameQuestion: []
  }
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
    case types.countriesActionTypes.DELETE_DATA:
      return {
        ...state,
        countries: [],
        generateCountriesInformation: [],
        counter: 1,
        currentQuestion: {
          name: '',
          flag: '',
          capital: '',
          allAnswers: []
        },
        showAllDataAfterResult: {
          chooseByUser: [],
          allSavedAnswer: [],
          correctAnswer: [],
          nameQuestion: []
        }
      }
    case types.countriesActionTypes.CHOOSE_BY_USER_ANSWER:
      return {
        ...state,
        showAllDataAfterResult: {
          ...state.showAllDataAfterResult,
          chooseByUser: [...action.payload]
        }
      }
    case types.countriesActionTypes.SAVE_ALL_ANSWERS:
      return {
        ...state,
        showAllDataAfterResult: {
          ...state.showAllDataAfterResult,
          allSavedAnswer: [...action.payload]
        }
      }
    case types.countriesActionTypes.SAVE_CORRECT_ANSWER:
      return {
        ...state,
        showAllDataAfterResult: {
          ...state.showAllDataAfterResult,
          correctAnswer: [...action.payload]
        }
      }
    case types.countriesActionTypes.NAME_QUESTION:
      return {
        ...state,
        showAllDataAfterResult: {
          ...state.showAllDataAfterResult,
          nameQuestion: [...action.payload]
        }
      }

    case types.countriesActionTypes.DELETE_DATA_INCLUDE_DATA_AFTER_RESULT:
      return {
        ...state,
        countries: [],
        generateCountriesInformation: [],
        counter: 1,
        currentQuestion: {
          name: '',
          flag: '',
          capital: '',
          allAnswers: []
        },
        showAllDataAfterResult: {
          ...state.showAllDataAfterResult
        }
      }
    default:
      return state
  }
}

// showAllDataAfterResult: {
// ...state.showAllDataAfterResult
// }

export default countryReducer
