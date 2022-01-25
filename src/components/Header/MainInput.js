import { memo, useCallback } from "react";
import { Field, useField } from "react-final-form";
import { Input } from '@material-ui/core';
import useStyles from "./styles";

function MainInput({ handleSubmit }) {
  const { input } = useField("todoInput");

  const addItem = useCallback((e) => {
    if (e.key === "Enter" && input.value.trim().length !== 0) {
      handleSubmit(input.value);
      input.onChange("");
    }
  },[handleSubmit, input]);

  const classes = useStyles();
  
  return (
    <Field
      name="todoInput"
      render={({ input }) => (
        <Input
          className={classes.mainInput}
          disableUnderline={true}
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

export default memo(MainInput);