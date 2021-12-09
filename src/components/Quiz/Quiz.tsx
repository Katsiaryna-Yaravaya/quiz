import { FC, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { usersId, getStateData, usersName } from "../../redux/country/selectors";

import { Answers, Question, QuestionCount } from "../index";

import {
  answerOptions, changeUserId, choseCurrentQuestion, generateCountriesUserQuestions, 
} from "./effects";

import { generalIcon } from "../../asserts/imgIcon";

import "./index.css";

const Quiz: FC = () => {
  const {
    questionCounter,
    currentQuestion,
    allServerDataCountries,
    countriesUserQuestions,
    currentUserIndex,
  } = useSelector(getStateData);
  const ids = useSelector(usersId);
  const name = useSelector(usersName);
  const dispatch = useDispatch();
  const [currentUserId, setCurrentUserId] = useState<number>(currentUserIndex);

  useEffect(() => {
    setCurrentUserId(ids[currentUserIndex]);
  }, [currentUserIndex]);

  useEffect(() => {
    ids.map((id) => dispatch(generateCountriesUserQuestions(id)));
  }, [allServerDataCountries, dispatch]);

  useEffect(() => {
    ids.map((id) => dispatch(choseCurrentQuestion(id)));
  }, [countriesUserQuestions, questionCounter, dispatch]);

  useEffect(() => {
    ids.map((id) => {
      if (allServerDataCountries.length && currentQuestion[id]?.correctAnswer) {
        dispatch(answerOptions(id));
      }
    });
  }, [allServerDataCountries.length, currentQuestion[ids[0]]?.correctAnswer, dispatch]);

  const selectedId = () => {
    dispatch(changeUserId(ids));
  };

  return (
    <>
      <h1 className="main__title">COUNTRY QUIZ</h1>
      <form className="quiz-form">
        <div className="quiz-form__travel-icon">
          <img className="quiz-form__icon" src={generalIcon} alt="generalIcon" />
        </div>

        <div className="header__form">
          <QuestionCount id={currentUserId} />
          <h2 className="header__form-name">{name}</h2>
        </div>

        <Question capital={currentUserId ? currentQuestion[currentUserId]?.capital : null} flag={currentUserId ? currentQuestion[currentUserId]?.flag : null} />
        <Answers id={currentUserId} selectedId={selectedId} />
      </form>
    </>
  );
};

export default Quiz;
