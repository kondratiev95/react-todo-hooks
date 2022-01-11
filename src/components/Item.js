import { useState, useCallback } from 'react'
import { EditInput } from './EditInput';

export const Item = ({task, editTodo, removeItem, checkboxHandler}) => {

    const [editing, setEditing] = useState(false);
    const [newValue, setNewValue] = useState(task.value)
 
    const onDoubleClick = useCallback(() => {
        setEditing(true);
    },[]);
 
    const onInput = useCallback(e => {
        setNewValue(e.target.value);
    }, []);

    const onBlur = useCallback( () => {
        if(newValue.trim()) {
            editTodo(task._id, newValue);
            setEditing(false);
        } else {
            removeItem(task._id);
        }
    }, [editTodo, newValue, removeItem, task._id]);

    const onInputKeyPress = useCallback(e => {
        if(e.key === 'Enter') {
            onBlur();
        }
    }, [onBlur]);

    const onCheckboxChange = useCallback( () => {
        checkboxHandler(task._id);
    }, [checkboxHandler, task._id]);

    const deleteItem = useCallback(() => {
        removeItem(task._id);
    },[removeItem, task._id]);

    return (
        editing 
        ? (
            <EditInput 
                newValue={newValue} 
                value={task.value} 
                onInput={onInput}
                onBlur={onBlur}
                onInputKeyPress={onInputKeyPress}
            />
        ) : (
            <li className='todo-item'>
                <input 
                    id='item-checkbox'
                    className='input-checkbox'
                    type="checkbox" 
                    onChange={onCheckboxChange} 
                    checked={task.completed}
                />
                <label htmlFor={task._id} onClick={onCheckboxChange}></label>
                <p 
                    className={task.completed ? 'todo-content toggle-checkbox' : 'todo-content'}
                    onDoubleClick={onDoubleClick}
                >
                    {task.value}
                </p>
                <button onClick={deleteItem} className='delete'></button>
            </li> 
        )
    )
}