import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {toast, ToastContainer} from "react-toastify";

import {addNewUser} from "../../backend/api";

import {MAIN} from "../../constants/routs.constants";

import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import {useEffect, useState} from "react";

const SignUp = () => {
  const history = useHistory();
  const {register, handleSubmit, formState: {errors}, watch} = useForm({mode: 'onBlur'});

  // useEffect(() => {
  //   getErrorMessage(watch())
  // }, [errors])

  const name = watch('name')
  const surName = watch('surName')
  const age = watch('age')
  const email = watch('pass')
  const pass = watch('pass')
  const repeatPassword = watch('repeatPassword')

  const getErrorMessage = (value) => {
    console.log(!value)
    console.log(Object.keys(errors).length)

    if (!value && Object.keys(errors).length) {
      return "sign-up__user error"
    }
      return "sign-up__user"
  }

  const onSubmit = (data) => {
    addNewUser(data)
      .then(() => history.push(MAIN))
      .catch(err => toast(err.response.data))
  }

  return (
    <>
      <form className="quiz-form" onSubmit={handleSubmit(onSubmit)}>

        <div className="form__sign-up">
          <input className={getErrorMessage(name)} placeholder='Name' {...register('name', {
            required: true,
            pattern: /[A-Za-z]/
          })}/>
          {errors.name && <span className="sign-up__user-error">Required field for entering in Latin letters</span>}

          <input className={getErrorMessage(surName)} placeholder='Surname' {...register('surName', {
            required: true,
            pattern: /[A-Za-z]/
          })}/>
          {errors.surName && <span className="sign-up__user-error">Required field for entering in Latin letters</span>}

          <input className={getErrorMessage(age)} placeholder='Age' {...register('age', {
            required: true,
            pattern: /\d?\d/,
            min: 2,
            max: 99,
            maxLength: 2
          })}/>
          {errors.age && <span className="sign-up__user-error">Required numeric field from 2 to 9</span>}

          <input className={getErrorMessage(email)} placeholder='E-mail'
                 autoComplete="username" {...register('email', {required: true, pattern: /^\w+@\w+\.\w{2,}$/})}/>
          {errors.email && <span className="sign-up__user-error">Required field for entering e-mail</span>}

          <input className={getErrorMessage(pass)} placeholder='Password' type="password"
                 autoComplete="new-password" {...register('pass', {required: true, minLength: 6})}/>
          {errors.pass &&
          <span className="sign-up__user-error">Required field for entering a password min 6 characters</span>}

          <input className={getErrorMessage(repeatPassword)} type="password" placeholder='Repeat password'
                 autoComplete="new-password" {...register('repeatPassword', {
            required: true,
            validate: value => value === pass
          })}/>
          {errors.repeatPassword &&
          <span className="sign-up__user-error">Required field for entering a second password</span>}
        </div>

        <div className="form__sign-up-buttons">
          <button className="form__sign-up-button" onClick={() => history.push(MAIN)}> back</button>
          <button className="form__sign-up-button" type="submit"> sign in</button>
        </div>
      </form>
    </>

  );
};

export default SignUp;
