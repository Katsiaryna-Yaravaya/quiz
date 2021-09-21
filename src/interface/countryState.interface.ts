import { CurrentQuestion } from './currentQuestion.interface'

export interface CountryState {
  countries: any[]
  generateCountriesInformation: any[]
  counter: number
  currentQuestion: CurrentQuestion
}
