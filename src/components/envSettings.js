import React from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//Component Import
import Unsigned from "./ui/Unsigned";

//Redux imports
import { useSelector } from "react-redux";
import { selectTokenState } from "../redux/user/user.selector";
import { Typography } from "@material-ui/core";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6em",
    width: "100%",
    border: "0px solid",
  },
  mainPageSub: {
    border: "1px solid black",
  },
}));

export default function EnviromentSettings(props) {
  const classes = useStyles();
  //Get Global State
  const tokenState = useSelector(selectTokenState);

  return (
    <Grid
      container
      direction="column"
      className={classes.mainPageStyle}
    >
      {tokenState ? (
        <Grid item container style={{ border: "1px solid" }}>
          <Grid item>
            <Typography variant="h5">App Settings</Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid item>
          <Unsigned />
        </Grid>
      )}
    </Grid>
  );
}
