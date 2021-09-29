import { useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'

import { AnswerItem, ArrowButtons, Question, QuestionCount } from '../index'

import { generalIcon } from '../../asserts/imgIcon'

const AnswersQuiz = () => {
  const { questionsResult, counter } = useSelector((state: RootState) => state.data)
  const letterMapping = ['A', 'B', 'C', 'D']

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
                answerStyleStateValue={itemResult.chooseByUser[idx]}
                answer={item}
              />
            )
          })
        }
      })}
      <ArrowButtons />
    </form>
  )
}

export default AnswersQuiz
