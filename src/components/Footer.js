import React, { useEffect, useState, useCallback } from "react";

export const Footer = ({ todos, filterTodosType, deleteCompletedTodo, counter, type }) => {
 
    const [isTodoCompleted, setIsTodoCompleted] = useState(false);

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

    const filterType = useCallback( e => {
        filterTodosType(e);
    }, [filterTodosType]);

    const removeCompletedTodo = useCallback(() => {
        deleteCompletedTodo();
    },[deleteCompletedTodo]);
    
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