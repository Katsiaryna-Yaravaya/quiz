import {Switch, Route, BrowserRouter} from 'react-router-dom'

import {Main, Quiz, Results} from "./components";

import {COUNTRY_ROUT, FLAG_ROUT, MAIN, RESULTS} from "./constants/routs";

import './index.css'

const App = () => {

    const question = {
        country: ' is the capital of',
        flag: 'Which country does this flag belong to?'
    }

    return (
        <BrowserRouter>
            <div className='app main'>
                <div className='main__heading'>
                    <h1 className='main__title'>
                        COUNTRY QUIZ
                    </h1>
                    <Switch>
                        <Route exact path={MAIN} component={Main}/>
                        <Route path={FLAG_ROUT} render={() => <Quiz question={question.flag}/>}/>
                        <Route path={COUNTRY_ROUT} render={() => <Quiz question={question.country}/>}/>
                        <Route path={RESULTS} component={Results}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;