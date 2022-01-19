import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodosSelector,
  filterTypeSelector,
} from "../../redux/selectors/selectors";
import {
  deleteCompletedRequestAC,
  setCurrentTypeAC,
} from "../../redux/actionsCreator";

import { footerStyle } from "./footerStyle";

const Footer = () => {
  const [isTodoCompleted, setIsTodoCompleted] = useState(false);

  const type = useSelector(filterTypeSelector);
  const todos = useSelector(getTodosSelector);
  const counter = useMemo(
    () => todos.filter((item) => item.completed === false).length,
    [todos]
  );
  const classes = footerStyle();
  const dispatch = useDispatch();

  const filterType = useCallback(
    (e) => {
      const currentType = e.target.getAttribute("data-type");
      dispatch(setCurrentTypeAC(currentType));
    },
    [dispatch]
  );

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
      <div className={classes.counter}>{`${counter} ${
        counter === 1 ? "item" : "items"
      } left`}</div>
      <div className={classes.filterBtns}>
        <button
          data-type="all"
          onClick={filterType}
          className={type === "all" ? classes.focusBtn : null}
        >
          all
        </button>
        <button
          data-type="active"
          onClick={filterType}
          className={type === "active" ? classes.focusBtn : null}
        >
          active
        </button>
        <button
          data-type="completed"
          onClick={filterType}
          className={type === "completed" ? classes.focusBtn : null}
        >
          completed
        </button>
      </div>
      {isTodoCompleted ? (
        <button
          onClick={removeCompletedTodo}
          className={classes.clearCompleted}
        >
          clear completed
        </button>
      ) : null}
    </div>
  );
};
export default Footer;
