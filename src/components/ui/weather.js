import React, { useState } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import CloudIcon from "@material-ui/icons/Cloud";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  summMaxTemp: {
    fontWeight: "bold",
    fontSize: "13pt",
  },
  summMinTemp: {
    fontSize: "10pt",
  },
  weekDay: {
    fontWeight: "bold",
    fontSize: "10pt",
  },
  summDate: {
    fontSize: "9pt",
  },
  mainPageStyle: {
    marginBottom: "0.5em",
    // border: "1px solid",
  },
  root: {
    backgroundColor: theme.palette.secondary.light,
  },
  // dayGrid: {
  //   width: "18%",
  // },
  // dividerStyle: {
  //   width: "80%",
  //   color: "black",
  // },
}));

export default function Weather(props) {
  const classes = useStyles();

  var weatherDaySumm = props.day.weather[0];
  var iconString =
    "https://openweathermap.org/img/wn/" + weatherDaySumm.icon + "@2x.png";

  const stringDate = props.convertDate(props.day.dt);
  var dispDate =
    stringDate.substring(8, 10) + " | " + stringDate.substring(4, 7);
  var weekDay = stringDate.substring(0, 3);

  var minTemp = Math.round(Number(props.day.temp.min));
  var maxTemp = Math.round(Number(props.day.temp.max));

  const [dayData, setDayData] = useState({
    date: dispDate,
    minTemp: minTemp,
    maxTemp: maxTemp,
    weekDay: weekDay,
    iconString: iconString,
  });

  return (
    <Grid
      container
      className={classes.mainPageStyle}
      justifyContent="space-evenly"
      
    >
      <Grid item container className={classes.dayGrid}>
        <Paper variant="outlined" style={{ width: "100%" }}>
          <Grid
            item
            container
            direction="column"
            className={classes.root}
          >
            <Grid item container justifyContent="center">
              <Typography className={classes.summMaxTemp}>
                {dayData.maxTemp}
              </Typography>
            </Grid>
            <Grid item container justifyContent="center">
              <Divider className={classes.dividerStyle} />
            </Grid>
            <Grid item container justifyContent="center">
              <Typography className={classes.summMinTemp}>
                {dayData.minTemp}
              </Typography>
            </Grid>
            <Grid item container justifyContent="center">
              <img
                src={iconString}
                style={{ width: "45%", height: "45%" }}
                alt="fireSpot"
              />
            </Grid>
            <Grid item container justifyContent="center">
              <Typography className={classes.weekDay}>
                {dayData.weekDay}
              </Typography>
            </Grid>
            <Grid item container justifyContent="center">
              <Typography className={classes.summDate}>
                {dayData.date}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
