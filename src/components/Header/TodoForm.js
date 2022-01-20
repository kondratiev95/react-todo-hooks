import { useCallback } from "react";
import { Form } from "react-final-form";
import Input from "../Main/TodoItem/Input";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodosSelector } from "../../redux/selectors/selectors";
import { addItemRequestAC } from "../../redux/actionsCreator";
import { formStyles } from "./formStyles";

const TodoForm = ({ handleAllCompleted, isAllCompleted }) => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodosSelector);
  const classes = formStyles();

  const addItem = useCallback((val) => {
    dispatch(addItemRequestAC(val.todoInput));
  },[dispatch]);

  const handleAll = useCallback(() => {
    handleAllCompleted();
  }, [handleAllCompleted]);

  return (
    <div className={classes.todoForm}>
      {todos.length ? (
        <i
          className={
            isAllCompleted
              ? `fas fa-angle-down ${classes.darkOpacity}`
              : "fas fa-angle-down"
          }
          onClick={handleAll}
        ></i>
      ) : null}
      <Form
        onSubmit={addItem}
        render={({ handleSubmit }) => <Input handleSubmit={handleSubmit} />}
      />
    </div>
  );
};
export default TodoForm;
