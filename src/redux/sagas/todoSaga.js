import { takeEvery, put, call } from 'redux-saga/effects';
import { getData, addData, deleteItem, toggleItem, deleteCompleted, toggleAll, changeTodo } from '../../api/todoAPI';
import { actions } from '../actions';
 

function* watchLoadDataSaga() {
    yield takeEvery(actions.GET_TODOS.REQUEST, getTodos);
    yield takeEvery(actions.ADD_ITEM.REQUEST, addTodo);
    yield takeEvery(actions.REMOVE_TODOS.REQUEST, removeTodo);;
    yield takeEvery(actions.CHECKBOX_HANDLER.REQUEST, checkboxHandler);
    yield takeEvery(actions.DELETE_COMPLETED.REQUEST, removeCompleted);
    yield takeEvery(actions.TOGGLE_ALL.REQUEST, handleAllCompleted);
    yield takeEvery(actions.EDIT_TODO.REQUEST, editTodo);
}

export default function* rootSaga() {
    yield watchLoadDataSaga();
}

function* getTodos() {
    try {
        const res = yield call(getData);
        if(res) {
            yield put({type: actions.GET_TODOS.SUCCESS, payload: res});
        } else {
            yield put({type: actions.GET_TODOS.FAILED });
        }
    } catch(e) {
        yield put({type: actions.GET_TODOS.FAILED });
    }
}

function* addTodo(params) {
    try {
        const res = yield call(addData, params.payload);
        if(res) {
            yield put({type: actions.ADD_ITEM.SUCCESS, payload: res});
        } else {
            yield put({ type: actions.ADD_ITEM.FAILED});
        }
    } catch(e) {
        yield put({ type: actions.ADD_ITEM.FAILED});
    }  
}

function* removeTodo(params) {
    try {
        const res = yield call(deleteItem, params.payload);
        if(res) {
            yield put({ type: actions.REMOVE_TODOS.SUCCESS, payload: res});
        } else {
            yield put({ type: actions.REMOVE_TODOS.FAILED})
        }
    } catch(e) {
        yield put({ type: actions.REMOVE_TODOS.FAILED})
    }
}

function* checkboxHandler(params) {
    try {
        const res = yield call(toggleItem, params.payload);
        if(res) {
            yield put({ type: actions.CHECKBOX_HANDLER.SUCCESS, payload: res});
        } else {
            yield put({ type: actions.CHECKBOX_HANDLER.FAILED});
        }
    } catch(e) {
        yield put({ type: actions.CHECKBOX_HANDLER.FAILED});
    }
}

function* removeCompleted() {
    try {
        const res = yield call(deleteCompleted);
        if(res) {
            yield put({ type: actions.DELETE_COMPLETED.SUCCESS, payload: res});
        } else {
            yield put({ type: actions.DELETE_COMPLETED.FAILED});
        }
    } catch(e) {
        yield put({ type: actions.DELETE_COMPLETED.FAILED});
    }
}

function* handleAllCompleted(params) {
    try {
        const res = yield call(toggleAll, params.payload);
        if(res) {
            yield put({ type: actions.TOGGLE_ALL.SUCCESS, payload: res});
        } else {
            yield put({ type: actions.TOGGLE_ALL.FAILED });
        }
    } catch(e) {
        yield put({ type: actions.TOGGLE_ALL.FAILED });
    }
}

function* editTodo(params) {
    try {
        const res = yield call(changeTodo, params.payload);
        if(res) {
            yield put({ type: actions.EDIT_TODO.SUCCESS, payload: res});
        } else {
            yield put({ type: actions.EDIT_TODO.FAILED})
        }
    } catch(e) {
        yield put({ type: actions.EDIT_TODO.FAILED})
    }
}


