import {FC} from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/root-reducer";

import { GENERATE_NUMBER_INDEX_QUESTION_COUNTRY } from "../../constants/general.constants";

import "./index.css";

const QuestionCount: FC = () => {
  const { countriesUserQuestions, counter, questionsResult } = useSelector((state: RootState) => state.data);

  return (
    <div className="questionCount">
      Question
      <span> {counter} </span>
      of
      {countriesUserQuestions || questionsResult ? (
        <span> {countriesUserQuestions.length
            ? GENERATE_NUMBER_INDEX_QUESTION_COUNTRY
            : questionsResult.length}
        </span>
      ) : null}
    </div>
  );
};

export default QuestionCount;
