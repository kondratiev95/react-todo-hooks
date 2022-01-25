import { createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
import { todoReducer } from './reducers/todoReducer';
import rootSaga from "./sagas/todoSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    todoReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);