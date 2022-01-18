import { useState, useCallback } from 'react'
import { EditInput } from './EditInput';
import { useDispatch } from 'react-redux';
import { checkboxRequestAC, removeItemRequestAC } from '../../../redux/actionsCreator';

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
            dispatch(removeItemRequestAC(task._id));
        }
    }, [editTodo, newValue, task._id, dispatch]);

    const onInputKeyPress = useCallback(e => {
        if(e.key === 'Enter') { onBlur() };
    }, [onBlur]);

    const onCheckboxChange = useCallback(() => {
        dispatch(checkboxRequestAC(task._id));
    }, [task._id, dispatch]);

    const deleteItem = useCallback(() => {
        dispatch(removeItemRequestAC(task._id));
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