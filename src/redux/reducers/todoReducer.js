import { addTodoItem, checkboxTodoHandler, deleteCompletedTodo, editTodoItem, getTodoList, removeTodoItem, handleAll } from "../actions";

const initialState = {
    todos: [],
    type: 'all',
    error: ''
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TYPE':
            return {
                ...state,
                type: action.payload
            }
        case getTodoList.SUCCESS:
        case addTodoItem.SUCCESS:
        case removeTodoItem.SUCCESS:
        case checkboxTodoHandler.SUCCESS:
        case deleteCompletedTodo.SUCCESS:
        case handleAll.SUCCESS:
        case editTodoItem.SUCCESS:
            return {
                ...state,
                todos: [...action.payload],
                error: '',
            }
        case getTodoList.FAILED:
        case addTodoItem.FAILED:
        case removeTodoItem.FAILED:
        case checkboxTodoHandler.FAILED:
        case deleteCompletedTodo.FAILED:
        case handleAll.FAILED:
        case editTodoItem.FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }   
};