export const createActions = type => {
    return {
        REQUEST: `${type}_REQUEST`,
        SUCCESS: `${type}_SUCCESS`,
        FAILED: `${type}_FAILED`
    }
}

export const getTodoList = createActions('GET_TODO');

export const addTodoItem = createActions('ADD_ITEM');

export const removeTodoItem = createActions('REMOVE_ITEM');

export const checkboxTodoHandler = createActions('CHECKBOX_HANDLER');

export const deleteCompletedTodo = createActions('DELETE_COMPLETED');

export const handleAll = createActions('TOGGLE_ALL');

export const editTodoItem = createActions('EDIT_TODO');

