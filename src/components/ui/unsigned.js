import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    width: "98.5vw",
    height: "50vh",
    marginLeft: "0em",
  },
  subPageStyle: {
    width: "98%",
  },
}));

export default function Unsigned() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      className={classes.mainPageStyle}
    >
      <Grid
        item
        container
        justifyContent="center"
        className={classes.subPageStyle}
      >
        <Typography variant="h5">Please sign in</Typography>
      </Grid>
    </Grid>
  );
}
