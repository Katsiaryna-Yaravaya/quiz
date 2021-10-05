import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";

import { BasePhraseQuestion } from "../../interface/index.interface";

import "./index.css";

const Question = () => {
  const {currentQuestion: { flag, capital }, questionsResult, counter} = useSelector((state: RootState) => state.data);
  const basePhraseQuestion: BasePhraseQuestion = {
    country: " is the capital of",
    flag: "Which country does this flag belong to?",
  };

  const capitalResult: (string | undefined)[] = questionsResult.map((item) => {
    return item.currentQuestion.capital;
  });

  return (
    <h2 className="question">
      {capital || capitalResult ? (
        (capital || capitalResult[counter - 1]) + basePhraseQuestion.country
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
