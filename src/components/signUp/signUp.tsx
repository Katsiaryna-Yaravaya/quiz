import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {useForm} from "react-hook-form";
import RegistrationsInput from "./registrationsInput/registrationsInput";

import {addNewUser} from "../../backend/api";
import {saveCredentialUser} from "../../redux/country/actions";

import {MAIN} from "../../constants/routs.constants";
import {REGISTRATION_FORM} from "../../constants/registrationForm.constants";

import "./index.css";


const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [credentialsError, setCredentialsError] = useState<string>("");
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});


    const onSubmit = (data) => {
        console.log(data)
        addNewUser(data).then((requestedUser) => {
            dispatch(saveCredentialUser(JSON.parse(requestedUser.config.data)));
            history.push(MAIN);
        }).catch(err => {
            setCredentialsError(err.response.data)
        })
    }
    // validate: value => value === pass

    return (
        <form className="quiz-form" onSubmit={handleSubmit(onSubmit)}>
            {credentialsError ? (<span className="sign-up__user-error-message">{credentialsError}</span>) : null}

            <div className="form__sign-up">
                {REGISTRATION_FORM.map((item, idx) => {
                    return <RegistrationsInput key={idx} error={errors[item.fieldName]} register={register} {...item} />
                })}
            </div>

            <div className="form__sign-up-buttons">
                <button className="form__sign-up-button" onClick={() => history.push(MAIN)}> back</button>
                <button className="form__sign-up-button" type="submit"> sign in</button>
            </div>
        </form>
    );
};

export default SignUp;
