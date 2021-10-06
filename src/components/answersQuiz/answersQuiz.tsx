import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../redux/root-reducer";

import { AnswerItem, ArrowButtons, Question, QuestionCount } from "../index";

import { RESULTS } from "../../constants/routs.constants";

import { generalIcon } from "../../asserts/imgIcon";

import "./index.css";

const AnswersQuiz = () => {
  const { questionsResult, counter } = useSelector((state: RootState) => state.data);
  const history = useHistory();

  return (
    <>
      <h1 className="main__title">COUNTRY QUIZ</h1>
      <form className="quiz-form">
        <div className="quiz-form__travel-icon">
          <img className="quiz-form__icon" src={generalIcon} alt="generalIcon"/>
        </div>
        <QuestionCount />
        <Question capital={questionsResult[counter-1].currentQuestion.capital} flag={questionsResult[counter-1].currentQuestion.flag}/>

        {questionsResult.map((itemResult, idxResult) => {
          if (idxResult === counter - 1) {
            return itemResult.currentQuestion.allAnswers?.map((item, idx) => {
              return (
                <AnswerItem
                  numeric={idx + 1}
                  key={idx}
                  answerStyleStateValue={itemResult.choseByUser[idx]}
                  answer={item}
                />
              );
            });
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
