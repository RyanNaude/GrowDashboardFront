import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Unsigned from "./ui/unsigned";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selector";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginLeft: "5em",
    width: "95%",
  },
  mainPageSub: {
    border: "1px solid black",
  },
}));

export default function EnviromentSettings(props) {
  const classes = useStyles();
  const userLoggedIn = useSelector(selectCurrentUser);

  return (
    <Grid
      container
      direction="column"
      className={classes.mainPageStyle}
      style={{
        marginLeft: "0.5em",
        marginRight: "0.5em",
        marginTop: "6em",
      }}
    >
      {/* {userLoggedIn ? ( */}
      <Grid item>
        <Typography variant="h5">App Settings</Typography>
      </Grid>
      {/* ) : (
        <Grid item>
          <Unsigned />
        </Grid>
      )} */}
    </Grid>
  );
}
