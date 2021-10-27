import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import PrivateRoute from "./private-route/private-route";
import {
  CountryQuiz, Quiz, Results, AnswersQuiz, Main, SignUp, ShowResultsUsers, GamesUser, UserGameResult,
} from "./components";

import {
  COUNTRY_ROUT,
  FLAG_ROUT,
  COUNTRY_QUIZ_ROUT,
  RESULTS,
  SHOW_RESULT_QUIZ_ROUT,
  MAIN,
  SIGN_UP_ROUT, RESULTS_USERS, USER_GAMES, GAME_RESULT,
} from "./constants/routs.constants";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const App = () => (
  <div className="app main">
    <ToastContainer position="top-center" autoClose={4000} />
    <div>
      <Switch>
        <Route exact path={MAIN} component={Main} />
        <Route path={SIGN_UP_ROUT} component={SignUp} />
        <Route path={RESULTS_USERS} component={ShowResultsUsers} />
        <Route path={USER_GAMES(":id")} component={GamesUser} />
        <Route path={GAME_RESULT} component={UserGameResult} />
        <PrivateRoute path={COUNTRY_QUIZ_ROUT} component={CountryQuiz} />
        <PrivateRoute path={FLAG_ROUT} component={Quiz} />
        <PrivateRoute path={COUNTRY_ROUT} component={Quiz} />
        <PrivateRoute path={RESULTS} component={Results} />
        <PrivateRoute path={SHOW_RESULT_QUIZ_ROUT} component={AnswersQuiz} />
      </Switch>
    </div>
  </div>
);

export default App;
