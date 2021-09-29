import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from './root-reducer'

const middlewares = [thunkMiddleware]

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

export default store
