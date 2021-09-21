import { useSelector } from 'react-redux'

import { RootState } from '../../redux/root-reducer'

import './index.css'

const QuestionCount = () => {
  const { generateCountriesInformation, counter } = useSelector(
    (state: RootState) => state.data
  )

  return (
    <div className="questionCount">
      Question
      {counter ? <span> {counter} </span> : null}
      of
      {generateCountriesInformation ? (
        <span> {generateCountriesInformation.length} </span>
      ) : null}
    </div>
  )
}

export default QuestionCount
