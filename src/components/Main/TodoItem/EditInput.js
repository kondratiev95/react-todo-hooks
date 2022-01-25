import useStyles from "./styles";
import { Input } from '@material-ui/core';

export const EditInput = ({newValue, value, onInput, onBlur, onInputKeyPress, checked}) => {
  const classes = useStyles();
  return (
    <li className="edit-item">
      <Input
        type="text"
        className={checked ? `${classes.inputEdit} ${classes.toggleCheckbox}` : classes.inputEdit}
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
