import {
  Countries,
  CurrentQuestion,
  GenerateCountriesInformation,
  ShowAllDataAfterResult
} from './index.interface'

export interface CountryState {
  countries: Countries[]
  generateCountriesInformation: GenerateCountriesInformation[]
  counter: number
  currentQuestion: CurrentQuestion
  showAllDataAfterResult: ShowAllDataAfterResult
}
