import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodosSelector, filterTypeSelector } from "../../redux/selectors/selectors";
import { deleteCompletedRequestAC, setCurrentTypeAC } from "../../redux/actionsCreator";
import Button from '@material-ui/core/Button';

import useStyles from "./styles";

const Footer = () => {
  const [isTodoCompleted, setIsTodoCompleted] = useState(false);
  const type = useSelector(filterTypeSelector);
  const todos = useSelector(getTodosSelector);
  const counter = useMemo(() => todos.filter((item) => item.completed === false).length, [todos]);
  const classes = useStyles();
  const dispatch = useDispatch();

  const filterType = useCallback((e) => {
    const currentType = e.target.getAttribute("data-type");
    dispatch(setCurrentTypeAC(currentType));
  },[dispatch]);

  const removeCompletedTodo = useCallback(() => {
    dispatch(deleteCompletedRequestAC());
  }, [dispatch]);

  useEffect(() => {
    const isCompletedItem = todos.some((todo) => todo.completed);
    if (isCompletedItem) {
      setIsTodoCompleted(true);
    }
  }, [todos]);

  useEffect(() => {
    const isCompletedItem = todos.some((todo) => todo.completed);
    if (isTodoCompleted !== isCompletedItem) {
      setIsTodoCompleted(isCompletedItem);
    }
  }, [todos, isTodoCompleted]);


  return (
    <div className={classes.todoFooter}>
      <div className={classes.counter}>{`${counter} ${counter === 1 ? "item" : "items"} left`}</div>
      <div className={classes.filterBtns}>
        <Button
          data-type="all"
          onClick={filterType}
          className={`${classes.filterBtn} ${type === "all" ? classes.focusBtn : ''}`}
          classes={{ label: classes.label, root: classes.root }}
        >
          all
        </Button>
        <Button
          data-type="active"
          onClick={filterType}
          size="small" 
          className={`${classes.filterBtn} ${type === "active" ? classes.focusBtn : ''}`}
          classes={{ label: classes.label, root: classes.root }}
        >
          active
        </Button>
        <Button
          data-type="completed"
          onClick={filterType}
          className={`${classes.filterBtn} ${type === "completed" ? classes.focusBtn : ''}`}
          classes={{ label: classes.label, root: classes.root }}
        >
          completed
        </Button>
      </div>
      {isTodoCompleted ? (
        <Button
        size="small"
          onClick={removeCompletedTodo}
          className={classes.clearCompleted}
          classes={{ label: classes.label, root: classes.root }}
        >
          clear completed
        </Button>
      ) : null}
    </div>
  );
};
export default Footer;

