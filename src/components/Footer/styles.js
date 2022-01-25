import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  todoFooter: {
    padding: "20px 15px 15px 40px",
    fontWeight: "300",
  },
  clearCompleted: {
    marginLeft: "35px",
    border: "none",
    background: "none",
    cursor: "pointer",
    "&:focus": {
      border: "1px solid black",
      padding: "3px",
      borderRadius: "2px",
    },
  },
  label: {
    fontSize: "14px",
    fontWeight: "300",
    boxSizing: 'border-box',
    lineHeight: '1',
    minWidth: '20px'
  },
  root: {
    minWidth: '20px',
    textTransform: 'none'
  },
  counter: {
    display: "inline-block",
    fontSize: "13px",
    marginRight: "70px",
    width: "80px",
  },
  filterBtns: {
    display: "inline-block",
    margin: "0px auto",
  },
  filterBtn: {
    border: "none",
    background: "none",
    fontSize: "10px",
    cursor: "pointer",
    marginRight: "5px",
    "&:focus": {
      border: "1px solid black",
      padding: "3px",
      borderRadius: "2px",
    },
  },
  focusBtn: {
    border: "1px solid black",
    padding: "3px",
    borderRadius: "2px",
  },
}));

export default useStyles;
