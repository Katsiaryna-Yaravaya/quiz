import {AnswerState} from "../../enum/AnswerState.enum";

import './index.css'

interface Props {
  answer: string,
  setAnswerStateValue: AnswerState,
  answerClick: (answer: string) => void,
  letter: string,
}

const AnswersItem = ({answer, answerClick, setAnswerStateValue, letter}: Props) => {

  const handleClick = () => {
    answerClick(answer)
  }

  return (
    <div onClick={handleClick} className={`answer ` + setAnswerStateValue}>
      <span className="answer__letter">{letter}</span>

      <span title={answer} className="answer__text">
        {' '}
        {answer}{' '}
      </span>
    </div>
  )
}

export default AnswersItem
