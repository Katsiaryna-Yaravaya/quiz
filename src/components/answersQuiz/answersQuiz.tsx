import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../redux/root-reducer'

import { AnswerItem, ArrowButtons, Question, QuestionCount } from '../index'

import { RESULTS } from '../../constants/routs.constants'

import { generalIcon } from '../../asserts/imgIcon'

import './index.css'

const AnswersQuiz = () => {
  const { questionsResult, counter } = useSelector((state: RootState) => state.data)
  const history = useHistory()
  const letterMapping: string[] = ['A', 'B', 'C', 'D']

  return (
    <form className="quiz-form">
      <div className="quiz-form__travel-icon">
        <img className="quiz-form__icon" src={generalIcon} alt="generalIcon" />
      </div>
      <QuestionCount />
      <Question />

      {questionsResult.map((itemResult, idxResult) => {
        if (idxResult === counter - 1) {
          return itemResult.currentQuestion.allAnswers?.map((item, idx) => {
            return (
              <AnswerItem
                letter={letterMapping[idx]}
                key={idx}
                answerStyleStateValue={itemResult.choseByUser[idx]}
                answer={item}
              />
            )
          })
        }
      })}

      <ArrowButtons />

      <div className="return-result">
        <button className="return-result__button" onClick={() => history.push(RESULTS)}>
          return Result
        </button>
      </div>
    </form>
  )
}

export default AnswersQuiz
