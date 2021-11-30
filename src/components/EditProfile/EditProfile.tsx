import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { RootState } from "../../redux/root-reducer";
import { saveCredentialUser } from "../../redux/country/actions";

import { USER_PROFILE } from "../../constants/routs.constants";
import { CredentialUser } from "../../interface/credentialUser.interface";

import { DragNDrop } from "../index";

const EditProfile: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { credentialUser } = useSelector((state: RootState) => state.data);
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur", defaultValues: credentialUser });
  const [user, setUser] = useState<CredentialUser>({ ...credentialUser });

  useEffect(() => {
    dispatch(saveCredentialUser(user));
  }, [user, user?.img]);

  const getErrorMessage = (value): string => (errors[value] ? "sign-up__user error" : "sign-up__user");

  const onSubmit = (data): void => {
    const { img, ...dataWithoutImg } = data;
    setUser({ ...user, ...dataWithoutImg });
    history.push(USER_PROFILE);
  };

  const dragImg = (img) => {
    setUser({ ...user, img });
  };

  return (
    <>
      <form className="quiz-form" onSubmit={handleSubmit(onSubmit)}>
      
        <DragNDrop dragImg={dragImg} />

        <div className="form__sign-up">
          <input
            className={getErrorMessage("name")}
            placeholder="Name"
            {...register("name", {
              required: true,
              pattern: /[A-Za-z]/,
            })}
          />
          {errors.name && <span className="sign-up__user-error">Required field for entering in Latin letters</span>}

          <input
            className={getErrorMessage("surName")}
            placeholder="Surname"
            {...register("surname", {
              required: true,
              pattern: /[A-Za-z]/,
            })}
          />
          {errors.surname && <span className="sign-up__user-error">Required field for entering in Latin letters</span>}

          <input
            className={getErrorMessage("age")}
            placeholder="Age"
            {...register("age", {
              required: true,
              pattern: /\d?\d/,
              min: 2,
              max: 99,
              maxLength: 2,
            })}
          />
          {errors.age && <span className="sign-up__user-error">Required numeric field from 2 to 9</span>}

          <input
            className={getErrorMessage("email")}
            placeholder="E-mail"
            autoComplete="username"
            {...register("email", {
              required: true,
              pattern: /^\w+@\w+\.\w{2,}$/,
            })}
          />
          {errors.email && <span className="sign-up__user-error">Required field for entering e-mail</span>}
        </div>

        <div className="form__sign-up-buttons">
          <button className="form__sign-up-button" type="submit">save</button>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
