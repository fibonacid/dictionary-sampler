import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import {rootReducer} from './reducers/rootReducer'

const sagaMiddleware = createSagaMiddleware();

const clc = require('cli-color');

function logAction() {
   return next => action => {
      console.log(clc.blue(`dispatching action => ${action.type}`));
      return next(action)
   }
}

export const store = createStore(
   rootReducer,
   applyMiddleware(logAction, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)