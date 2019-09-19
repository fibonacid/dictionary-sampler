import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import {rootReducer} from './reducers/rootReducer'
import { maxApi } from "./lib/config/maxApi";

const sagaMiddleware = createSagaMiddleware();

function logAction() {
   return next => action => {
      const message =
          `${action.type} => \t${JSON.stringify(action.payload) || action.error}`;
      maxApi.post(message);
      return next(action)
   }
}

export const store = createStore(
   rootReducer,
   applyMiddleware(logAction, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);