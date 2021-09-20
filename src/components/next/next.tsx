import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { getCurrentQuestion, saveCounter } from '../../redux/country/actions'

import './index.css'

interface Props {
  isNextQuestionState: () => void
}

const Next = ({ isNextQuestionState }: Props) => {
  const { generateCountryInformation, counter } = useSelector(
    (state: RootState) => state.data
  )
  const dispatch = useDispatch()

  const handleNextQuestionButton = e => {
    e.preventDefault()
    isNextQuestionState()

    if (
      generateCountryInformation &&
      counter < generateCountryInformation.length
    ) {
      dispatch(saveCounter(counter + 1))
      dispatch(getCurrentQuestion(generateCountryInformation[counter - 1]))
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
