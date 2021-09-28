import { useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'

import { Answers, ArrowButtons, Question, QuestionCount } from '../index'

import { generalIcon } from '../../asserts/imgIcon'

const AnswersQuiz = () => {
  const { questionsResult, counter } = useSelector((state: RootState) => state.data)

  console.log('questionsResult', questionsResult)
  console.log('counter', counter)

  return (
    <form className="quiz-form">
      <div className="quiz-form__travel-icon">
        <img className="quiz-form__icon" src={generalIcon} alt="generalIcon" />
      </div>
      <QuestionCount />
      <Question />
      <Answers />
      <ArrowButtons />
    </form>
  )
}

export default AnswersQuiz
