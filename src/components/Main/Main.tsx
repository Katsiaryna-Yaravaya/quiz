import { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { logIn } from "../../core/api";

import { SIGN_UP_ROUT } from "../../constants/routs.constants";

import { iconGlobe, iconBeach } from "../../asserts/imgIcon";

import "./index.css";

const Main: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm({ mode: "onBlur" });

  const email = watch("email");

  const onSubmit = (data): void => {
    dispatch(logIn(data));
  };

  return (
    <form className="quiz-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="login">
        <input
          className="login__email input"
          placeholder="E-mail"
          title={email}
          autoComplete="username"
          {...register("email", { required: true })}
        />

        <input
          className="login__password input"
          placeholder="Password"
          type="password"
          autoComplete="new-password"
          {...register("pass", { required: true })}
        />
      </div>

      <div className="login-buttons">
        <input className="login-buttons__signIn button" type="submit" value="sign in" name="signIn" />
        <input className="buttons__signUp button" type="submit" value="sign up" name="signUp" onClick={() => history.push(SIGN_UP_ROUT)} />
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
