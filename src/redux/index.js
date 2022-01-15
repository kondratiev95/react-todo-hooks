import { createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducer } from './reducers/todoReducer';
import rootSaga from "./sagas/todoSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    todoReducer
})

export const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);