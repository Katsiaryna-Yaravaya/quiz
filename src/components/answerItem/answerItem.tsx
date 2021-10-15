import {useEffect, useState} from "react";

import {AnswerEnumState} from "../../enum/AnswerState.enum";

import "./index.css";

interface Props {
  answer: string;
  answerStyleStateValue: AnswerEnumState | string;
  answerClick?: (answer: string) => void;
  numeric: number;
}

const AnswerItem = ({answer, answerClick, answerStyleStateValue, numeric}: Props) => {
  const [styleAnswer, setStyleAnswer] = useState<string>("answer");
  const newStateValue: string = "answer " + answerStyleStateValue;

  useEffect(() => {
    updateAnswerStyleState();
  }, [answerStyleStateValue]);

  useEffect(() => {
    setStyleAnswer(newStateValue);
  }, [styleAnswer, answerStyleStateValue]);

  const handleClick = (): void => {
    if (answerClick) {
      answerClick(answer);
    }
    setStyleAnswer(newStateValue);
  };

  const updateAnswerStyleState = (): void => {
    if (answerStyleStateValue === AnswerEnumState.CORRECT) {
      setStyleAnswer(newStateValue)
    } else if (answerStyleStateValue === AnswerEnumState.INCORRECT) {
      setStyleAnswer(newStateValue);
    }
  };

  return (
    <div onClick={handleClick} className={styleAnswer}>
      <span className="answer__letter">{numeric}</span>
      <span title={answer} className="answer__text">{answer}</span>
    </div>
  );
};

export default AnswerItem;
