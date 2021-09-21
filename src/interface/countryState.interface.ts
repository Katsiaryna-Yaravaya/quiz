import { CurrentQuestion } from './currentQuestion.interface'

export interface CountryState {
  countries: []
  generateCountriesInformation: []
  counter: number
  currentQuestion: CurrentQuestion
}