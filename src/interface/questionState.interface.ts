import {
  Countries, CurrentQuestion, QuestionDataAnswer, CredentialUser,
} from "./index.interface";

export interface QuestionState {
  allServerDataCountries: Countries[];
  countriesUserQuestions: Countries[];
  counter: number;
  currentQuestion: CurrentQuestion;
  questionsResult: QuestionDataAnswer[];
  credentialUser: CredentialUser;
  userGames: QuestionDataAnswer[][];
}
