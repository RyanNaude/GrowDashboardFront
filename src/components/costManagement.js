import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Unsigned from "./ui/unsigned";

import CostOFElec from "./ui/costOfElec";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selector";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6em",
  },
  mainPageSub: {    
    // border: "1px solid black",
  },
}));

export default function CostManagement(props) {
  const classes = useStyles();
  const userLoggedIn = useSelector(selectCurrentUser);

  return (
    <Grid
      container
      direction="column"
      className={classes.mainPageStyle}
      style={{
       
      }}
    >
      {/* {userLoggedIn ? ( */}
        <Grid item>
          <Typography variant="h5">Cost Management</Typography>
        </Grid>
        <Grid item className={classes.mainPageSub}>
          <CostOFElec />
        </Grid>
      {/* ) : (
        <Grid item>
          <Unsigned />
        </Grid>
      )} */}
    </Grid>
  );
}
