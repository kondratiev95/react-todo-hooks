import { useState, useCallback } from 'react'
import { EditInput } from './EditInput';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/actions';

const Item = ({ task, editTodo }) => {
    const [editing, setEditing] = useState(false);
    const [newValue, setNewValue] = useState(task.value);

    const dispatch = useDispatch();
 
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
            dispatch({ type: actions.REMOVE_TODOS.REQUEST, payload: task._id});
        }
    }, [editTodo, newValue, task._id, dispatch]);

    const onInputKeyPress = useCallback(e => {
        if(e.key === 'Enter') onBlur();
    }, [onBlur]);

    const onCheckboxChange = useCallback(() => {
        dispatch({ type: actions.CHECKBOX_HANDLER.REQUEST, payload: task._id});
    }, [task._id, dispatch]);

    const deleteItem = useCallback(() => {
        dispatch({ type: actions.REMOVE_TODOS.REQUEST, payload: task._id});
    },[task._id, dispatch]);

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
export default Item;