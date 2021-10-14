import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Unsigned from "./ui/unsigned";
import CalanderMonth from "./ui/calenderMonth";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selector";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6.5em",
  },
  mainPageSub: {
    border: "1px solid black",
  },
}));

export default function Calander(props) {
  const classes = useStyles();
  const userLoggedIn = useSelector(selectCurrentUser);

  return (
    <Grid container direction="column" className={classes.mainPageStyle}>
      {/* {userLoggedIn ? ( */}
      {/* <Grid item>
        <Typography variant="h5">Calander</Typography>
      </Grid> */}
      <Grid item>
        <CalanderMonth />
      </Grid>
      {/* ) : (
        <Grid item>
          <Unsigned />
        </Grid>
      )} */}
    </Grid>
  );
}
