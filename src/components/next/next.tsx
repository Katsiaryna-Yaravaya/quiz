import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { saveCounter } from '../../redux/country/actions'
import { RESULTS } from '../../constants/routs.constants'

import './index.css'

interface Props {
  isNextQuestionState: () => void
}

const Next = ({ isNextQuestionState }: Props) => {
  const { generateCountriesInformation, counter } = useSelector(
    (state: RootState) => state.data
  )

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {}, [counter])

  const handleNextQuestionButton = () => {
    if (
      generateCountriesInformation &&
      counter < generateCountriesInformation.length
    ) {
      isNextQuestionState()
      dispatch(saveCounter(counter + 1))
    } else {
      history.push(RESULTS)
    }
  }

  return (
    <div className="next">
      <button
        onClick={handleNextQuestionButton}
        type="button"
        className="next__button"
      >
        Next
      </button>
    </div>
  )
}

export default Next
