import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

import { RootState } from '../../redux/root-reducer'

import {
  chooseByUserAnswer,
  savedAllAnswers,
  savedCorrectAnswers,
  savedCorrectNameAnswer
} from '../../redux/country/actions'

import { Next } from '../index'
import { RESULTS } from '../../constants/routs.constants'

import './index.css'

const Answers = () => {
  const history = useHistory()
  const {
    currentQuestion: { allAnswers, name, flag, capital },
    showAllDataAfterResult: {
      chooseByUser,
      allSavedAnswer,
      correctAnswer,
      nameQuestion
    }
  } = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch()
  const [isNextQuestion, setIsNextQuestion] = useState<boolean>(false)
  const [isSelectedAnswer, setIsSelectedAnswer] = useState<boolean>(false)
  const letterMapping = ['A', 'B', 'C', 'D']

  const handleIsNextQuestionState = () => {
    setIsSelectedAnswer(false)
    setIsNextQuestion(false)
  }

  const disableElementByClassName = className => {
    const answerButtons = Array.from(
      document.body.getElementsByClassName(className)
    )
    answerButtons.forEach(el => el.classList.add('disable'))
    return answerButtons
  }

  const handleAnswerClick = (e, answer) => {
    const saveAllClickAnswers = chooseByUser.concat(answer)
    dispatch(chooseByUserAnswer(saveAllClickAnswers))

    // @ts-ignore
    const saveGenerateAnswer = allSavedAnswer.concat({ ...allAnswers })
    dispatch(savedAllAnswers(saveGenerateAnswer))

    const correctQuestionNameCapital = nameQuestion.concat(capital)
    const correctQuestionNameFlag = nameQuestion.concat(flag)
    dispatch(
      savedCorrectNameAnswer(
        correctQuestionNameCapital || correctQuestionNameFlag
      )
    )

    const savedCorrectName = correctAnswer.concat(name)
    dispatch(savedCorrectAnswers(savedCorrectName))

    if (isSelectedAnswer) {
      return
    }

    const searchNearParent = e.target.closest('.answer')
    setIsSelectedAnswer(true)
    const answerButtons = disableElementByClassName('answer')

    if (answer === name) {
      searchNearParent.classList.add('correct')
      setIsNextQuestion(true)
    }

    if (answer !== name) {
      searchNearParent.classList.add('incorrect')

      allAnswers.forEach((item, i) => {
        if (item === name) {
          const correctAnswer = answerButtons[i]
          setTimeout(() => correctAnswer.classList.add('correct'), 250)
        }
      })

      setIsNextQuestion(false)
      setTimeout(() => history.push(RESULTS), 2000)
    }
  }

  return (
    <>
      {allAnswers
        ? allAnswers.map((answer, idx) => {
            return (
              <div
                key={idx}
                onClick={e => handleAnswerClick(e, answer)}
                className="answer"
              >
                <span className="answer__letter">
                  {letterMapping.map((item, i) => {
                    if (i === idx) {
                      return item
                    }
                  })}
                </span>

                <span title={answer} className="answer__text">
                  {' '}
                  {answer}{' '}
                </span>
              </div>
            )
          })
        : null}

      {isNextQuestion ? (
        <Next isNextQuestionState={handleIsNextQuestionState} />
      ) : null}
    </>
  )
}

export default Answers
