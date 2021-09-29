import { useEffect, useState } from 'react'

import { AnswerEnumState } from '../../enum/AnswerState.enum'

import './index.css'

interface Props {
  answer: string,
  answerStyleStateValue: AnswerEnumState | string,
  answerClick?: (answer: string) => void,
  letter: string,
}

const AnswerItem = ({answer, answerClick, answerStyleStateValue, letter}: Props) => {
  const [styleAnswer, setStyleAnswer] = useState<string>('answer ')
  const concatStyle: string = `answer ` + (answerStyleStateValue)

  useEffect(() => {
    addColorForClassName()
  }, [answerStyleStateValue])

  useEffect(()=> {
    setStyleAnswer(concatStyle)
  },[styleAnswer, answerStyleStateValue])

  const handleClick = (): void => {
    if (answer && answerClick){
        answerClick(answer)
    }
    setStyleAnswer(concatStyle)
  }

  const addColorForClassName = () => {
    if (concatStyle === 'answer correct') {
      const timer: NodeJS.Timeout = setTimeout(() => setStyleAnswer(concatStyle), 250)
      return (): void => clearTimeout(timer)
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
