import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {saveCredentials, saveCredentialUser} from "../../redux/country/actions";

import { CredentialUserForm } from "../index";

import {COUNTRY_QUIZ_ROUT, SIGN_UP_ROUT,} from "../../constants/routs.constants";
import { REGISTRATION_FORM } from "../../constants/registrationForm.constants";

import { ButtonRegistrationUserEnum } from "../../enum/ButtonRegistrationUser.enum";

import { Credentials } from "../../interface/credentials.interface";
import { CredentialUser } from "../../interface/credentialUser.interface";

import { iconGlobe, iconBeach } from "../../asserts/imgIcon";

import "./index.css";

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [credentialsError, setCredentialsError] = useState<string>("");
  const [apiUserCredentialsMock, setApiUserCredentialsMock] = useState<Credentials[]>([
    {
      name: "1111",
      surname: "1111",
      age: "20",
      email: "1111@mail.com",
      password: "1111",
    },
  ]);
  const [credential, setCredential] = useState<CredentialUser>({
    email: "",
    password: "",
  });
  const { password, email } = credential;

  const signIn = (): void => {
    apiUserCredentialsMock.find((item) => {
      item.email === email
        ? checkPassword(item.password)
        : setCredentialsError("check email or sign up");
    });
  };

  const checkPassword = (passwordValue: string): void => {
    if (passwordValue === password) {
      getCredentials();
      setCredentialUser();
      history.push(COUNTRY_QUIZ_ROUT);
    } else {
      setCredentialsError("password entered incorrectly");
    }
  };

  const setCredentialUser = (): void => {
    dispatch(saveCredentialUser(credential));
  };

  const getCredentials = (): void => {
    dispatch(saveCredentials(apiUserCredentialsMock));
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
        {REGISTRATION_FORM.map(
          ({ title, type, name, value, className, autocomplete, placeholder }, idx) => {
            if (type !== "submit")
              return (
                <CredentialUserForm
                  key={idx}
                  title={title}
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

      <div className="login-buttons">
        {REGISTRATION_FORM.map(({ title, type, name, value, className, autocomplete, placeholder }, idx) => {
            if (type === "submit")
              return (
                <CredentialUserForm
                  key={idx}
                  className={className}
                  type={type}
                  value={value}
                  name={name}
                  clickHandler={handleClick}
                />
              );
          }
        )}
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
