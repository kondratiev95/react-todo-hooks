import { ItemStyles } from "./ItemStyles";

export const EditInput = ({
  newValue,
  value,
  onInput,
  onBlur,
  onInputKeyPress,
}) => {
  const classes = ItemStyles();
  return (
    <li className="edit-item">
      <input
        type="text"
        className={classes.inputEdit}
        value={newValue}
        placeholder={value}
        onChange={onInput}
        onBlur={onBlur}
        onKeyDown={onInputKeyPress}
        autoFocus
      />
    </li>
  );
};
