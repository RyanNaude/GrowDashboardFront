import React from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//Component Import
import Unsigned from "./ui/unsigned";

//Redux imports
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selector";
import { Typography } from "@material-ui/core";

//Custom useStyles
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
  //Get Global State
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
