import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {logIn} from "../../backend/api";

import {saveCredentialUser} from "../../redux/country/actions";

import {COUNTRY_QUIZ_ROUT, SIGN_UP_ROUT,} from "../../constants/routs.constants";

import { ButtonRegistrationUserEnum } from "../../enum/ButtonRegistrationUser.enum";

import { CredentialUser } from "../../interface/credentialUser.interface";

import { iconGlobe, iconBeach } from "../../asserts/imgIcon";

import "./index.css";

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [credentialsError, setCredentialsError] = useState<string>("");
  const [credential, setCredential] = useState<CredentialUser>({
    email: "",
    pass: "",
  });
  const {email, pass} = credential

  const signIn = (): void => {
    logIn(credential).then(res => {
      if (res.data) {
        dispatch(saveCredentialUser(credential));
        history.push(COUNTRY_QUIZ_ROUT);
      }
    }).catch(err => {
      setCredentialsError(err.response.data)
    })
  };

  const handleChange = (e): void => {
    setCredentialsError("");
    let { name, value } = e.target;

    setCredential({
      ...credential,
      [name]: value,
    });
  };

  const handleClick = (e): void => {
    e.preventDefault();
    e.target.value === ButtonRegistrationUserEnum.SIGN_IN ? signIn() : history.push(SIGN_UP_ROUT);
  };

  return (
    <form className="quiz-form">
      <span className="login__error-message">{credentialsError}</span>
      <div className="login">
        <input
          className="login__email input"
          type="email"
          title={email}
          value={email}
          autoComplete="on"
          name="email"
          placeholder="e-mail"
          onChange={handleChange}
        />

        <input
          className="login__password input"
          type="password"
          value={pass}
          autoComplete="current-password"
          name="pass"
          placeholder="password"
          onChange={handleChange}
        />
      </div>

      <div className="login-buttons" onClick={handleClick}>
        <input className="login-buttons__signIn button" type="submit" value="sign in" name="signIn"/>
        <input className="buttons__signUp button" type="submit" value="sign up" name="signUp"/>
      </div>

      <div className="login__block-icon-globe">
        <img className="login__icon-globe" src={iconGlobe} alt="globe" />
      </div>

      <div className="login__icon-block-beach">
        <img className="login__icon-beach" src={iconBeach} alt="globe" />
      </div>
    </form>
  );
};

export default Main;
