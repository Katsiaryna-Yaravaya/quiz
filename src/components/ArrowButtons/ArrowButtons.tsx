import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

import { useDispatch } from "react-redux";

import { nextQuestion, previousQuestion } from "./effects";

import "./index.css";

const ArrowButtons: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="quiz-form__arrow-icons">
      <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={() => dispatch(previousQuestion())} className="icon" />
      <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={() => dispatch(nextQuestion())} className="icon" />
    </div>
  );
};

export default ArrowButtons;
