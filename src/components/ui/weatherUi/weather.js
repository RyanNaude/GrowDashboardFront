import React from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
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
  mainPageStyle: {},
  root: {
    backgroundColor: theme.palette.secondary.light,
    margin: "0.3em",
  },
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

  const dayData = {
    date: dispDate,
    minTemp: minTemp,
    maxTemp: maxTemp,
    weekDay: weekDay,
    iconString: iconString,
  };

  return (
    <Grid
      container
      className={classes.mainPageStyle}
      justifyContent="space-evenly"
      // spacing={5}
    >
      <Grid item container className={classes.dayGrid}>
        <Paper variant="outlined" className={classes.root}>
          <Grid item container justifyContent="center" xs={12}>
            <Typography className={classes.summMaxTemp}>
              {dayData.maxTemp}
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Divider className={classes.dividerStyle} />
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Typography className={classes.summMinTemp}>
              {dayData.minTemp}
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <img src={iconString} style={{ width: "50%" }} alt="fireSpot" />
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Typography className={classes.weekDay}>
              {dayData.weekDay}
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Typography className={classes.summDate}>{dayData.date}</Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
