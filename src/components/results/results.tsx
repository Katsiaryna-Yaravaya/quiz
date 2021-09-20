import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { deleteData } from '../../redux/country/actions'
import { RootState } from '../../redux/root-reducer'
import { MAIN } from '../../constants/routs.constants'

import { imgResults } from '../../asserts/imgIcon'

import './index.css'

const Results = () => {
  let { counter } = useSelector((state: RootState) => state.data)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(deleteData())
    history.push(MAIN)
  }

  return (
    <form className="quiz-form">
      <div className="quiz-form__result">
        <img
          className="quiz-form__result-icon"
          src={imgResults}
          alt="imgResults"
        />
      </div>
      <h2 className="quiz-form__title">Results</h2>
      <p className="quiz-form__text">
        You got
        <span className="quiz-form__text-count"> {counter - 1} </span>
        correct answers
      </p>

      <div className="quiz-form__try-again" onClick={handleClick}>
        <button className="quiz-form__try-again-button">Try again</button>
      </div>
    </form>
  )
}

export default Results
