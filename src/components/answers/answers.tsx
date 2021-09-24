import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'

import {RootState} from '../../redux/root-reducer'

import {Next, AnswersItem} from '../index'
import {saveCounter, saveQuestionDataAnswer, showGenerateAnswer} from '../../redux/country/actions'
import {QuestionDataAnswer} from '../../interface/questionDataAnswer.interface'

import './index.css'

export enum AnswerState {
    DEFAULT = 0,
    CORRECT = 1,
    INCORRECT = 2
}

const Answers = () => {

    const {
        currentQuestion: {allAnswers, name, capital},
        allDataAfterResult
    } = useSelector((state: RootState) => state.data)
    const history = useHistory()
    const dispatch = useDispatch()
    const [isNextQuestion, setIsNextQuestion] = useState<boolean>(false)
    const [isSelectedAnswer, setIsSelectedAnswer] = useState<boolean>(false)
    const [styleClickAnswer, setStyleClickAnswer] = useState('')

    const letterMapping = ['A', 'B', 'C', 'D']

    const handleIsNextQuestionState = () => {
        setIsSelectedAnswer(false)
        setIsNextQuestion(false)
    }

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
//
//     const b = () => {
//         allAnswers.forEach((item) => {
//             if (item === name) {
//                 const g =  setTimeout(() => {'correct'}, 250)
//                 console.log('g', g)
// return g
//             }
//         })
//     }
    useEffect(() => {
        console.log('--------------')
        handleAnswerClick(name, false)

    }, [allDataAfterResult.length])
    const b = () => {
        allAnswers.forEach((item) => {
                if (item === name) {
                    return 'correct'
                }
            }
        )
    }
    const show = async () => {
        await setTimeout(()=>{

        },500)
        return
    }

    const handleAnswerClick = (answer , skipSaveCard) => {

        if(skipSaveCard){
            saveCard(answer)
        }

        if (answer === name) {
            return 'correct'
        } else if (answer !== name) {
            return 'incorrect'
        } else {
            return ''
        }
    }
    const saveCard = (answer) => {
        dispatch(saveQuestionDataAnswer({
            chooseByUser: answer,
            currentQuestion: {allAnswers, name, capital}
        }))
    }

    return (
        <>
            {!!allAnswers &&
            allAnswers.map((answer, idx) => {
                console.log('00000000')
                return (
                    <AnswersItem
                        key={idx}
                        letter={letterMapping[idx]}
                        answer={answer}
                        answerClick={() => handleAnswerClick(answer, true)}
                        correctAnswer={name}
                    />
                )
            })}

            {/*{isNextQuestion ? (*/}
            <Next isNextQuestionState={handleIsNextQuestionState}/>
            {/*) : null}*/}
        </>
    )
}

export default Answers
