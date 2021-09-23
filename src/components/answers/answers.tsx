import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { MouseEventHandler, useState } from 'react'

import { RootState } from '../../redux/root-reducer'

import { Next, AnswersItem } from '../index'
import { RESULTS } from '../../constants/routs.constants'
import { saveQuestionDataAnswer } from '../../redux/country/actions'
import { QuestionDataAnswer } from '../../interface/questionDataAnswer.interface'

import './index.css'

export enum AnswerState {
  DEFAULT = 0,
  CORRECT = 1,
  INCORRECT = 2
}

const Answers = () => {
  const history = useHistory()
  const { currentQuestion: {allAnswers, name} } = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch()
  const [isNextQuestion, setIsNextQuestion] = useState<boolean>(false)
  const [isSelectedAnswer, setIsSelectedAnswer] = useState<boolean>(false)
  const [styleClickAnswer, setStyleClickAnswer] = useState('')
  // const [styleAnswer, setStyleClickAnswer] = useState<boolean>()
  // const [enumString, setEnumString] = useState(['default', 'correct', 'incorrect'])
  // @ts-ignore
  const [defaultName, setDefaultName] = useState([
    AnswerState.DEFAULT,
    AnswerState.DEFAULT,
    AnswerState.DEFAULT,
    AnswerState.DEFAULT
  ])
  // const [defaultName, setDefaultName] = useState(currentQuestion.allAnswers?.fill(AnswerState.DEFAULT))
  const letterMapping = ['A', 'B', 'C', 'D']

  const handleIsNextQuestionState = () => {
    setIsSelectedAnswer(false)
    setIsNextQuestion(false)
  }
  // console.log(allAnswers)

  // const disableElementByClassName = className => {
  //
  // }
  // currentQuestion.allAnswers.forEach((item) => {
  //   if (item === currentQuestion.name) {
  //     return setTimeout(() => 'correct', 250)
  //   }
  // })
  // return setStyleClickAnswer(true)
  // return setStyleClickAnswer(false)
  // const enumString = ['default', 'correct', 'incorrect']
  // const defaultName = ['default','default','default','default']

  const handleAnswerClick = (answer, idx) => {

    const allResult = []

    // @ts-ignore
    const f = allResult.push((item, idx)=>{

      return (allAnswers[idx] ===allResult[idx]) ? AnswerState.CORRECT : AnswerState.INCORRECT
    })
    // console.log(f)


    // const f = defaultName.map((item, idx) => {
    //   console.log(item)
    //   if (item[idx]===currentQuestion.name) {
    //     if (currentQuestion.name === answer) {
    //       // @ts-ignore
    //       return allResult.push(AnswerState.CORRECT)
    //     }
    //     if (currentQuestion.name !== answer) {
    //       // @ts-ignore
    //       return allResult.push(AnswerState.INCORRECT)
    //     }
    //     // @ts-ignore
    //     return allResult.push(item)
    //   }
    //   console.log(allResult)
    // })
    // console.log('allResult',allResult)
    // console.log('f',f)

    if (answer === name) {
      return setStyleClickAnswer('correct')
    } else {
      return setStyleClickAnswer('incorrect')
    }
  }

  return (
    <>
      {!!allAnswers &&
        allAnswers.map((answer, idx) => {
          return (
            <AnswersItem
              key={idx}
              setStyleClickAnswer={styleClickAnswer}
              // setDefaultName={defaultName}
              // className = {styleClickAnswer? 'correct' : 'incorrect'}
              letter={letterMapping[idx]}
              answer={answer}
              answerClick={() => handleAnswerClick(answer, idx)}
              index={idx}
            />
          )
        })}

      {/*{isNextQuestion ? (*/}
      <Next isNextQuestionState={handleIsNextQuestionState} />
      {/*) : null}*/}
    </>
  )
}

export default Answers
