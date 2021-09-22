import { Switch, Route, BrowserRouter } from 'react-router-dom'

import PrivateRoute from './private-rout/private-rout'
import { Main, Quiz, Results } from './components'

import {
  COUNTRY_ROUT,
  FLAG_ROUT,
  MAIN,
  RESULTS,
  SHOW_RESULT_QUIZ_ROUT
} from './constants/routs.constants'

import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app main">
        <div className="main__heading">
          <h1 className="main__title">COUNTRY QUIZ</h1>
          <Switch>
            <Route exact path={MAIN} component={Main} />
            <PrivateRoute path={FLAG_ROUT} component={Quiz} />
            <PrivateRoute path={COUNTRY_ROUT} component={Quiz} />
            <PrivateRoute path={RESULTS} component={Results} />
            <PrivateRoute path={SHOW_RESULT_QUIZ_ROUT} component={Quiz} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
