import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {logIn} from "../../backend/api";

import {saveCredentialUser} from "../../redux/country/actions";

import { CredentialUserForm } from "../index";

import {COUNTRY_QUIZ_ROUT, SIGN_UP_ROUT,} from "../../constants/routs.constants";
import { CREDENTIAL_FORM } from "../../constants/registrationForm.constants";

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
      {credentialsError ? (<span className="login__error-message">{credentialsError}</span>) : null}
      <div className="login">
        {CREDENTIAL_FORM.map(
          ({ title, type, name, value, className, autocomplete, placeholder }, idx) => {
            if (type !== "submit")
              return (
                <CredentialUserForm
                  key={idx}
                  title={name === "email" ? credential["email"] : undefined}
                  className={className}
                  type={type}
                  value={credential[value]}
                  autoComplete={autocomplete}
                  name={name}
                  placeholder={placeholder}
                  onchange={handleChange}
                />
              );
          }
        )}
      </div>

      <div className="login-buttons" onClick={handleClick}>
        {CREDENTIAL_FORM.map((item, idx) => {
          if (item.type === "submit")
            return <CredentialUserForm key={idx} {...item}/>
        })}
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
