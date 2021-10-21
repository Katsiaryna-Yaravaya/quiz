import {FC} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";

import { Answers, Question, QuestionCount } from "../index";
import {saveCurrentQuestion, showGenerateAnswer} from "../../redux/country/actions";

import {qwerty} from "./effect";

import { generateIndexCountry } from "../../core/utils";
import { Countries } from "../../interface/countries.interface";
import {
  GENERATE_NUMBER_INDEX_INCORRECT_ANSWER_COUNTRY,
} from "../../constants/general.constants";

import { generalIcon } from "../../asserts/imgIcon";

import "./index.css";

const Quiz: FC = () => {
  const {
    counter,
    currentQuestion: { correctAnswer, capital, flag },
    allServerDataCountries,
    countriesUserQuestions,
  } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(qwerty());
  }, [allServerDataCountries]);

  useEffect(() => {
      const currentUserQuestion: Countries = countriesUserQuestions[counter - 1];
      if (currentUserQuestion) {
        const { name, capital, flag} =  currentUserQuestion;
        dispatch(saveCurrentQuestion({correctAnswer: name, capital, flag} ))
      }
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
      dispatch(showGenerateAnswer(generateAnswers));
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
