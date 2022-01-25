import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  todoItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px 10px 25px",
    backgroundColor: "white",
    border: "none",
    borderBottom: '1px solid #FFD5CC',
    "&:hover": {
      transition: "all 0.5s ease-in",
      "& $delete": {
        background: "none",
        border: "none",
        fontSize: "30px",
        fontWeight: 'bolder',
        color: "tomato",
        paddingRight: "5px",
        opacity: '1',
      },
    },
  },
  todoContent: {
    fontSize: "20px",
    color: "rgb(24, 20, 20)",
    marginRight: "auto",
    fontStyle: "italic",
    width: "489px",
    marginLeft: "50px",
  },
  toggleCheckbox: {
    textDecoration: "line-through",
    opacity: "0.3",
    fontStyle: 'italic'
  },
  inputEdit: {
    width: "500px",
    padding: "14px 20px 14px 25px",
    fontSize: '22px',
    marginLeft: "50px",
    outline: "none",
    border: "1px solid rgb(238, 238, 238)",
    boxShadow: "3px 2px 2px rgb(202, 202, 202)",
  },
  delete: {
    opacity: '0'
  },
  checkboxRoot: {
    color: 'LightGreen',
  },
  checkboxChecked: {
    color: 'Lime',
  }
}));

export default useStyles;
