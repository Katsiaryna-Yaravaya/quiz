import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getCountriesCapital, getCountriesFlag } from '../../backend/api'
import { saveCountries } from '../../redux/country/actions'

import { COUNTRY_ROUT, FLAG_ROUT } from '../../constants/routs.constants'

import './index.css'
import { useState } from 'react'

const Main = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [country, setCountry] = useState([
    { name: 'Belarus', capital: 'Minsk' },
    { name: 'Goa', capital: 'Panaji' },
    { name: 'Maharashtra', capital: 'Mumbai' },
    { name: 'Delhi', capital: 'New Delhi' },
    { name: 'Afghanistan', capital: 'Kabul' },
    { name: 'Albania', capital: 'Tirana (Tirane)' },
    { name: 'Austria', capital: 'Vienna' },
    { name: 'Azerbaijan', capital: 'Baku' },
    { name: 'Costa Rica', capital: 'San Jose' },
    { name: 'Cuba', capital: 'Havana' },
    { name: 'Denmark', capital: 'Copenhagen' },
    { name: 'Egypt', capital: 'Cairo' },
    { name: 'Germany', capital: 'Berlin' },
    { name: 'Greece', capital: 'Athens' },
    { name: 'Indonesia', capital: 'Jakarta' },
    { name: 'Lebanon', capital: 'Beirut' },
    { name: 'Latvia', capital: 'Riga' },
    { name: 'Lithuania', capital: 'Vilnius' },
    { name: 'Maldives', capital: 'Male' },
    { name: 'Mexico', capital: 'Mexico City' },
    { name: 'Nepal', capital: 'Kathmandu' },
    { name: 'Netherlands', capital: 'Amsterdam' },
    { name: 'Norway', capital: 'Oslo' },
    { name: 'Russia', capital: 'Moscow' },
    { name: 'Ukraine', capital: 'Kiev' }
  ])

  const clickCountryHandler = () => {
    // getCountriesCapital('name', 'capital').then(resp => {
    dispatch(saveCountries(country)) && history.push(COUNTRY_ROUT)
    // })
  }

  const clickFlagHandler = () => {
    getCountriesFlag('name', 'flag').then(resp => {
      dispatch(saveCountries(resp))
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
