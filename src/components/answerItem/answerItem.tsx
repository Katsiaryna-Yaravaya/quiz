import { useEffect, useState } from 'react'

import { AnswerEnumState } from '../../enum/AnswerState.enum'

import './index.css'

interface Props {
  answer: string,
  answerStyleStateValue: AnswerEnumState,
  answerClick: (answer: string) => void,
  letter: string,
}

const AnswerItem = ({answer, answerClick, answerStyleStateValue, letter}: Props) => {
  const [styleAnswer, setStyleAnswer] = useState('answer ')
  const concatStyle = `answer ` + answerStyleStateValue

  useEffect(() => {
    addColorForClassName()
  }, [answerStyleStateValue])

  useEffect(()=> {
    setStyleAnswer(concatStyle)
  },[styleAnswer, answerStyleStateValue])

  const handleClick = () => {
    answerClick(answer)
    setStyleAnswer(concatStyle)
  }

  const addColorForClassName = () => {
    if (concatStyle === 'answer correct') {
      const timer = setTimeout(() => setStyleAnswer(concatStyle), 250)
      return () => clearTimeout(timer)
    } else if (concatStyle === 'answer incorrect') {
      setStyleAnswer(concatStyle)
    }
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
