import { FC, useEffect, useState } from "react";

import { AnswerEnumState } from "../../enum/AnswerState.enum";

import "./index.css";

interface Props {
  answer: string;
  answerStyleStateValue: AnswerEnumState | string;
  answerClick?: (answer: string) => void;
  numeric: number;
}

const AnswerItem: FC<Props> = ({
  answer, answerClick, answerStyleStateValue, numeric,
}) => {
  const [styleAnswer, setStyleAnswer] = useState<string>("answer");
  const newStateValue: string = `answer ${answerStyleStateValue}`;

  useEffect(() => {
    setStyleAnswer(newStateValue);
  }, [answerStyleStateValue, newStateValue]);

  useEffect(() => {
    setStyleAnswer(newStateValue);
  }, [styleAnswer, answerStyleStateValue, newStateValue]);

  const handleClick = (): void => {
    answerClick?.(answer);
    setStyleAnswer(newStateValue);
  };

  return (
    <div onClick={handleClick} className={styleAnswer}>
      <span className="answer__letter">{numeric}</span>
      <span title={answer} className="answer__text">
        {answer}
      </span>
    </div>
  );
};

export default AnswerItem;
