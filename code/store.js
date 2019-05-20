import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import {rootReducer} from './reducers/rootReducer'

const sagaMiddleware = createSagaMiddleware();

const clc = require('cli-color');

function logger({getState}) {
   return next => action => {
      console.log(clc.blue(
`dispatching action => ${action.type} 
${JSON.stringify(getState(), null, 3)}
`))
      return next(action)
   }
}

export const store = createStore(
   rootReducer,
   applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)