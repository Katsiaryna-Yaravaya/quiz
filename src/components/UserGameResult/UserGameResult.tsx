import { FC } from "react";
import { generatePath, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/root-reducer";

import {
  AnswerItem, ArrowButtons, Question, QuestionCount,
} from "../index";

import { USER_GAMES } from "../../constants/routs.constants";
import { deleteUserGames } from "../../redux/country/actions";
import { QuestionDataAnswer, HookParamsInterface } from "../../interface/index.interface";

import { generalIcon } from "../../asserts/imgIcon";

import "./index.css";

const UserGameResult: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { questionsResult, questionCounter } = useSelector((state: RootState) => state.data);
  const { id } = useParams<HookParamsInterface>();

  const handleClick = (): void => {
    dispatch(deleteUserGames());
    history.push(generatePath(USER_GAMES, { id }));
  };

  return (
    <>
      <div className="back">
        <button className="back__button" onClick={handleClick}>back</button>
      </div>
      <h1 className="main__title">COUNTRY QUIZ</h1>
      <form className="quiz-form">
        <div className="quiz-form__travel-icon">
          <img className="quiz-form__icon" src={generalIcon} alt="generalIcon" />
        </div>
        <QuestionCount />
        <Question capital={questionsResult[questionCounter - 1].currentQuestion.capital} flag={questionsResult[questionCounter - 1].currentQuestion.flag} />

        {questionsResult.map((itemResult: QuestionDataAnswer, idxResult: number) => {
          if (idxResult === questionCounter - 1) {
            return itemResult.currentQuestion.allAnswers?.map((item, idx) => (
              <AnswerItem
                numeric={idx + 1}
                key={idx}
                answerStyleStateValue={itemResult.answerState[idx]}
                answer={item}
              />
            ));
          }
        })}

        <ArrowButtons />
      </form>
    </>
  );
};

export default UserGameResult;
