import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Main, Quiz, Results } from './components'

import PrivateRoute from './private-rout/private-rout'

import {
  COUNTRY_ROUT,
  FLAG_ROUT,
  MAIN,
  RESULTS
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
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
