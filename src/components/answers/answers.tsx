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
    currentQuestion: { allAnswers, name, capital }
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

  // const disableElementByClassName = className => {
  //   const answerButtons = Array.from(
  //       document.body.getElementsByClassName(className)
  //   )
  //   answerButtons.forEach(el => el.classList.add('disable'))
  //   return answerButtons
  // }
  // const answerButtons = disableElementByClassName('answer')

  const saveCard = answer => {
    dispatch(
      saveQuestionDataAnswer({
        chooseByUser: answer,
        currentQuestion: { allAnswers, name, capital }
      })
    )
  }

  const handleAnswerClick = answer => {
    if (isSelectedAnswer) {
      return
    }
    setIsSelectedAnswer(true)
    const resultState: AnswerState[] = []

    allAnswers.forEach((answerItem: string) => {
      const currentAnswerState: AnswerState =
        answerItem === name
          ? AnswerState.CORRECT
          : answerItem === answer && answer !== name
          ? AnswerState.INCORRECT
          : AnswerState.DEFAULT

      if (currentAnswerState === AnswerState.CORRECT && answer === name) {
        setIsNextQuestion(true)
      }
      if (currentAnswerState === AnswerState.INCORRECT) {
        setTimeout(() => history.push(RESULTS), 2000)
      }
      resultState.push(currentAnswerState)
    })
    setAnswerStateValue(resultState)
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
