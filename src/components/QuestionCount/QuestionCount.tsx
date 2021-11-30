import { FC } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { RootState } from "../../redux/root-reducer";

import { GENERATE_NUMBER_INDEX_QUESTION_COUNTRY } from "../../constants/general.constants";

import "./index.css";

const QuestionCount: FC = () => {
  const { countriesUserQuestions, counter, questionsResult } = useSelector((state: RootState) => state.data);
  const { t } = useTranslation();

  return (
    <div className="questionCount">
      {t("question")}
      <span>
        {" "}
        {counter}
        {" "}
      </span>
      {t("of")}
      <span>
        {" "}
        {countriesUserQuestions.length
          ? GENERATE_NUMBER_INDEX_QUESTION_COUNTRY
          : questionsResult.length}
      </span>
    </div>
  );
};

export default QuestionCount;
