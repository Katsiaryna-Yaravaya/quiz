import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { logInPlayer, logInTwoPlayers } from "../../core/api";

import { COUNTRY_QUIZ_ROUT, RESULTS_USERS, SIGN_UP_ROUT } from "../../constants/routs.constants";

import { iconGlobe, iconBeach } from "../../asserts/imgIcon";

import "./index.css";
import { RootState } from "../../redux/root-reducer";
import { PLAYERS } from "../../constants/general.constants";

const Main: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isTwoPlayers, credentialUser } = useSelector((state: RootState) => state.data);
  const {
    register, handleSubmit, watch, reset, 
  } = useForm({ mode: "onBlur" });

  const email = watch("email");

  const onSubmit = (data): void => {
    if (isTwoPlayers) {
      if ((credentialUser.length + 1) === PLAYERS) {
        dispatch(logInTwoPlayers(data));
        history.push(COUNTRY_QUIZ_ROUT);
      } else {
        dispatch(logInTwoPlayers(data));
      }
    } else {
      dispatch(logInPlayer(data));
    }

    reset();
  };

  return (
    <form className="quiz-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="quiz-form_user-results">
        {isTwoPlayers && (
          <h3 className="quiz-form_user-results-player">
            Player 
            {" "}
            { credentialUser.length ? PLAYERS : 1 }
          </h3>
        )}
        <button onClick={() => history.push(RESULTS_USERS)} className="quiz-form_user-results-button">Show users results</button>
      </div>
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
