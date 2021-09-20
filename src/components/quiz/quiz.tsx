import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'

import { Answers, Question, QuestionCount } from '../index'
import {
  getCurrentQuestion,
  saveGenerateCountryInformation,
  showGenerateAnswer
} from '../../redux/country/actions'
import { generateIndexCountry } from '../../utils'
import { Country } from '../../interface/country.interface'
import {
  GENERATE_NUMBER_INDEX_QUESTION_COUNTRY_INFORMATION,
  GENERATE_NUMBER_INDEX_ANSWER_COUNTRY_INFORMATION
} from '../../constants/general.constants.'
import { generalIcon } from '../../asserts/imgIcon'

import './index.css'

const Quiz = () => {
  let { counter, currentQuestion, country } = useSelector(
    (state: RootState) => state.data
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (country.length) {
      const generateQuestionCountryInformation: Country[] =
        generateIndexCountry(
          country,
          GENERATE_NUMBER_INDEX_QUESTION_COUNTRY_INFORMATION
        )
      dispatch(
        saveGenerateCountryInformation(generateQuestionCountryInformation)
      )
      dispatch(getCurrentQuestion(generateQuestionCountryInformation[0]))
    }
  }, [country])

  useEffect(() => {
    if (country.length && counter) {
      const generateAnswerCountryInformation: Country[] = generateIndexCountry(
        country,
        GENERATE_NUMBER_INDEX_ANSWER_COUNTRY_INFORMATION
      )

      const generateAnswer = generateAnswerCountryInformation
        .map(item => item.name)
        .concat(currentQuestion.name)
        .sort(() => {
          return 0.5 - Math.random()
        })

      dispatch(showGenerateAnswer(generateAnswer))
    }
  }, [country, counter, currentQuestion.name])

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

export default Quiz
