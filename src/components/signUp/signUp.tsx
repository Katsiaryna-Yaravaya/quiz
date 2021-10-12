import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {ReactNode, useEffect, useState} from "react";

import { addNewUser } from "../../backend/api";
import { saveCredentialUser } from "../../redux/country/actions";

import { CredentialUserForm } from "../index";

import { MAIN } from "../../constants/routs.constants";
import { REGISTRATION_BUTTONS_FORM, REGISTRATION_FORM } from "../../constants/registrationForm.constants";

import { RegistrationDataUser } from "../../interface/index.interface";
import { ButtonRegistrationUserEnum } from "../../enum/ButtonRegistrationUser.enum";

import { isEmailValid, isNameOrSurnameValid } from "../../utils";


import { useForm } from "react-hook-form";
import "./index.css";


const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
  const { register, handleSubmit,formState: {errors}, watch } = useForm({mode:'onBlur'});
const [a, setA]=useState('')

 // проверка на пустоту объекта
    const emptyOrder = !Object.keys(errors).length
    // console.log(emptyOrder)
    // if (!emptyOrder){
    //     setA('error')
    // } else setA('')
    //
    // const b = `sign-up__user ${a}`
    // console.log(b)

    useEffect(()=> {
        if (!emptyOrder){
            setA('error')
        } else setA('')

    },[emptyOrder] )


    const name = watch('name')
    const surName = watch('surName')
    const age = watch('age')
    const email = watch('email')
    const pass = watch('pass')
    const repeatPassword = watch('repeatPassword')

  const onSubmit = (data) => {
    console.log(data)
  // addNewUser(data).then((requestedUser) => {
  //   console.log(requestedUser)
  //   dispatch(saveCredentialUser(JSON.parse(requestedUser.config.data)));
  //   history.push(MAIN);
  // }).catch(e => console.log(e));

  }


  return (
      <form className="quiz-form" onSubmit={handleSubmit(onSubmit)}>

        <div className="form__sign-up">
          <input className={`sign-up__user ${a}`} {...register('name', {required: true, pattern: /[A-Za-z]/})}/>
          {errors.name && <span className="sign-up__user-error">Обязательное поле для ввода</span>}

          <input className={`sign-up__user ${a}`} {...register('surName', {required: true, pattern: /[A-Za-z]/})}/>
          {errors.surName && <span className="sign-up__user-error">Обязательное поле для ввода</span>}

          <input className={`sign-up__user ${a}`} {...register('age', {required: true, pattern: /\d?\d/, min: 2, max: 99 })}/>
          {errors.age && <span className="sign-up__user-error">Обязательное числовое поле от 2 до 99</span>}

          <input className={`sign-up__user ${a}`} autoComplete="username" {...register('email', {required: true, pattern: /^\w+@\w+\.\w{2,}$/})}/>
          {errors.email && <span className="sign-up__user-error">Обязательное поле для ввода e-mail</span>}

          <input className={`sign-up__user ${a}`} type="password" autoComplete="new-password" {...register('pass', {required: true, minLength: 6})}/>
          {errors.pass && <span className="sign-up__user-error">Обязательное поле для ввода пароля мин 6 симмволов</span>}

          <input className={`sign-up__user ${a}`} type="password" autoComplete="new-password" {...register('repeatPassword', {required: true})}/>
          {errors.repeatPassword && <span className="sign-up__user-error">Обязательное поле для ввода повторного пароля</span>}
        </div>

        <div className="form__sign-up-buttons">
          <button className="form__sign-up-button" onClick={() => history.push(MAIN)}> back </button>
          <button className="form__sign-up-button" type="submit"> sign in </button>
        </div>
      </form>
  );
};

export default SignUp;



// const handleChange = (e): void => {
  //   setCredentialsError("");
  // let { name, value } = e.target;
  //
  // setRegistrationDataUser({
  //   ...registrationDataUser,
  //   [name]: value,
  // });
  //
  //   // validRegistrationFields();
// };

// const createUser = (): void => {
//   validRegistrationFields();
//   if (!credentialsError) {
//     addUser(registrationDataUser);
//   }
// };

// const addUser = (newUser): void => {
//   addNewUser(newUser).then((requestedUser) => {
//     console.log(requestedUser)
//     // dispatch(saveCredentialUser(JSON.parse(requestedUser.config.data)));
//     // history.push(MAIN);
//   }).catch(e => console.log(e));
// };

// const validRegistrationFields = (): void => {
//   if (!isEmailValid(registrationDataUser)) {
//     return setCredentialsError("email is not valid");
//   }
//   if (!isNameOrSurnameValid(registrationDataUser)) {
//     return setCredentialsError("name or surname only in english letters");
//   }
//   if (pass.length < 6) {
//     return setCredentialsError("short pass");
//   }
//   if (pass !== newPassword) {
//     return setCredentialsError("pass mismatch");
//   }
// };

// const checkTheFieldForEmptiness = (e): void => {
//   e.preventDefault();
  //
  //   if (e.target.value === ButtonRegistrationUserEnum.BACK) {
  //     history.push(MAIN);
  //   } else {
  //     Object.values(registrationDataUser).find((item) => {
  //       !item ? setCredentialsError("fill in all empty fields") : createUser();
  //     });
  //   }
// };


// return (
//     <form className="quiz-form">
//       {credentialsError ? (
//           <span className="registration__error-message">{credentialsError}</span>
//       ) : null}
//
//       <div className="form__sign-up">
//         {REGISTRATION_FORM.map(
//             ({ type, name, value, className, placeholder, autocomplete }, idx) => {
//               return (
//                   <CredentialUserForm
//                       key={idx}
//                       className={className}
//                       type={type}
//                       value={registrationDataUser[value]}
//                       autoComplete={autocomplete}
//                       name={name}
//                       placeholder={placeholder}
//                       onchange={handleChange}
//                   />
//               );
//             }
//         )}
//       </div>
//
//       <div className="form__sign-up-buttons" onClick={checkTheFieldForEmptiness}>
//         {REGISTRATION_BUTTONS_FORM.map(({ type, value, className }, idx) => {
//           return (
//               <CredentialUserForm
//                   key={idx}
//                   className={className}
//                   type={type}
//                   value={value}
//               />
//           );
//         })}
//       </div>
//     </form>
// );
// };
