import React, { useEffect } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

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
        <Grid
          item
          container
          direction="column"
          style={{ border: "1px solid", width: "50%" }}
        >
          <Grid item>Wed 16 | Day</Grid>
          <Grid item container direction="row">
            <Grid item style={{ border: "1px solid", width: "15%" }}>
              25
            </Grid>
            <Grid item style={{ border: "1px solid", width: "15%" }}>
              PIC
            </Grid>
            <Grid item container style={{ border: "1px solid", width: "70%" }}>
              <Grid item>Rain Perc%</Grid>
              <Grid item>Wind Dir/Km</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container style={{ border: "1px solid", width: "50%" }}>
          {/* <Grid item container direction="row" style={{ border: "1px solid" }}>
            <Grid item style={{ width: "10%" }}>
              I
            </Grid>
            <Grid item style={{ width: "40%" }}>
              Rec H
            </Grid>
            <Grid item style={{ width: "10%" }}>
              I
            </Grid>
            <Grid item style={{ width: "40%" }}>
              Ave H
            </Grid>
          </Grid>
          <Grid item container style={{ border: "1px solid" }}>
            <Grid item style={{ width: "10%" }}></Grid>
            <Grid item style={{ width: "40%" }}>
              9
            </Grid>
            <Grid item style={{ width: "10%" }}></Grid>
            <Grid item style={{ width: "40%" }}>
              15
            </Grid>
          </Grid>
          <Grid item container style={{ border: "1px solid" }}>
            <Grid item style={{ width: "10%" }}>
              I
            </Grid>
            <Grid item style={{ width: "40%" }}>
              Sunrise
            </Grid>
            <Grid item style={{ width: "10%" }}>
              I
            </Grid>
            <Grid item style={{ width: "40%" }}>
              Sunset
            </Grid>
          </Grid>
          <Grid item container style={{ border: "1px solid" }}>
            <Grid item style={{ width: "10%" }}></Grid>
            <Grid item style={{ width: "40%" }}>
              4:34 am
            </Grid>
            <Grid item style={{ width: "10%" }}></Grid>
            <Grid item style={{ width: "40%" }}>
              4:23 pm
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item container style={{ border: "1px solid" }} direction="row">
        <Grid
          item
          container
          direction="column"
          style={{ border: "1px solid", width: "50%" }}
        >
          <Grid item>Wed 16 | Night</Grid>
          <Grid item container direction="row">
            <Grid item style={{ border: "1px solid", width: "15%" }}>
              16
            </Grid>
            <Grid item style={{ border: "1px solid", width: "15%" }}>
              PIC
            </Grid>
            <Grid item container style={{ border: "1px solid", width: "70%" }}>
              <Grid item>Rain Perc%</Grid>
              <Grid item>Wind Dir/Km</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </Typography>
          </Grid>
        </Grid>
        <Grid Grid item container style={{ border: "1px solid", width: "50%" }}>
          {/* <Grid item container direction="row" style={{ border: "1px solid" }}>
            <Grid item style={{ width: "10%" }}>
              I
            </Grid>
            <Grid item style={{ width: "40%" }}>
              Rec H
            </Grid>
            <Grid item style={{ width: "10%" }}>
              I
            </Grid>
            <Grid item style={{ width: "40%" }}>
              Ave H
            </Grid>
          </Grid>
          <Grid item container style={{ border: "1px solid" }}>
            <Grid item style={{ width: "10%" }}></Grid>
            <Grid item style={{ width: "40%" }}>
              9
            </Grid>
            <Grid item style={{ width: "10%" }}></Grid>
            <Grid item style={{ width: "40%" }}>
              15
            </Grid>
          </Grid>
          <Grid item container style={{ border: "1px solid" }}>
            <Grid item style={{ width: "10%" }}>
              I
            </Grid>
            <Grid item style={{ width: "40%" }}>
              Sunrise
            </Grid>
            <Grid item style={{ width: "10%" }}>
              I
            </Grid>
            <Grid item style={{ width: "40%" }}>
              Sunset
            </Grid>
          </Grid>
          <Grid item container style={{ border: "1px solid" }}>
            <Grid item style={{ width: "10%" }}></Grid>
            <Grid item style={{ width: "40%" }}>
              4:34 am
            </Grid>
            <Grid item style={{ width: "10%" }}></Grid>
            <Grid item style={{ width: "40%" }}>
              4:23 pm
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
