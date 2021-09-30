import { useHistory } from 'react-router-dom'
import { COUNTRY_QUIZ_ROUT } from '../../constants/routs.constants'

const Main = () => {
  const history = useHistory()

  return (
    <form className="quiz-form">
      <div className="quiz-form__travel-icon">

          <input
              className=''
              type={'email'}
              name={'email'}
              value={'e-mail'}
          />
          <input
              className=''
              type={"password"}
              name={"password"}
              value={"password"}
          />


          <div className="input-box">
              <input
                  className=''
                  type={'email'}
                  name={'email'}
                  value={'e-mail'}
              />
              <input
                  className=''
                  type={"password"}
                  name={"password"}
                  value={"password"}
              />
              <label className="input-box__wrap-text">{}</label>
          </div>
      </div>
    </form>
  )
}

export default Main
