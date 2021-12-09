import { FC } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { usersId, getStateData } from "../../redux/country/selectors";

import { GENERATE_NUMBER_INDEX_QUESTION_COUNTRY } from "../../constants/general.constants";

import "./index.css";

interface Props {
  id: number | null;
}

const QuestionCount: FC<Props> = ({ id }) => {
  const { countriesUserQuestions, questionCounter, questionsResult } = useSelector(getStateData);
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
        {countriesUserQuestions[id]?.length
          ? GENERATE_NUMBER_INDEX_QUESTION_COUNTRY
          : questionsResult.length}
      </span>
    </div>
  );
};

export default QuestionCount;
