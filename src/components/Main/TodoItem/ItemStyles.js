import { makeStyles } from "@mui/styles";

export const ItemStyles = makeStyles({
  todoItem: {
    display: "flex",
    alignItems: "center",
    padding: "20px 20px 20px 25px",
    backgroundColor: "white",
    border: "1px solid rgb(238, 238, 238)",
    "&:hover": {
      transition: "all 0.5s ease-in",
      "& $delete": {
        display: "block",
        background: "none",
        border: "none",
        fontSize: "20px",
        color: "tomato",
        fontWeight: "bold",
        paddingRight: "5px",
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
  },
  inputEdit: {
    width: "500px",
    padding: "20px 10px 20px 15px",
    marginLeft: "50px",
    outline: "none",
    border: "1px solid rgb(238, 238, 238)",
    boxShadow: "3px 2px 2px rgb(202, 202, 202)",
  },
  delete: {
    display: "none",
  },
});