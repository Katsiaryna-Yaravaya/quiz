import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {toast, ToastContainer} from "react-toastify";

import {FormInputControl} from "../index";

import {addNewUser} from "../../backend/api";

import {MAIN} from "../../constants/routs.constants";
import {REGISTRATION_FORM} from "../../constants/registrationForm.constants";

import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

const SignUp = () => {
  const history = useHistory();
  const {register, handleSubmit, formState: {errors}, setError} = useForm({mode: 'onBlur'});

  const onSubmit = (data) => {
    if (data.pass !== data.repeatPassword) {
      setError("repeatPassword", {
        type: "password",
        message: "Required field for entering a second password"
      });
      return;
    }

    addNewUser(data)
      .then(() => history.push(MAIN))
      .catch(err => toast(err.response.data))
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={4000}/>
      <form className="quiz-form" onSubmit={handleSubmit(onSubmit)}>

        <div className="form__sign-up">
          {REGISTRATION_FORM.map((item, idx) => {
            return <FormInputControl key={idx} error={errors[item.fieldName]} register={register} {...item} />
          })}
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
