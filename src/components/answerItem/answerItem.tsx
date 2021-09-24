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

  useEffect(() => {
    const concatStyle = `answer ` + answerStateValue
    if (concatStyle === 'answer correct') {
      setTimeout(() => {
        setStyleAnswer(concatStyle)
      }, 250)
    } else {
      setStyleAnswer(concatStyle)
    }
  }, [answerStateValue])

  const handleClick = () => {
    answerClick(answer)
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
