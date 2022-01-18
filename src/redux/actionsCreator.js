import * as actions from "./actions";


export const getTodoRequestAC = () => {
    return {
        type: actions.getTodoList.REQUEST,
        payload: null
    };
};
export const getTodoSuccessAC = payload => {
    return {
        type: actions.getTodoList.SUCCESS,
        payload
    };
};
export const getTodosFailedAC = payload => {
    return {
        type: actions.getTodoList.FAILED,
        payload
    };
};



export const addItemRequestAC = payload => {
    return {
        type: actions.addTodoItem.REQUEST,
        payload
    };
};
export const addItemSuccessAC = payload => {
    return {
        type: actions.addTodoItem.SUCCESS,
        payload
    };
};
export const addItemFailedAC = payload => {
    return {
        type: actions.addTodoItem.FAILED,
        payload
    }
}



export const removeItemRequestAC = payload => {
    return {
        type: actions.removeTodoItem.REQUEST,
        payload
    }
}
export const removeItemSuccessAC = payload => {
    return {
        type: actions.removeTodoItem.SUCCESS,
        payload
    }
}
export const removeItemFailedAC = payload => {
    return {
        type: actions.removeTodoItem.FAILED,
        payload
    }
}



export const checkboxRequestAC = payload => {
    return {
        type: actions.checkboxTodoHandler.REQUEST,
        payload
    }
}
export const checkboxSuccessAC = payload => {
    return {
        type: actions.checkboxTodoHandler.SUCCESS,
        payload
    }
}
export const checkboxFailedAC = payload => {
    return {
        type: actions.checkboxTodoHandler.FAILED,
        payload
    }
}



export const deleteCompletedRequestAC = () => {
    return {
        type: actions.deleteCompletedTodo.REQUEST,
        payload: null
    }
}
export const deleteCompletedSuccessAC = payload => {
    return {
        type: actions.deleteCompletedTodo.SUCCESS,
        payload
    }
}
export const deleteCompletedFailedAC = payload => {
    return {
        type: actions.deleteCompletedTodo.FAILED,
        payload
    }
}



export const toggleAllRequestAC = payload => {
    return {
        type: actions.handleAll.REQUEST,
        payload
    }
}
export const toggleAllSuccessAC = payload => {
    return {
        type: actions.handleAll.SUCCESS,
        payload
    }
}
export const toggleAllFailedAC = payload => {
    return {
        type: actions.handleAll.FAILED,
        payload
    }
}


export const editTodoRequestAC = payload => {
    return {
        type: actions.editTodoItem.REQUEST,
        payload: payload
    }
}
export const editTodoSuccessAC = payload => {
    return {
        type: actions.editTodoItem.SUCCESS,
        payload: payload
    }
}
export const editTodoFailedAC = () => {
    return {
        type: actions.editTodoItem.FAILED,
        payload: null
    }
}

export const setCurrentTypeAC = payload => {
    return {
        type: 'SET_TYPE',
        payload
    }
}






