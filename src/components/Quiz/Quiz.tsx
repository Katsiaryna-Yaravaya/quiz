import {FC} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";

import { Answers, Question, QuestionCount } from "../index";
import {saveCurrentQuestion, saveCountriesUserQuestions, showGenerateAnswer} from "../../redux/country/actions";

import { generateIndexCountry } from "../../core/utils";
import { Countries } from "../../interface/countries.interface";
import { CountryUserQuestion } from "../../interface/countryUserQuestion.interface";
import { QuestionClass } from "../../dto/questionClass";
import {
  GENERATE_NUMBER_INDEX_QUESTION_COUNTRY,
  GENERATE_NUMBER_INDEX_INCORRECT_ANSWER_COUNTRY,
} from "../../constants/general.constants";

import { generalIcon } from "../../asserts/imgIcon";

import "./index.css";

const Quiz: FC = () => {
  let {
    counter,
    currentQuestion: { correctAnswer, capital, flag },
    allServerDataCountries,
    countriesUserQuestions,
  } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allServerDataCountries.length) {
      const generatedUserQuestionCountries: Countries[] = generateIndexCountry(
        allServerDataCountries,
        GENERATE_NUMBER_INDEX_QUESTION_COUNTRY,
      );
      dispatch(saveCountriesUserQuestions(generatedUserQuestionCountries));
    }
  }, [allServerDataCountries]);

  useEffect(() => {
    const currentUserQuestion: CountryUserQuestion = countriesUserQuestions[counter - 1];
    dispatch(saveCurrentQuestion(new QuestionClass({ ...currentUserQuestion })));
  }, [countriesUserQuestions, counter]);

  useEffect(() => {
    if (allServerDataCountries.length && correctAnswer) {
      const generatedIncorrectAnswers: Countries[] = generateIndexCountry(
        allServerDataCountries,
        GENERATE_NUMBER_INDEX_INCORRECT_ANSWER_COUNTRY,
        correctAnswer
      );

      const generateAnswers: string[] = generatedIncorrectAnswers
        .map((item) => item.name)
        .concat(correctAnswer)
        .sort(() => {
          return 0.5 - Math.random();
        });
      dispatch(showGenerateAnswer({ number: 3 }));
    }
  }, [correctAnswer]);

  return (
    <>
      <h1 className="main__title">COUNTRY QUIZ</h1>
      <form className="quiz-form">
        <div className="quiz-form__travel-icon">
          <img className="quiz-form__icon" src={generalIcon} alt="generalIcon"/>
        </div>
        <QuestionCount />
        <Question capital={capital} flag={flag} />
        <Answers />
      </form>
    </>
  );
};

export default Quiz;
