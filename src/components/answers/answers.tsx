import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { RootState } from '../../redux/root-reducer'

import { saveQuestionDataAnswer } from '../../redux/country/actions'
import { AnswerItem, Next } from '../index'

import { AnswerEnumState } from '../../enum/AnswerState.enum'
import { RESULTS } from '../../constants/routs.constants'

const Answers = () => {
  const {currentQuestion: { allAnswers, correctAnswer, capital }} = useSelector((state: RootState) => state.data)
  const history = useHistory()
  const dispatch = useDispatch()
  const [isNextQuestion, setIsNextQuestion] = useState<boolean>(false)
  const [isSelectedAnswer, setIsSelectedAnswer] = useState<boolean>(false)
  const [answerStyleStateValue, setAnswerStyleStateValue] = useState<AnswerEnumState[]>([
    AnswerEnumState.DEFAULT,
    AnswerEnumState.DEFAULT,
    AnswerEnumState.DEFAULT,
    AnswerEnumState.DEFAULT
  ])
  const letterMapping = ['A', 'B', 'C', 'D']

  const handleIsNextQuestionState = () => {
    setIsSelectedAnswer(false)
    setIsNextQuestion(false)
  }

  useEffect(() => {
    allAnswers && setAnswerStyleStateValue(Array(allAnswers.length).fill(AnswerEnumState.DEFAULT, 0, allAnswers.length))
  }, [allAnswers])

  const saveCard = resultState => {
    dispatch(saveQuestionDataAnswer({
        chooseByUser: resultState,
        currentQuestion: { allAnswers, correctAnswer, capital }
    }))
  }

  const defineAnswersState = (answer): AnswerEnumState[] => {
    const resultState: AnswerEnumState[] = [];

    allAnswers?.forEach((answerItem: string) => {
      const currentAnswerState: AnswerEnumState =
        answerItem === correctAnswer
          ? AnswerEnumState.CORRECT
          : answerItem === answer && answer !== correctAnswer
          ? AnswerEnumState.INCORRECT
          : AnswerEnumState.DISABLED

      if (currentAnswerState === AnswerEnumState.CORRECT && answer === correctAnswer) {
        setIsNextQuestion(true)
      }
      if (currentAnswerState === AnswerEnumState.INCORRECT) {
        setTimeout(() => history.push(RESULTS), 2000)
      }
      resultState.push(currentAnswerState)
    });

    return resultState;
  }

  const handleAnswerClick = answer => {
    if (isSelectedAnswer) {
      return
    }
    setIsSelectedAnswer(true)

    const newAnswersState: AnswerEnumState[] = defineAnswersState(answer)

    setAnswerStyleStateValue(newAnswersState)
    saveCard(newAnswersState)
  }

  return (
    <>
      {!!allAnswers &&
        allAnswers.map((answer, idx) => {
          return (
            <AnswerItem
              key={idx}
              letter={letterMapping[idx]}
              answer={answer}
              answerStyleStateValue={answerStyleStateValue[idx]}
              answerClick={() => handleAnswerClick(answer)}
            />
          )
        })}

      {isNextQuestion ? (
        <Next isNextQuestionState={handleIsNextQuestionState} />
      ) : null}
    </>
  )
}

export default Answers
