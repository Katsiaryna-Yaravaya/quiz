import {
  Countries,
  CurrentQuestion,
  CountryUserQuestion,
  QuestionDataAnswer
} from './index.interface'

export interface QuestionState {
  allServerDataCountries: Countries[]
  countriesUserQuestions: CountryUserQuestion[]
  counter: number
  currentQuestion: CurrentQuestion
  allDataAfterResult: QuestionDataAnswer[]
}
