import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/actions";

const Footer = () => {
    const [isTodoCompleted, setIsTodoCompleted] = useState(false);
    
    const type = useSelector(state => state.todoReducer.type);
    const todos = useSelector(state => state.todoReducer.todos)
    const counter = todos.filter(item => item.completed === false).length;

    const dispatch = useDispatch();

    const filterType = useCallback( e => {
        dispatch({ type: actions.SET_TYPE, payload: e.target.getAttribute('data-type')});
    }, [dispatch]);

    const removeCompletedTodo = useCallback(() => {
        dispatch({ type: actions.DELETE_COMPLETED.REQUEST});
    },[dispatch]);

    useEffect(() => {
        const isCompletedItem = todos.some(todo => todo.completed);
        if(isCompletedItem) {
           setIsTodoCompleted(true);
        }
    }, [todos]);

    useEffect(() => {
        const isCompletedItem = todos.some(todo => todo.completed);
        if (isTodoCompleted !== isCompletedItem) {
            setIsTodoCompleted(isCompletedItem);
        }
    },[todos, isTodoCompleted]);
    
    return (
        <div className='todo-footer'>
            <div className="counter">{`${counter} ${counter === 1 ? 'item' : 'items'} left`}</div>
            <div className="filter-btns">
                <button 
                    data-type='all' 
                    onClick={filterType} 
                    className={ type === 'all' ? 'focus-btn' : null}
                >
                    all
                </button>
                <button 
                    data-type='active' 
                    onClick={filterType} 
                    className={type === 'active' ? 'focus-btn' : null}
                >
                    active
                </button>
                <button 
                    data-type='completed' 
                    onClick={filterType} 
                    className={type === 'completed' ? 'focus-btn' : null}
                >
                    completed
                </button>
            </div>
            {
                isTodoCompleted
                ?   <button 
                        onClick={removeCompletedTodo} 
                        className='clear-completed'>
                        clear completed
                    </button>
                : null
            }
        </div>
    )
}
export default Footer;