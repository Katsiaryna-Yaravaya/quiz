import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {toast, ToastContainer} from "react-toastify";

import {RegistrationsInput} from "../index";

import {addNewUser} from "../../backend/api";
import {saveCredentialUser} from "../../redux/country/actions";

import {MAIN} from "../../constants/routs.constants";
import {REGISTRATION_FORM} from "../../constants/registrationForm.constants";

import 'react-toastify/dist/ReactToastify.css';
import "./index.css";


const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const [credentialsError, setCredentialsError] = useState<string>("");
    const {register, handleSubmit, formState: {errors}, setError} = useForm({mode: 'onBlur'});

    // useEffect(() => {
    //     const subscription = watch(() => setCredentialsError(''));
    //     return () => subscription.unsubscribe();
    // }, [watch]);


    const onSubmit = (data) => {
        if (data.pass !== data.repeatPassword) {
            setError("repeatPassword", {
                type: "password",
                message: "Required field for entering a second password"
            });
            return;
        }

        addNewUser(data).then((requestedUser) => {
            dispatch(saveCredentialUser(JSON.parse(requestedUser.config.data)));
            history.push(MAIN);
        }).catch(err => {
            // setCredentialsError(err.response.data)
            toast(err.response.data)
        })
    }


    return (
        <>
            <ToastContainer position="top-center" autoClose={4000} hideProgressBar={false} newestOnTop={false}
                            closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
        <form className="quiz-form" onSubmit={handleSubmit(onSubmit)}>
            {/*<span className="sign-up__user-error-message">{credentialsError}</span>*/}

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
        </>

    );
};

export default SignUp;
