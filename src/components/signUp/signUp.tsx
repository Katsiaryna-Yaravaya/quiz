import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import RegistrationsInput from "./registrationsInput/registrationsInput";

import { addNewUser } from "../../backend/api";
import { saveCredentialUser } from "../../redux/country/actions";

import { MAIN } from "../../constants/routs.constants";
import { REGISTRATION_FORM } from "../../constants/registrationForm.constants";

import "./index.css";


const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
  const { handleSubmit } = useForm({mode:'onBlur'});


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
            {REGISTRATION_FORM.map((item, idx) => {
                return <RegistrationsInput key={idx} {...item}/>
            })}
        </div>

        <div className="form__sign-up-buttons">
          <button className="form__sign-up-button" onClick={() => history.push(MAIN)}> back </button>
          <button className="form__sign-up-button" type="submit"> sign in </button>
        </div>
      </form>
  );
};

export default SignUp;
