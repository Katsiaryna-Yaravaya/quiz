import { useHistory } from 'react-router-dom'
import { SIGN_UP_ROUT } from '../../constants/routs.constants'
import { iconGlobe, iconBeach } from '../../asserts/imgIcon'

import { useState } from 'react'
import './index.css'

const Main = () => {
    const history = useHistory()
    const [apiUserMock, setApiUserMock] = useState([
      {
        name: 'Egor',
        surname: 'Palemof',
        age: '20',
        email: 'egorPalemof@mail.com',
        password: 'alemof'
      },
      {
        name: 'Ilya',
        surname: 'Paremof',
        age: '30',
        email: 'ilyaParemof@mail.com',
        password: 'aremof'
      },
      {
        name: 'Eva',
        surname: 'Palefa',
        age: '25',
        email: 'evaLama@mail.com',
        password: 'alefa'
      }
    ])

  return (
    <form className="quiz-form">
      <div className="login">
        <input className="login__email input" type={'email'} name={'email'} placeholder={'e-mail'}/>
        <input className="login__password input" type={'password'} name={'password'} placeholder={'password'}/>
      </div>

      <div className="login-buttons">
        <input className="login-buttons__signIn button" type={'submit'} name={'signIn'} value={'sign in'}/>
        <input
            className="login-buttons__signUp button"
            type={'submit'}
            name={'signUp'}
            value={'sign up'}
            onClick={() => {history.push(SIGN_UP_ROUT)}}/>
      </div>

      <div className="login__block-icon-globe">
        <img className="login__icon-globe" src={iconGlobe} alt="globe" />
      </div>

      <div className="login__icon-block-beach">
        <img className="login__icon-beach" src={iconBeach} alt="globe" />
      </div>
    </form>
  )
}

export default Main
