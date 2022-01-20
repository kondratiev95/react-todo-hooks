import { memo, useCallback } from "react";
import { Field, useField } from "react-final-form";

function TodoInput({ handleSubmit }) {
  const { input } = useField("todoInput");

  const addItem = useCallback((e) => {
    if (e.key === "Enter" && input.value.trim().length !== 0) {
      handleSubmit(input.value);
      input.onChange("");
    }
  },[handleSubmit, input]);
  
  return (
    <Field
      name="todoInput"
      render={({ input }) => (
        <input
          type="text"
          placeholder="What needs to be done?"
          value={input.value}
          onChange={input.onChange}
          onKeyPress={addItem}
          autoFocus
        />
      )}
    />
  );
}

export default memo(TodoInput);
