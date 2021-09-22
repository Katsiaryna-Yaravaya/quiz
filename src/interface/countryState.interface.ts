import {
  Countries,
  CurrentQuestion,
  GenerateCountriesInformation,
  QuestionDataAnswer
} from './index.interface'

export interface CountryState {
  countries: Countries[]
  generateCountriesInformation: GenerateCountriesInformation[]
  counter: number
  currentQuestion: CurrentQuestion
  allDataAfterResult: QuestionDataAnswer[]
}
