import { useHistory } from "react-router-dom";
import { useState } from "react";

import {COUNTRY_QUIZ_ROUT, MAIN} from "../../constants/routs.constants";

import { Credentials, RegistrationDataUser } from "../../interface/index.interface";
import {ButtonRegistrationUserEnum} from "../../enum/ButtonRegistrationUser.enum";

import {isEmailValid} from "../../utils";

import "./index.css";

const SignUp = () => {
  const history = useHistory();
  const [apiUserCredentialsMock, setApiUserCredentialsMock] = useState<Credentials[]>([
    {
      name: "1111",
      surname: "1111",
      age: "20",
      email: "1111@mail.com",
      password: "1111",
    },
  ]);
  const [credentialsError, setCredentialsError] = useState<string>("");
  const [registrationDataUser, setRegistrationDataUser] = useState<RegistrationDataUser>({
    name: "",
    surname: "",
    age: "",
    email: "",
    password: "",
    newPassword: "",
  })
  const {name, surname, age, email, password, newPassword} = registrationDataUser

  const handleChange = (e): void => {
    setCredentialsError("")
    let { name, value } = e.target;

    setRegistrationDataUser({
      ...registrationDataUser,
      [name]: value,
    });
  };

  const createUser = () => {
    !validRegistrationFields ? setCredentialsError("email is not valid") : history.push(COUNTRY_QUIZ_ROUT);
  };

  //проверить все поля на валидность
  const validRegistrationFields = () => {
    isEmailValid(registrationDataUser)
  }

  //добавить юзера в БД


  const checkDataByEmail = () => {
    apiUserCredentialsMock.find((item) => {
      item.email !== email ? setCredentialsError("user already exists") : createUser();
    });
  }

  const checkTheFieldForEmptiness = (e) => {
    e.preventDefault()

    if (e.target.value === ButtonRegistrationUserEnum.BACK) {
      history.push(MAIN)
    } else {
      Object.values(registrationDataUser).find((item) => {!item
          ? setCredentialsError("fill in all empty fields")
          : checkDataByEmail();
      });
    }
  }

  return (
    <form className="quiz-form">

      {credentialsError ? (<span className="registration__error-message">{credentialsError}</span>) : null}

      <div className="form__sign-up">
        <input className="sign-up__user" onChange={handleChange} value={name} type="text" name={"name"} placeholder="name" />
        <input className="sign-up__user" onChange={handleChange} value={surname} type="text" name={"surname"} placeholder="surname" />
        <input className="sign-up__user" onChange={handleChange} value={age} type="number" name={"age"} placeholder="age" />
        <input className="sign-up__user" onChange={handleChange} value={email} type="email" name={"email"} placeholder="email" autoComplete={"username"} />
        <input className="sign-up__user" onChange={handleChange} value={password} type="password" name={"password"} placeholder="password" autoComplete={"new-password"}/>
        <input className="sign-up__user" onChange={handleChange} value={newPassword} type="password" name={"newPassword"} placeholder="repeat password" autoComplete={"new-password"}/>
      </div>

      <div className="form__sign-up-buttons" onClick={checkTheFieldForEmptiness}>
        <input className="form__sign-up-button" type="submit" value="back" />
        <input className="form__sign-up-button" type="submit" value="register"/>
      </div>
    </form>
  );
};

export default SignUp;
