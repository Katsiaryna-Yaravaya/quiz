import { useSelector } from 'react-redux'

import { RootState } from '../../redux/root-reducer'

import './index.css'
import { GENERATE_NUMBER_INDEX_QUESTION_COUNTRY } from '../../constants/general.constants.'

const QuestionCount = () => {
  const { countriesUserQuestions, counter, questionsResult } = useSelector((state: RootState) => state.data)

  return (
    <div className="questionCount">
      Question
      {counter ? <span> {counter} </span> : null}
      of
      {countriesUserQuestions || questionsResult ? (
        <span> {questionsResult.length || GENERATE_NUMBER_INDEX_QUESTION_COUNTRY} </span>
      ) : null}
    </div>
  )
}

export default QuestionCount
