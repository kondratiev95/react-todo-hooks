import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  todoForm: {
    backgroundColor: '#F6DDCC ',
    paddingLeft: '4px',
    width: "550p",
    margin: "10px auto 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  toggleAll: {
    fontSize: "30px",
    cursor: "pointer",
    color: 'Lime',
    textAlign: "left",
    opacity: '0.3'
  },
  darkOpacity: {
    color: 'Lime!important',
    opacity: '1'
  },
  mainInput: {
    border: 'none',
    padding: "10px 0px 10px 10px",
    fontSize: "25px",
    outline: "none",
    fontStyle: "italic",
    color: "rgb(168, 164, 164)",
    width: "400px",
  }
}));

export default useStyles;
