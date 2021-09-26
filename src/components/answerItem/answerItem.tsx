import { AnswerState } from '../../enum/AnswerState.enum'

import { useEffect, useState } from 'react'

import './index.css'

interface Props {
  answer: string,
  answerStateValue: AnswerState,
  answerClick: (answer: string) => void,
  letter: string,
}

const AnswerItem = ({answer, answerClick, answerStateValue, letter}: Props) => {
  const [styleAnswer, setStyleAnswer] = useState('answer ')
  const concatStyle = `answer ` + answerStateValue

  useEffect(() => {
    if (concatStyle === 'answer correct') {
      const timer = setTimeout(() => setStyleAnswer(concatStyle), 250)
      return () => clearTimeout(timer);
    } else if (concatStyle === 'answer incorrect'){
      setStyleAnswer(concatStyle)
    } else {
      setStyleAnswer('answer ')
    }
  }, [answerStateValue])

  const handleClick = () => {
    answerClick(answer)
    setStyleAnswer(concatStyle)
  }

  return (
    <div onClick={handleClick} className={styleAnswer}>
      <span className="answer__letter">{letter}</span>

      <span title={answer} className="answer__text">
        {' '}
        {answer}{' '}
      </span>
    </div>
  )
}

export default AnswerItem
