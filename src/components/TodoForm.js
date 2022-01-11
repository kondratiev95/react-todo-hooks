import { useCallback } from "react";
import { Form } from "react-final-form";
import Input from "./Input";

export const TodoForm = ({ addItem, handleAllCompleted, todos, isAllTodosCompleted }) => {

  const handleAll = useCallback(() => {
    handleAllCompleted();
  }, [handleAllCompleted]);

  return (
    <div className="todo-form">
      {todos.length ? (
        <i
          className={
            isAllTodosCompleted
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
