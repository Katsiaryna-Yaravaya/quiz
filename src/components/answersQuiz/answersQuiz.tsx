import { generalIcon } from '../../asserts/imgIcon'
import { Answers, Question, QuestionCount } from '../index'

const AnswersQuiz = () => {
  return (
    <form className="quiz-form">
      <div className="quiz-form__travel-icon">
        <img className="quiz-form__icon" src={generalIcon} alt="generalIcon" />
      </div>
      <QuestionCount />
      <Question />
      <Answers />
    </form>
  )
}

export default AnswersQuiz
