import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'

import { Answers, Question, QuestionCount } from '../index'
import {
  getCurrentQuestion,
  savedAllAnswers,
  saveGenerateCountriesInformation,
  showGenerateAnswer
} from '../../redux/country/actions'
import { generateIndexCountry } from '../../utils'
import { Countries } from '../../interface/country.interface'
import {
  GENERATE_NUMBER_INDEX_QUESTION_COUNTRY_INFORMATION,
  GENERATE_NUMBER_INDEX_ANSWER_COUNTRY_INFORMATION
} from '../../constants/general.constants.'
import { generalIcon } from '../../asserts/imgIcon'

import './index.css'

const Quiz = () => {
  let {
    counter,
    currentQuestion: { name, allAnswers },
    countries,
    generateCountriesInformation,
    showAllDataAfterResult: { allSavedAnswer }
  } = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    if (countries.length) {
      const generateQuestionCountryInformation: Countries[] =
        generateIndexCountry(
          countries,
          GENERATE_NUMBER_INDEX_QUESTION_COUNTRY_INFORMATION
        )
      dispatch(
        saveGenerateCountriesInformation(generateQuestionCountryInformation)
      )
    }
  }, [countries])

  useEffect(() => {
    dispatch(getCurrentQuestion(generateCountriesInformation[counter - 1]))
  }, [generateCountriesInformation, counter])

  useEffect(() => {
    if (countries.length && name) {
      const generateAnswerCountryInformation: Countries[] =
        generateIndexCountry(
          countries,
          GENERATE_NUMBER_INDEX_ANSWER_COUNTRY_INFORMATION,
          name
        )

      const generateAnswer = generateAnswerCountryInformation
        .map(item => item.name)
        .concat(name)
        .sort(() => {
          return 0.5 - Math.random()
        })

      dispatch(showGenerateAnswer(generateAnswer))
    }
  }, [name])

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
