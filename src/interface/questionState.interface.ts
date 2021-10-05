import {
  Countries,
  CurrentQuestion,
  CountryUserQuestion,
  QuestionDataAnswer, Credentials, CredentialUser
} from './index.interface'

export interface QuestionState {
  allServerDataCountries: Countries[]
  countriesUserQuestions: CountryUserQuestion[]
  counter: number
  currentQuestion: CurrentQuestion
  questionsResult: QuestionDataAnswer[],
  credentials: Credentials[],
  credentialUser: CredentialUser
}
