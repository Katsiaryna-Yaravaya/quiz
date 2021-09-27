import * as types from './types'
import { QuestionState } from '../../interface/questionState.interface'

const INITIAL_STATE: QuestionState = {
  allServerDataCountries: [],
  countriesUserQuestions: [],
  counter: 1,
  currentQuestion: {
    correctAnswer: '',
    flag: '',
    capital: '',
    allAnswers: []
  },
  allDataAfterResult: []
}

const countryReducer = (state = INITIAL_STATE, action): QuestionState => {
  switch (action.type) {
    case types.countriesActionTypes.GET_COUNTRIES:
      return {
        ...state,
        allServerDataCountries: [...action.payload]
      }
    case types.countriesActionTypes.SAVE_COUNTRIES_USER_QUESTIONS:
      return {
        ...state,
        countriesUserQuestions: [...action.payload]
      }
    case types.countriesActionTypes.SAVE_COUNTER:
      return {
        ...state,
        counter: action.payload
      }
    case types.countriesActionTypes.SAVE_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: { ...action.payload }
      }
    case types.countriesActionTypes.SHOW_GENERATE_ANSWERS:
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
        allServerDataCountries: [],
        countriesUserQuestions: [],
        counter: 1,
        currentQuestion: {
          correctAnswer: '',
          flag: '',
          capital: '',
          allAnswers: []
        },
        allDataAfterResult: []
      }
    case types.countriesActionTypes.SAVE_QUESTION_DATA_ANSWER:
      return {
        ...state,
        allDataAfterResult: [...state.allDataAfterResult, action.payload]
      }
    case types.countriesActionTypes.CLEAR_ALL_ANSWERED_QUESTIONS:
      return {
        ...state,
        allServerDataCountries: [],
        countriesUserQuestions: [],
        counter: 1,
        currentQuestion: {
          correctAnswer: '',
          flag: '',
          capital: '',
          allAnswers: []
        },
        allDataAfterResult: [...state.allDataAfterResult]
      }
    default:
      return state
  }
}

export default countryReducer
