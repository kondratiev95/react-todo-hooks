import { takeEvery, put, call } from 'redux-saga/effects';
import * as actionCreators from '../actionsCreator';
import * as actions from '../actions';
import * as api from '../../api/todoAPI';
 

function* getTodos() {
    try {
        const res = yield call(api.getData);
        if(res) {
            yield put(actionCreators.getTodoSuccessAC(res));
        } else {
            throw new Error('Could not get data');
        }
    } catch(e) {
        yield put(actionCreators.getTodosFailedAC(e.message));
    }
}

function* addTodo(params) {
    try {
        const res = yield call(api.addData, params.payload);
        if(res) {
            yield put(actionCreators.addItemSuccessAC(res));
        } else {
            throw new Error('Could not get data');
        }
    } catch(e) {
        console.log('HELLO++++', e);
        yield put(actionCreators.addItemFailedAC(e.message));
    }  
}

function* removeTodo(params) {
    try {
        const res = yield call(api.deleteItem, params.payload);
        if(res) {
            yield put(actionCreators.removeItemSuccessAC(res));
        } else {
            throw new Error('Could not get data');
        }
    } catch(e) {
        yield put(actionCreators.removeItemFailedAC(e.message));
    }
}

function* checkboxHandler(params) {
    try {
        const res = yield call(api.toggleItem, params.payload);
        if(res) {
            yield put(actionCreators.checkboxSuccessAC(res));
        } else {
            throw new Error('Could not get data');
        }
    } catch(e) {
        yield put(actionCreators.checkboxFailedAC(e.message));
    }
}

function* removeCompleted() {
    try {
        const res = yield call(api.deleteCompleted);
        if(res) {
            yield put(actionCreators.deleteCompletedSuccessAC(res));
        } else {
            throw new Error('Could not get data');
        }
    } catch(e) {
        yield put(actionCreators.deleteCompletedFailedAC(e.message));
    }
}

function* handleAllCompleted(params) {
    try {
        const res = yield call(api.toggleAll, params.payload);
        if(res) {
            yield put(actionCreators.toggleAllSuccessAC(res));
        } else {
            throw new Error('Could not get data');
        }
    } catch(e) {
        yield put(actionCreators.toggleAllFailedAC(e.message));
    }
}

function* editTodo(params) {
    try {
        const res = yield call(api.changeTodo, params.payload);
        if(res) {
            yield put(actionCreators.editTodoSuccessAC(res));
        } else {
            throw new Error('Could not get data');
        }
    } catch(e) {
        yield put(actionCreators.editTodoFailedAC(e.message));
    }
}

function* watchLoadDataSaga() {
    yield takeEvery(actions.getTodoList.REQUEST, getTodos);
    yield takeEvery(actions.addTodoItem.REQUEST, addTodo);
    yield takeEvery(actions.removeTodoItem.REQUEST, removeTodo);;
    yield takeEvery(actions.checkboxTodoHandler.REQUEST,checkboxHandler);
    yield takeEvery(actions.deleteCompletedTodo.REQUEST, removeCompleted);
    yield takeEvery(actions.handleAll.REQUEST, handleAllCompleted);
    yield takeEvery(actions.editTodoItem.REQUEST, editTodo);
}

export default function* rootSaga() {
    yield watchLoadDataSaga();
}


