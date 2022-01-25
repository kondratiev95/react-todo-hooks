import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  todoList: {
    margin: "0px auto",
    listStyleType: "none",
  },
  todoError: {
    textAlign: "center",
    fontWeight: "normal",
    padding: "10px",
    fontStyle: "italic",
    color: "tomato",
  },
}));
export default useStyles;
