import { AllSavedAnswer } from './index.interface'

export interface QuestionDataAnswer {
  chooseByUser: string
  allSavedAnswers: AllSavedAnswer[]
  correctAnswer: string
  titleQuestion: string
}
