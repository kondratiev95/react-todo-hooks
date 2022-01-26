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
        case addTodoItem.SUCCESS: 
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case removeTodoItem.SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo._id !== action.payload)]
            }
        case editTodoItem.SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo._id === action.payload.id) {
                        return {
                            ...todo,
                            value: action.payload.value
                        }
                    } else {
                        return todo
                    }
                })
            }
        case checkboxTodoHandler.SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                todos: [...state.todos.map(todo => {
                    if(todo._id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo
                    }
                })]
            }
        case deleteCompletedTodo.SUCCESS:
        case getTodoList.SUCCESS:
        case handleAll.SUCCESS:
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