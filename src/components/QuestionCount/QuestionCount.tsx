import { FC } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { getId, getStateData } from "../../redux/country/selectors";

import { GENERATE_NUMBER_INDEX_QUESTION_COUNTRY } from "../../constants/general.constants";

import "./index.css";

const QuestionCount: FC = () => {
  const { countriesUserQuestions, questionCounter, questionsResult } = useSelector(getStateData);
  // const ids = useSelector(getId);
  const { t } = useTranslation();

  return (
    <div className="questionCount">
      {t("question")}
      <span>
        {" "}
        {questionCounter}
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
