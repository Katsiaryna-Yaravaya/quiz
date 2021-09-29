import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import {saveCounter} from "../../redux/country/actions";

import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight
} from '@fortawesome/free-regular-svg-icons'

import './index.css'

const ArrowButtons = () => {
  const { questionsResult, counter } = useSelector((state: RootState) => state.data)
    const dispatch = useDispatch()

    const handleNextQuestion = () => {
        if (questionsResult && counter < questionsResult.length){
            dispatch(saveCounter(counter + 1))
        }
    }

    const handlePreviousQuestion = () => {
        if ((questionsResult && counter > 1)){
            dispatch(saveCounter(counter - 1))
        }
    }

  return (
    <div className="quiz-form__arrow-icons">
      <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={handlePreviousQuestion} className="icon" />
      <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={handleNextQuestion} className="icon" />
    </div>
  )
}

export default ArrowButtons
