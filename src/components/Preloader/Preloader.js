import { CircularProgress } from "@mui/material";
import { preloaderStyles } from "./preloaderStyles";

const Preloader = () => {
  const classes = preloaderStyles();

  return (
    <div className={classes.preloader}>
      <CircularProgress style={{ color: "rosybrown", marginLeft: "20px" }} />
      <h3>Loading...</h3>
    </div>
  );
};

export default Preloader;
