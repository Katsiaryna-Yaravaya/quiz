import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

import { RootState } from '../../redux/root-reducer'

import { Next } from '../index'
import { RESULTS } from '../../constants/routs.constants'

import './index.css'

const Answers = () => {
  const history = useHistory()
  const {
    currentQuestion: { allAnswers, name }
  } = useSelector((state: RootState) => state.data)
  const [isNextQuestion, setIsNextQuestion] = useState<boolean>(false)
  const letterMapping = ['A', 'B', 'C', 'D']

  const handleIsNextQuestionState = () => {
    setIsNextQuestion(false)
  }

  const handleAnswerClick = (e, answer) => {
    const searchNearParent = e.target.closest('.answer')

    if (answer === name) {
      searchNearParent.classList.add('correct')
      setIsNextQuestion(true)
    }

    if (answer !== name) {
      searchNearParent.classList.add('incorrect')

      allAnswers.forEach((item, i) => {
        if (item === name) {
          const answerButtons = Array.from(
            document.body.getElementsByClassName('answer')
          )
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
