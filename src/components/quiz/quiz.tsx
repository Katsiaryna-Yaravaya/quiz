import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'

import { Answers, Question, QuestionCount } from '../index'
import {
  saveCurrentQuestion,
  saveCountriesUserQuestions,
  showGenerateAnswer
} from '../../redux/country/actions'
import { generateIndexCountry } from '../../utils'
import { Countries } from '../../interface/countries.interface'
import {
  GENERATE_NUMBER_INDEX_QUESTION_COUNTRY,
  GENERATE_NUMBER_INDEX_INCORRECT_ANSWER_COUNTRY
} from '../../constants/general.constants.'
import { generalIcon } from '../../asserts/imgIcon'
import {QuestionClass} from "../../dto/questionClass";

import './index.css'

const Quiz = () => {
  let {
    counter,
    currentQuestion: { correctAnswer },
    allServerDataCountries,
    countriesUserQuestions
  } = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    if (allServerDataCountries.length) {
      const generatedUserQuestionCountries: Countries[] =
        generateIndexCountry(
          allServerDataCountries,
          GENERATE_NUMBER_INDEX_QUESTION_COUNTRY
        )
      dispatch(
        saveCountriesUserQuestions(generatedUserQuestionCountries)
      )
    }
  }, [allServerDataCountries])

  useEffect(() => {
    const currentUserQuestion  = countriesUserQuestions[counter - 1];

    dispatch(
      saveCurrentQuestion(new QuestionClass({ ...currentUserQuestion }))
    )
  }, [countriesUserQuestions, counter])


  useEffect(() => {
    if (allServerDataCountries.length && correctAnswer) {
      const generatedIncorrectAnswers: Countries[] =
        generateIndexCountry(
          allServerDataCountries,
          GENERATE_NUMBER_INDEX_INCORRECT_ANSWER_COUNTRY,
            correctAnswer
        )

      const generateAnswers = generatedIncorrectAnswers
        .map(item => item.name)
        .concat(correctAnswer)
        .sort(() => {
          return 0.5 - Math.random()
        })

      dispatch(showGenerateAnswer(generateAnswers))
    }
  }, [correctAnswer])

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
