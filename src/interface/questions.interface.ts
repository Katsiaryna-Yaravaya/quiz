import { CurrentQuestion } from "./currentQuestion.interface";

export interface UserIdQuestions {
  [userId: number]: CurrentQuestion;
}
