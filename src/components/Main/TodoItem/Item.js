import { useState, useCallback } from "react";
import { EditInput } from "./EditInput";
import { useDispatch } from "react-redux";
import { checkboxRequestAC, removeItemRequestAC } from "../../../redux/actionsCreator";

import Checkbox from "@material-ui/core/Checkbox";
import useStyles from "./styles";
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClearIcon from '@material-ui/icons/Clear'

const Item = ({ task, editTodo }) => {
  const [editing, setEditing] = useState(false);
  const [newValue, setNewValue] = useState(task.value);

  const classes =  useStyles();

  const dispatch = useDispatch();

  const onDoubleClick = useCallback(() => {
    setEditing(true);
  }, []);

  const onInput = useCallback((e) => {
    setNewValue(e.target.value);
  }, []);

  const onBlur = useCallback(() => {
    if(newValue.trim()) {
      editTodo(task._id, newValue);
      setEditing(false);
    } else {
      dispatch(removeItemRequestAC(task._id));
    }
  }, [editTodo, newValue, task._id, dispatch]);

  const onInputKeyPress = useCallback((e) => {
    if(e.key === "Enter") {
      onBlur();
    }
  },[onBlur]);

  const onCheckboxChange = useCallback(() => {
    dispatch(checkboxRequestAC(task._id));
  }, [task._id, dispatch]);

  const deleteItem = useCallback(() => {
    dispatch(removeItemRequestAC(task._id));
  }, [task._id, dispatch]);

  return editing ? (
    <EditInput
      newValue={newValue}
      value={task.value}
      onInput={onInput}
      onBlur={onBlur}
      onInputKeyPress={onInputKeyPress}
      checked={task.completed}
    />
  ) : (
    <li className={classes.todoItem}>
      <Checkbox 
        className={classes.checkboxRoot}
        checked={task.completed} 
        icon={<PanoramaFishEyeIcon classes={{ root: classes.checkboxRoot}}/>} 
        checkedIcon={<CheckCircleOutlineIcon classes={{ root: classes.checkboxChecked}}/>}
        onClick={onCheckboxChange}
      />
      <p
        className={
          task.completed
            ? `${classes.todoContent} ${classes.toggleCheckbox}`
            : classes.todoContent
        }
        onDoubleClick={onDoubleClick}
      >
        {task.value.slice(0, 30)}
      </p>
      <ClearIcon 
        classes={{ root: classes.delete}} 
        onClick={deleteItem} 
      />
    </li>
  );
};
export default Item;
