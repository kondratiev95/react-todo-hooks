import { makeStyles } from "@mui/styles";

export const formStyles = makeStyles({
  todoForm: {
    width: "550p",
    margin: "10px auto 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "& input": {
      border: "none",
      padding: "14px 0px 14px 10px",
      fontSize: "25px",
      outline: "none",
      fontStyle: "italic",
      color: "rgb(168, 164, 164)",
      width: "400px",
    },
    "& i": {
      display: "block",
      fontSize: "30px",
      cursor: "pointer",
      color: 'lightgray',
      textAlign: "left",
      marginLeft: "10px",
    },
  },
  darkOpacity: {
    color: 'gray!important'
  },
});
