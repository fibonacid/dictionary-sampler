import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import {rootReducer} from './reducers/rootReducer'

const sagaMiddleware = createSagaMiddleware();

function logAction() {
   return next => action => {
      console.log(`dispatching action => ${action.type}`);
      console.log(`${action.payload || action.error}`);
      return next(action)
   }
}

export const store = createStore(
   rootReducer,
   applyMiddleware(logAction, sagaMiddleware)
);

sagaMiddleware.run(rootSaga)