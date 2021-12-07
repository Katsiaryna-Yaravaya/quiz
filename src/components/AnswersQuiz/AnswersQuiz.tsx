import { FC } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../redux/root-reducer";

import {
  AnswerItem, ArrowButtons, Question, QuestionCount,
} from "../index";

import { RESULTS } from "../../constants/routs.constants";
import { QuestionDataAnswer } from "../../interface/questionDataAnswer.interface";

import { generalIcon } from "../../asserts/imgIcon";

import "./index.css";

const AnswersQuiz: FC = () => {
  const { questionsResult, questionCounter } = useSelector((state: RootState) => state.data);
  const history = useHistory();

  return (
    <>
      <h1 className="main__title">COUNTRY QUIZ</h1>
      <form className="quiz-form">
        <div className="quiz-form__travel-icon">
          <img className="quiz-form__icon" src={generalIcon} alt="generalIcon" />
        </div>
        <QuestionCount />
        <Question capital={questionsResult[questionCounter - 1].currentQuestion.capital} flag={questionsResult[questionCounter - 1].currentQuestion.flag} />

        {questionsResult.map((itemResult: QuestionDataAnswer, idxResult: number) => {
          if (idxResult === questionCounter - 1) {
            return itemResult.currentQuestion.allAnswers?.map((item: string, idx: number) => (
              <AnswerItem numeric={idx + 1} key={idx} answerStyleStateValue={itemResult.answerState[idx]} answer={item} />
            ));
          }
        })}

        <ArrowButtons />
        <div className="return-result">
          <button className="return-result__button" onClick={() => history.push(RESULTS)}>
            return Result
          </button>
        </div>
      </form>
    </>
  );
};

export default AnswersQuiz;
