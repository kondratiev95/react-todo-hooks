import { useCallback } from "react";
import { Form } from "react-final-form";
import Input from "./Input";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "../redux/actions";

const TodoForm = ({ handleAllCompleted, isAllCompleted }) => {
  const dispatch = useDispatch();
  const todosLength = useSelector(state => state.todoReducer.todos).length;

  const addItem = useCallback((val) => {
    dispatch({type: actions.ADD_ITEM.REQUEST, payload: val.todoInput });
  }, [dispatch]);

  console.log(isAllCompleted, 'isAllCompleted')

  const handleAll = useCallback(() => {
    handleAllCompleted();
  }, [handleAllCompleted]);

  return (
    <div className="todo-form">
      {todosLength ? (
        <i
          className={
            isAllCompleted
              ? "fas fa-angle-down dark-opacity"
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
