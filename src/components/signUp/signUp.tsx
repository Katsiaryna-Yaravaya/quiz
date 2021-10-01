import {useHistory} from "react-router-dom";
import {MAIN} from "../../constants/routs.constants";
import './index.css'

const SignUp = () => {

  const history = useHistory()


  return (
    <form className="quiz-form">
      <div className="form__sign-up">
        <input className="sign-up__user" type="text" placeholder="name" />
        <input className="sign-up__user" type="text" placeholder="surname" />
        <input className="sign-up__user" type="number" placeholder="age" />
        <input className="sign-up__user" type="email" placeholder="email" />
        <input className="sign-up__user" type="password" placeholder="password" />
        <input className="sign-up__user" type="password" placeholder="confirm password" />
      </div>
        
      <div className="form__sign-up-buttons">
        <input
            className="form__sign-up-button"
            type="submit"
            value="back"
            onClick={() => {history.push(MAIN)}}
        />
        <input
            className="form__sign-up-button"
            type="submit"
            value="register"
        />
      </div>
    </form>
  )
}

export default SignUp