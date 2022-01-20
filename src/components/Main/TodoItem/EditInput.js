import { ItemStyles } from "./ItemStyles";
import { Input } from '@mui/material';

export const EditInput = ({newValue, value, onInput, onBlur, onInputKeyPress }) => {
  const classes = ItemStyles();
  return (
    <li className="edit-item">
      <Input
        type="text"
        className={classes.inputEdit}
        value={newValue}
        placeholder={value}
        onChange={onInput}
        onBlur={onBlur}
        onKeyDown={onInputKeyPress}
        disableUnderline={true}
        autoFocus
      />
    </li>
  );
};
