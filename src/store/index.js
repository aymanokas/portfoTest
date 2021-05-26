import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import rootSaga from './rootSaga'
import createLogger from 'redux-logger'
import { reducer as auth } from '../components/Login/store'

export const history = createBrowserHistory()

const reducers = {
  router: connectRouter(history),
  auth
}

const rootReducer = persistCombineReducers({
  key: 'root',
  storage
}, reducers)

const middlewares = []
const enhancers = []

/* Saga */
const sagaMiddleware = createSagaMiddleware({})

middlewares.push(sagaMiddleware)
middlewares.push(routerMiddleware(history))
middlewares.push(createLogger)

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? enhancers.push(applyMiddleware(...middlewares)) : enhancers.push(applyMiddleware(...middlewares))

/* Create Store */

export const store = createStore(
  rootReducer,
  compose(...enhancers)
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
