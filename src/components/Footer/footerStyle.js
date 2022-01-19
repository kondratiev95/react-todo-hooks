import { makeStyles } from "@mui/styles";

export const footerStyle = makeStyles({
  todoFooter: {
    padding: "15px 15px 15px 25px",
    fontWeight: "300",
  },
  focusBtn: {
    border: "1px solid black",
    padding: "4px",
    borderRadius: "3px",
  },
  clearCompleted: {
    marginLeft: "10px",
    border: "none",
    background: "none",
    cursor: "pointer",
    fontSize: "15px",
    marginRight: "25px",
    "&:focus": {
      border: "1px solid black",
      padding: "4px",
      borderRadius: "3px",
    },
  },
  counter: {
    display: "inline-block",
    fontSize: "15px",
    marginRight: "50px",
    width: "80px",
  },
  filterBtns: {
    display: "inline-block",
    margin: "0px auto",
    "& button": {
      border: "none",
      background: "none",
      fontSize: "15px",
      cursor: "pointer",
      marginRight: "25px",
      "&:focus": {
        border: "1px solid black",
        padding: "4px",
        borderRadius: "3px",
      },
    },
  },
});
