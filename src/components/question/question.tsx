import { BasePhraseQuestion } from "../../interface/index.interface";

import "./index.css";

interface Props {
  flag: string | undefined;
  capital: string | undefined;
}

const Question = ({ flag, capital }: Props) => {
  const basePhraseQuestion: BasePhraseQuestion = {
    country: " is the capital of",
    flag: "Which country does this flag belong to?",
  };

  return (
    <h2 className="question">
      {capital ? (
        capital + basePhraseQuestion.country
      ) : (
        <>
          <img className="question__title-flag" src={flag} alt="flag" />
          <p>{basePhraseQuestion.flag}</p>
        </>
      )}
    </h2>
  );
};

export default Question;
