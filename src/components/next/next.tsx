import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { useHistory } from 'react-router-dom'

import { saveCounter } from '../../redux/country/actions'
import { RESULTS } from '../../constants/routs.constants'

import './index.css'

interface Props {
  resetQuestionState: () => void
}

const Next = ({ resetQuestionState }: Props) => {
  const { countriesUserQuestions, counter } = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleNextQuestionButton = (): void => {
    if (countriesUserQuestions && counter < countriesUserQuestions.length) {
      resetQuestionState()
      dispatch(saveCounter(counter + 1))
    } else {
      history.push(RESULTS)
    }
  }

  return (
    <div className="next">
      <button onClick={handleNextQuestionButton} type="button" className="next__button">
        Next
      </button>
    </div>
  )
}

export default Next
