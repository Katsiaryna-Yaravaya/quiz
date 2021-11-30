import { FC } from "react";

import "./index.css";
import { useTranslation } from "react-i18next";

interface Props {
  flag: string | undefined;
  capital: string | undefined;
}

const Question: FC<Props> = ({ flag, capital }) => {
  const { t } = useTranslation();

  return (
    <h2 className="question">
      {capital ? (
        `${capital} ${t("isTheCapitalOf")}`
      ) : (
        <>
          <img className="question__title-flag" src={flag} alt="flag" />
          <p>
            { t("whichCountryDoesThisFlagBelongTo") }
            ?
          </p>
        </>
      )}
    </h2>
  );
};

export default Question;
