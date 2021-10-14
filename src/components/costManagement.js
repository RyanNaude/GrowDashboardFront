import React from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

//Component Import
import CostOFElec from "./ui/costOfElec";
import Unsigned from "./ui/unsigned";

//Redux imports
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selector";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginTop: "6em",
  },
  mainPageSub: {
  },
}));

export default function CostManagement(props) {
  const classes = useStyles();
  //Get Global State
  const userLoggedIn = useSelector(selectCurrentUser);

  return (
    <Grid
      container
      direction="column"
      className={classes.mainPageStyle}
      style={{}}
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
