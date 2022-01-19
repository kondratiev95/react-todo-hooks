import { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getErrorSelector,
  getTodosSelector,
} from "../../redux/selectors/selectors";
import TodoForm from "../Header/TodoForm.js";
import ListItem from "../Main/ListItem.js";
import Footer from "../Footer/Footer.js";
import {
  editTodoRequestAC,
  getTodoRequestAC,
  toggleAllRequestAC,
} from "../../redux/actionsCreator";

import { rootStyles } from "./rootStyles";

const Root = () => {
  const todosArray = useSelector(getTodosSelector);
  const errorMessage = useSelector(getErrorSelector);
  const dispatch = useDispatch();
  const isAllCompleted = useMemo(
    () => todosArray.every((item) => item.completed),
    [todosArray]
  );

  const classes = rootStyles();

  const handleAllCompleted = useCallback(() => {
    dispatch(toggleAllRequestAC(isAllCompleted));
  }, [isAllCompleted, dispatch]);

  const editTodo = useCallback(
    (id, value) => {
      dispatch(editTodoRequestAC({ id, value }));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getTodoRequestAC());
  }, [dispatch]);

  return (
    <>
      {errorMessage !== "" ? (
        <h1 className={classes.todoHeader}>{errorMessage}</h1>
      ) : (
        <div>
          <h1 className={classes.todoHeader}>todos</h1>
          <div className={classes.todoContainer}>
            <TodoForm
              handleAllCompleted={handleAllCompleted}
              isAllCompleted={isAllCompleted}
            />
            <ListItem editTodo={editTodo} />
            {todosArray.length ? <Footer /> : null}
          </div>
        </div>
      )}
    </>
  );
};
export default Root;
