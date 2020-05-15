
import {createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../redux/reducers'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(sagaMiddleware)
  ));

  sagaMiddleware.run(rootSaga)

export default store;


