import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { RootState } from '../../redux/root-reducer'

import { saveQuestionDataAnswer } from '../../redux/country/actions'
import { AnswerItem, Next } from '../index'

import { RESULTS } from '../../constants/routs.constants'
import { AnswerState } from '../../enum/AnswerState.enum'

const Answers = () => {
  const {
    currentQuestion: { allAnswers, correctAnswer, capital }
  } = useSelector((state: RootState) => state.data)
  const history = useHistory()
  const dispatch = useDispatch()
  const [isNextQuestion, setIsNextQuestion] = useState<boolean>(false)
  const [isSelectedAnswer, setIsSelectedAnswer] = useState<boolean>(false)
  const [answerStateValue, setAnswerStateValue] = useState<AnswerState[]>([
    AnswerState.DEFAULT,
    AnswerState.DEFAULT,
    AnswerState.DEFAULT,
    AnswerState.DEFAULT
  ])
  const letterMapping = ['A', 'B', 'C', 'D']

  const handleIsNextQuestionState = () => {
    setIsSelectedAnswer(false)
    setIsNextQuestion(false)
  }

  useEffect(() => {
    allAnswers && setAnswerStateValue(Array(allAnswers.length).fill(AnswerState.DEFAULT, 0, allAnswers.length))
  }, [allAnswers])

  const saveCard = resultState => {
    dispatch(saveQuestionDataAnswer({
        chooseByUser: resultState,
        currentQuestion: { allAnswers, correctAnswer, capital }
    }))
  }

  const handleAnswerClick = answer => {
    if (isSelectedAnswer) {
      return
    }
    setIsSelectedAnswer(true)

    const resultState: AnswerState[] = []
    allAnswers?.forEach((answerItem: string) => {
      const currentAnswerState: AnswerState =
        answerItem === correctAnswer
          ? AnswerState.CORRECT
          : answerItem === answer && answer !== correctAnswer
          ? AnswerState.INCORRECT
          : AnswerState.DISABLE

      if (currentAnswerState === AnswerState.CORRECT && answer === correctAnswer) {
        setIsNextQuestion(true)
      }
      if (currentAnswerState === AnswerState.INCORRECT) {
        setTimeout(() => history.push(RESULTS), 2000)
      }
      resultState.push(currentAnswerState)
    })

    setAnswerStateValue(resultState)
    saveCard(resultState)
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
              answerStateValue={answerStateValue[idx]}
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
