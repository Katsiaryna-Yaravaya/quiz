import { QuestionDataAnswer } from "./questionDataAnswer.interface";

export interface ShowResultUser {
  age: string;
  email: string;
  name: string;
  pass: string;
  surname: string;
  id: number;
  userGames: QuestionDataAnswer[][];
}
