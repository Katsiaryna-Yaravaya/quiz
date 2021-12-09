import { FC, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { usersId, getStateData } from "../../redux/country/selectors";

import { Answers, Question, QuestionCount } from "../index";

import { answerOptions, choseCurrentQuestion, generateCountriesUserQuestions } from "./effects";

import { generalIcon } from "../../asserts/imgIcon";

import "./index.css";

const Quiz: FC = () => {
  const {
    questionCounter,
    currentQuestion,
    allServerDataCountries,
    countriesUserQuestions,
  } = useSelector(getStateData);
  const ids = useSelector(usersId);
  const dispatch = useDispatch();
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  useEffect(() => {
    if (!currentUserId && ids.length) {
      setCurrentUserId(ids[0]);
    }
  }, []);

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
    if (currentUserId === ids[0]) {
      setCurrentUserId(ids[1]);
    } else setCurrentUserId(ids[0]);
  };

  return (
    <>
      <h1 className="main__title">COUNTRY QUIZ</h1>
      <form className="quiz-form">
        <div className="quiz-form__travel-icon">
          <img className="quiz-form__icon" src={generalIcon} alt="generalIcon" />
        </div>

        <QuestionCount id={currentUserId} />
        <Question capital={currentUserId ? currentQuestion[currentUserId]?.capital : null} flag={currentUserId ? currentQuestion[currentUserId]?.flag : null} />
        <Answers id={currentUserId} selectedId={selectedId} />
      </form>
    </>
  );
};

export default Quiz;
