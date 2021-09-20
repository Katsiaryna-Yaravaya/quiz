import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getCountryCapital, getCountryFlag } from '../../backend/api'
import { saveCountry } from '../../redux/country/actions'

import { COUNTRY_ROUT, FLAG_ROUT } from '../../constants/routs.constants'

import './index.css'

const Main = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const clickCountryHandler = () => {
    getCountryCapital('name', 'capital', 'numericCode').then(resp => {
      dispatch(saveCountry(resp))
      history.push(COUNTRY_ROUT)
    })
  }

  const clickFlagHandler = () => {
    getCountryFlag('name', 'flag', 'numericCode').then(resp => {
      dispatch(saveCountry(resp))
      history.push(FLAG_ROUT)
    })
  }

  return (
    <div className="main__chooseAQuiz">
      <button onClick={clickCountryHandler} className="chooseAQuiz__button">
        country
      </button>
      <button onClick={clickFlagHandler} className="chooseAQuiz__button">
        flag
      </button>
    </div>
  )
}

export default Main
