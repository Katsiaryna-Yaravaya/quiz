import { FC } from "react";

import "./index.css";

interface Props {
  flag: string | undefined;
  capital: string | undefined;
}

const Question: FC<Props> = ({ flag, capital }) => (
  <h2 className="question">
    {capital ? (
      `${capital} is the capital of`
    ) : (
      <>
        <img className="question__title-flag" src={flag} alt="flag" />
        <p>Which country does this flag belong to?</p>
      </>
    )}
  </h2>
);

export default Question;
