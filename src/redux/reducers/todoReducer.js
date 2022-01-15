import { actions } from "../actions";

const initialState = {
    todos: [],
    type: 'all',
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {

        case actions.SET_TYPE:
            try {
                return {
                    ...state,
                    type: action.payload
                }
            } catch(e) {
                console.log('SET_TYPE', e);
            }
            break;


        case actions.GET_TODOS.SUCCESS:
            try {
                return {
                    ...state,
                    todos: [...action.payload],
                }
            } catch(e) {
                console.log('GET_TODOS', e);
            }
            break;

             
        case actions.ADD_ITEM.SUCCESS:
            try {
                return {
                    ...state,
                    todos: [...action.payload],
                }
            } catch(e) {
                console.log('ADD_ITEM', e);
            }
            break;


        case actions.REMOVE_TODOS.SUCCESS:
            try {
                return {
                    ...state,
                    todos: [...action.payload],
                }
            } catch(e) {
                console.log('REMOVE_TODOS', e);
            }
            break;


        case actions.CHECKBOX_HANDLER.SUCCESS:
            try {
                return {
                    ...state,
                    todos: [...action.payload]
                }
            } catch(e) {
                console.log('CHECKBOX_HANDLER', e);
            }
            break;


        case actions.DELETE_COMPLETED.SUCCESS:
            try {
                return {
                    ...state,
                    todos: [...action.payload]
                }
            } catch(e) {
                console.log('DELETE_COMPLETED', e);
            }
            break;

             
        case actions.TOGGLE_ALL.SUCCESS:
            try {
                return {
                    ...state,
                    todos: [...action.payload]
                }
            } catch(e) {
                console.log('TOGGLE_ALL', e);
            }
            break;


        case actions.EDIT_TODO.SUCCESS:
            try {
                return {
                    ...state,
                    todos: [...action.payload]
                }
            } catch(e) {
                console.log('EDIT_TODO', e);
            }
            break;

        default:
            return state;
    }   
};