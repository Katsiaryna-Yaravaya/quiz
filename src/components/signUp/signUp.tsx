import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { getUser, postUser } from "../../backend/api";
import { saveCredentialUser } from "../../redux/country/actions";

import { CredentialUserForm } from "../index";

import { COUNTRY_QUIZ_ROUT, MAIN } from "../../constants/routs.constants";
import { REGISTRATION_BUTTONS_FORM, REGISTRATION_FORM } from "../../constants/registrationForm.constants";

import { RegistrationDataUser } from "../../interface/index.interface";
import { ButtonRegistrationUserEnum } from "../../enum/ButtonRegistrationUser.enum";

import { isEmailValid, isNameOrSurnameValid } from "../../utils";

import "./index.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credentialsError, setCredentialsError] = useState<string>("");
  const [registrationDataUser, setRegistrationDataUser] = useState<RegistrationDataUser>({
    name: "",
    surname: "",
    age: "",
    email: "",
    pass: "",
    newPassword: "",
  });
  const { email, pass, newPassword } = registrationDataUser;

  const handleChange = (e): void => {
    setCredentialsError("");
    let { name, value } = e.target;

    setRegistrationDataUser({
      ...registrationDataUser,
      [name]: value,
    });
  };

  const createUser = (): void => {
    validRegistrationFields();
    if (!credentialsError) {
      addUserInBD(registrationDataUser);
    }
  };

  const addUserInBD = (newUser): void => {
    postUser(newUser).then((requestedUser) => {
      dispatch(saveCredentialUser(JSON.parse(requestedUser.config.data)));
      history.push(COUNTRY_QUIZ_ROUT);
    });
  };

  const validRegistrationFields = (): void => {
    if (!isEmailValid(registrationDataUser)) {
      return setCredentialsError("email is not valid");
    }
    if (!isNameOrSurnameValid(registrationDataUser)) {
      return setCredentialsError("name or surname only in english letters");
    }
    if (pass.length < 6) {
      return setCredentialsError("short pass");
    }
    if (pass !== newPassword) {
      return setCredentialsError("pass mismatch");
    }
  };

  const checkDataByEmail = (): void => {
    getUser(email).then((res) => {
      return res?.email === email
        ? setCredentialsError("user already exists")
        : createUser();
    });
  };

  const checkTheFieldForEmptiness = (e): void => {
    e.preventDefault();

    if (e.target.value === ButtonRegistrationUserEnum.BACK) {
      history.push(MAIN);
    } else {
      Object.values(registrationDataUser).find((item) => {
        !item
          ? setCredentialsError("fill in all empty fields")
          : checkDataByEmail();
      });
    }
  };

  return (
    <form className="quiz-form">
      {credentialsError ? (
        <span className="registration__error-message">{credentialsError}</span>
      ) : null}

      <div className="form__sign-up">
        {REGISTRATION_FORM.map(
          ({ type, name, value, className, placeholder, autocomplete }, idx) => {
            return (
              <CredentialUserForm
                key={idx}
                className={className}
                type={type}
                value={registrationDataUser[value]}
                autoComplete={autocomplete}
                name={name}
                placeholder={placeholder}
                onchange={handleChange}
              />
            );
          }
        )}
      </div>

      <div className="form__sign-up-buttons" onClick={checkTheFieldForEmptiness}>
        {REGISTRATION_BUTTONS_FORM.map(({ type, value, className }, idx) => {
          return (
            <CredentialUserForm
              key={idx}
              className={className}
              type={type}
              value={value}
            />
          );
        })}
      </div>
    </form>
  );
};

export default SignUp;
