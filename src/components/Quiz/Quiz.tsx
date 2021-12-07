import { FC, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";

import { Answers, Question, QuestionCount } from "../index";

import { answerOptions, choseCurrentQuestion, generateCountriesUserQuestions } from "./effects";

import { generalIcon } from "../../asserts/imgIcon";

import "./index.css";

const Quiz: FC = () => {
  const {
    questionCounter,
    currentQuestion: { correctAnswer, capital, flag },
    allServerDataCountries,
    countriesUserQuestions,
    isTwoPlayers,
  } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateCountriesUserQuestions());
  }, [allServerDataCountries, dispatch]);

  useEffect(() => {
    dispatch(choseCurrentQuestion());
  }, [countriesUserQuestions, questionCounter, dispatch]);

  useEffect(() => {
    if (allServerDataCountries.length && correctAnswer) {
      dispatch(answerOptions());
    }
  }, [allServerDataCountries.length, correctAnswer, dispatch]);

  return (
    <>
      <h1 className="main__title">COUNTRY QUIZ</h1>
      <form className="quiz-form">
        <div className="quiz-form__travel-icon">
          <img className="quiz-form__icon" src={generalIcon} alt="generalIcon" />
        </div>
        <QuestionCount />
        <Question capital={capital} flag={flag} />
        <Answers />
      </form>
    </>
  );
};

export default Quiz;
