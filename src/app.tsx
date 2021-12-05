import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "./redux/root-reducer";
import PrivateRoute from "./private-route/private-route";
import {
  CountryQuiz,
  Quiz,
  Results,
  AnswersQuiz,
  Main,
  SignUp,
  ShowResultsUsers,
  GamesUser,
  UserGameResult,
  Profile,
  EditProfile,
  MainGame,
} from "./components";

import {
  COUNTRY_ROUT,
  FLAG_ROUT,
  COUNTRY_QUIZ_ROUT,
  RESULTS,
  SHOW_RESULT_QUIZ_ROUT,
  MAIN,
  SIGN_UP_ROUT,
  RESULTS_USERS,
  USER_GAMES,
  GAME_RESULT,
  USER_PROFILE,
  USER_PROFILE_EDIT,
  MAIN_GAME,
} from "./constants/routs.constants";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const App = () => {
  const { userGames } = useSelector((state: RootState) => state.data);

  return (
        <div className="app main">
            <ToastContainer position="top-center" autoClose={4000} />
            <div>
                <Switch>
                    <Route exact path={MAIN_GAME} component={MainGame} />
                    <Route exact path={MAIN} component={Main} />
                    <Route path={SIGN_UP_ROUT} component={SignUp} />
                    <Route path={RESULTS_USERS} component={ShowResultsUsers} />
                    <Route path={USER_GAMES}>{!userGames.length ? <Redirect to={RESULTS_USERS} /> : <GamesUser />}</Route>
                    <Route path={GAME_RESULT}>
                        {!userGames.length ? <Redirect to={RESULTS_USERS} /> : <UserGameResult />}
                    </Route>
                    <PrivateRoute path={COUNTRY_QUIZ_ROUT} component={CountryQuiz} />
                    <PrivateRoute path={FLAG_ROUT} component={Quiz} />
                    <PrivateRoute path={COUNTRY_ROUT} component={Quiz} />
                    <PrivateRoute path={RESULTS} component={Results} />
                    <PrivateRoute path={SHOW_RESULT_QUIZ_ROUT} component={AnswersQuiz} />
                    <PrivateRoute path={USER_PROFILE} exact component={Profile} />
                    <Route path={USER_PROFILE_EDIT} exact component={EditProfile} />
                </Switch>
            </div>
        </div>
  );
};

export default App;
