import { Switch, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify";

import PrivateRoute from "./private-route/private-route";
import {CountryQuiz, Quiz, Results, AnswersQuiz, Main, SignUp,} from "./components";

import {COUNTRY_ROUT, FLAG_ROUT, COUNTRY_QUIZ_ROUT, RESULTS, SHOW_RESULT_QUIZ_ROUT, MAIN, SIGN_UP_ROUT,} from "./constants/routs.constants";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const App = () => {
  return (
      <div className="app main">
        <ToastContainer position="top-center" autoClose={4000}/>
        <div className="main__heading">
          <Switch>
            <Route exact path={MAIN} component={Main} />
            <Route path={SIGN_UP_ROUT} component={SignUp} />
            <PrivateRoute path={COUNTRY_QUIZ_ROUT} component={CountryQuiz} />
            <PrivateRoute path={FLAG_ROUT} component={Quiz} />
            <PrivateRoute path={COUNTRY_ROUT} component={Quiz} />
            <PrivateRoute path={RESULTS} component={Results} />
            <PrivateRoute path={SHOW_RESULT_QUIZ_ROUT} component={AnswersQuiz}/>
          </Switch>
        </div>
      </div>
  );
};

export default App;
