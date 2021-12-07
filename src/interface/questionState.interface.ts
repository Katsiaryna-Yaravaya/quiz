import {
  Countries, CurrentQuestion, QuestionDataAnswer, CredentialUser, ShowResultUser,
} from "./index.interface";

export interface QuestionState {
  allServerDataCountries: Countries[];
  countriesUserQuestions: Countries[];
  questionCounter: number;
  currentQuestion: CurrentQuestion;
  questionsResult: QuestionDataAnswer[];
  credentialUser: CredentialUser[];
  userGames: QuestionDataAnswer[][];
  users: ShowResultUser[];
  isTwoPlayers: boolean;
}
