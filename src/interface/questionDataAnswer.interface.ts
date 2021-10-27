import { CurrentQuestion } from "./index.interface";
import { AnswerEnumState } from "../enum/AnswerState.enum";

export interface QuestionDataAnswer {
  answerState: AnswerEnumState[];
  currentQuestion: CurrentQuestion;
}
