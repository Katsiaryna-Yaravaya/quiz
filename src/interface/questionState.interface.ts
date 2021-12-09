import {
  Countries, QuestionDataAnswer, CredentialUser, ShowResultUserInterface, UsersId, UserIdQuestions,
} from "./index.interface";

export interface QuestionState {
  allServerDataCountries: Countries[];
  countriesUserQuestions: UsersId;
  questionCounter: number;
  currentQuestion: UserIdQuestions;
  questionsResult: QuestionDataAnswer[];
  credentialUser: CredentialUser[];
  userGames: QuestionDataAnswer[][];
  users: ShowResultUserInterface[];
  isTwoPlayers: boolean;
  currentUserIndex: number;
}
