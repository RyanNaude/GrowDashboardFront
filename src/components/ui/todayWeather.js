import React, { useEffect } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainPageStyle: {
    marginBottom: "0.5em",
  },
}));

export default function TodayWeather(props) {
  const classes = useStyles();

  useEffect(() => {}, []);

  //Test data
  const summTemp = [
    {
      maxTemp: "25",
      minTemp: "16",
      icon: "Icon",
      weekDay: "Mon",
      date: "01 | JAN",
    },
    {
      maxTemp: "26",
      minTemp: "17",
      icon: "Icon",
      weekDay: "Tue",
      date: "02 | JAN",
    },
    {
      maxTemp: "28",
      minTemp: "16",
      icon: "Icon",
      weekDay: "Wed",
      date: "03 | JAN",
    },
    {
      maxTemp: "28",
      minTemp: "17",
      icon: "Icon",
      weekDay: "Thu",
      date: "04 | JAN",
    },
    {
      maxTemp: "26",
      minTemp: "15",
      icon: "Icon",
      weekDay: "Fri",
      date: "05 | JAN",
    },
  ];

  return (
    <Grid container className={classes.mainPageStyle} direction="column">
      <Grid item container style={{ border: "1px solid" }} direction="row">
        <Grid item style={{ border: "1px solid", width: "50%" }}>
          <h1>Grid 1</h1>
        </Grid>
        <Grid item style={{ border: "1px solid", width: "50%" }}>
          <h1>Grid 2</h1>
        </Grid>
      </Grid>
      <Grid item container style={{ border: "1px solid" }} direction="row">
        <Grid item style={{ border: "1px solid", width: "50%" }}>
          <h1>Grid 3</h1>
        </Grid>
        <Grid item style={{ border: "1px solid", width: "50%" }}>
          <h1>Grid 4</h1>
        </Grid>
      </Grid>
      {/* <h1>Today Weather</h1> */}
    </Grid>
  );
}
