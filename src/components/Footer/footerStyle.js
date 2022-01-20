import { makeStyles } from "@mui/styles";

export const footerStyle = makeStyles({
  todoFooter: {
    padding: "15px 15px 15px 25px",
    fontWeight: "300",
  },
  clearCompleted: {
    "&.MuiButton-root": {
      marginLeft: "10px",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: "10px",
      fontWeight: 'regular',
      color: 'black',
      marginRight: "25px",
      "&:focus": {
        border: "1px solid black",
        padding: "4px",
        borderRadius: "3px",
      },
    }
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
  },
  filterBtn: {
    "&.MuiButton-root": {
      border: "none",
      background: "none",
      fontSize: "10px",
      fontWeight: 'regular',
      color: 'black',
      cursor: "pointer",
      marginRight: "0px",
      "&:focus": {
        border: "1px solid black",
        padding: "4px",
        borderRadius: "3px",
      },
    },
  }
});
