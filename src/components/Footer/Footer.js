import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodosSelector, filterTypeSelector } from "../../redux/selectors/selectors";
import { deleteCompletedRequestAC, setCurrentTypeAC } from "../../redux/actionsCreator";
import Button from '@mui/material/Button';

import { footerStyle } from "./footerStyle";

const Footer = () => {
  const [isTodoCompleted, setIsTodoCompleted] = useState(false);

  const type = useSelector(filterTypeSelector);
  const todos = useSelector(getTodosSelector);
  const counter = useMemo(() => todos.filter((item) => item.completed === false).length, [todos]);
  const classes = footerStyle();
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
          className={classes.filterBtn || type === "all" ? `${classes.filterBtn} ${classes.focusBtn}` : null}
        >
          all
        </Button>
        <Button
          data-type="active"
          onClick={filterType}
          size="small" 
          className={classes.filterBtn || type === "active" ? `${classes.filterBtn} ${classes.focusBtn}` : null}
        >
          active
        </Button>
        <Button
          data-type="completed"
          onClick={filterType}
          className={classes.filterBtn || type === "completed" ? `${classes.filterBtn} ${classes.focusBtn}` : null}
        >
          completed
        </Button>
      </div>
      {isTodoCompleted ? (
        <Button
          onClick={removeCompletedTodo}
          className={classes.clearCompleted}
        >
          clear completed
        </Button>
      ) : null}
    </div>
  );
};
export default Footer;
